<template>
  <div class="flex flex-wrap gap-10 justify-center items-center">
    <Card v-for="x in 20" class="sm:w-1/2 md:w-1/3 lg:w-1/4">
      <template #title>Despesas</template>
      <!-- <template #subtitle>Card subtitle</template> -->
      <template #content>
        <p class="m-0">
          Dispõe da aplicação de recursos da Administração Pública em empenhos,
          liquidações e pagamentos para custear serviços ou investir no
          desenvolvimento econômico.
        </p>
      </template>
      <template #footer>
        <div class="flex justify-end mt-4">
          <SplitButton
            label="Ver detalhes"
            @click="() => $router.push('/empenhos')"
            :model="itemsDespesas"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
const router = useRouter();

const itemsDespesas = ref([
  {
    label: "Empenhos e Favorecidos",
    command: () => {
      router.push("/empenhos");
    },
  },
  {
    label: "Liquidações e Favorecidos",
    disabled: true,
  },
  {
    label: "Pagamentos e Favorecidos",
    disabled: true,
  },
  {
    label: "Ordem Cronológica dos Pagamentos",
    disabled: true,
  },
  {
    label: "Despesas com Diárias",
    disabled: true,
  },
  {
    label: "Despesas com Passagens",
    disabled: true,
  },
  {
    label: "Despesas com Obras",
    disabled: true,
  },
  {
    separator: true,
  },
  {
    label: "Documentos",
    disabled: true,

    items: [
      {
        label: "Viagens e Diárias Custeadas por Terceiros",
        disabled: true,
      },
      {
        label: "Programas, Projetos e Ações",
        disabled: true,
      },
      {
        label: "Ordem Cronológica dos Pagamentos (Documentos)",
        disabled: true,
      },
      {
        label: "Relatório Res. Execução Orçamentária (RREO) (Documentos)",
        disabled: true,
      },
      {
        label: "Relatório Gestão Fiscal (RGF) (Documentos)",
        disabled: true,
      },
      {
        label: "Créditos Suplementares (Documentos)",
        disabled: true,
      },
      {
        label: "Despesas com Diárias (Documentos)",
        disabled: true,
      },
      {
        label: "Balanço Anual (Documentos)",
        disabled: true,
      },
      {
        label: "Balancetes Mensais (Documentos)",
        disabled: true,
      },
      {
        label: "Relatórios da Dívida Pública",
        disabled: true,
      },
      {
        label: "Cumprimento de Metas - PPA",
        disabled: true,
      },
    ],
  },
]);
</script>
