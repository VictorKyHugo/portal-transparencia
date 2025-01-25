<template>
  <div class="flex flex-wrap gap-10 justify-center items-center">
    <Card v-for="x in 20" class="sm:w-1/2 md:w-1/3 lg:w-1/4">
      <template #title>Compras</template>
      <!-- <template #subtitle>Card subtitle</template> -->
      <template #content>
        <p class="m-0">
          Dispõe dos processos licitatórios e dispensados de licitação,
          contratos e aditivos firmados, fornecimentos e documentos firmados
          pela Administração Pública.
        </p>
      </template>
      <template #footer>
        <div class="flex justify-end mt-4">
          <SplitButton label="Ver detalhes" @click="save" :model="items" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
const items = [
  {
    label: "Inexigibilidade",
  },
  {
    label: "Convênios",
  },
  {
    label: "Dispensas",
  },
  {
    label: "Licitações",
  },
  {
    label: "Contratos e Aditivos",
  },
  {
    label: "Fiscais de Contratos",
  },
  {
    label: "Termos de Compromisso/Atas",
  },
  {
    label: "Ordem de Compras",
  },
  {
    separator: true,
  },
  {
    label: "Documentos",
    items: [
      {
        label: "Contratos e Aditivos (Documentos)",
      },
      {
        label: "Atas de Registro de Preço (Documentos)",
      },
      {
        label: "Atas das Licitações (Documentos)",
      },
      {
        label: "Editais (Documentos)",
      },
      {
        label: "Atas de Adesão - SRP",
      },
      {
        label: "Fiscal de Contrato",
      },
      {
        label: "Processos de Dispensa e Inexigibilidade",
      },
      {
        label: "Contratos e Aditivos – Lei nº 14.133/2021 (Documentos)",
      },
      {
        label: "Licitantes/Contratados Sancionados(Documentos)",
      },
      {
        label:
          "Parcerias com Entidades da Sociedade Civil Organizada (Documentos)",
      },
      {
        label: "Plano de Contratações Anual (Documentos)",
      },
    ],
  },
];

const save = () => {
  toast.add({
    severity: "success",
    summary: "Success",
    detail: "Data Saved",
    life: 3000,
  });
};
</script>
