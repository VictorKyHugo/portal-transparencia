import axios from 'axios';
import { PrismaClient } from '@prisma/client';
import { xml2js } from 'xml-js';

const prisma = new PrismaClient();

interface Empenho {
  id: string;
  ano: string;
  mes: string;
  unidade_gestora: string;
  data: Date;
  especie: string;
  empenho: string;
  tipo_empenho: string;
  elemento_despesa: string;
  subtitulo: string;
  funcao: string;
  subfuncao: string;
  programa: string;
  fonte_recurso: string;
  grupo_despesa: string;
  documento_favorecido: string;
  nome_favorecido: string;
  valor: number;
}

async function fetchEmpenhos(year: number, month: number) {
  try {
    const { data } = await axios.get<string>(
      `https://colatina-es.portaltp.com.br/api/transparencia.asmx/json_empenhos?ano=${year}&mes=${month}`,
    );

    const xmlData = xml2js(data, { compact: true, textKey: 'values' });

    const { string: empenhosDataJson } = xmlData as {
      _declaration: object;
      string: {
        _attributes: string;
        values: string;
      };
    };

    const empenhosData = JSON.parse(empenhosDataJson.values) as Empenho[];

    const empenhosDataMapped = empenhosData.map((empenho) => {
      return {
        ...empenho,
        data: new Date(empenho.data),
      };
    });

    return empenhosDataMapped;
  } catch (error) {
    return Promise.reject(new Error('Problema ao chamar api ' + error));
  }
}

async function seedEmpenhos() {
  await prisma.empenho.deleteMany();

  for (let year = 2024; year <= 2025; year++) {
    for (let month = 1; month <= 12; month++) {
      try {
        const responseData: Empenho[] = await fetchEmpenhos(year, month);

        await prisma.empenho.createMany({
          data: responseData,
        });

        console.log(`Buscando data em ${month}/${year}`);
      } catch (error) {
        console.error(`Problema ao buscar data em ${month}/${year}:`, error);
      }
    }
  }
}

// Script to run the seeding process
async function main() {
  try {
    await seedEmpenhos();
  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

// fetchEmpenhos(2025, 1);
