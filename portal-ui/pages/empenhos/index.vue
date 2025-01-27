<template>
  <div class="card">
    <h1 class="font-semibold text-2xl mb-4">Empenhos</h1>
    <DataTable
      lazy
      size="small"
      showGridlines
      selectionMode="single"
      v-model:selection="selected"
      :value="empenhos"
      :loading="isFetching"
      paginator
      :rows="pageSize"
      :rowsPerPageOptions="rowOptions"
      :totalRecords
      tableStyle="min-width: 50rem"
      class="whitespace-nowrap"
      @page="onPageChange($event)"
      @rows="onPageChange($event)"
      @row-click="() => (visible = true)"
    >
      <Column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      >
        <template v-if="col.field === 'data'" #body="scope">
          {{ formatDate(scope.data[col.field]) }}
        </template>
      </Column>
    </DataTable>

    <Dialog
      v-model:visible="visible"
      @hide="
        () => {
          selected = {};
        }
      "
      modal
      closable
      header="Detalhes do Empenho"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h3 class="font-bold mb-2">Id</h3>
          <p class="mb-4">{{ selected.id }}</p>

          <h3 class="font-bold mb-2">Ano</h3>
          <p class="mb-4">{{ selected.ano }}</p>

          <h3 class="font-bold mb-2">Mês</h3>
          <p class="mb-4">{{ selected.mes }}</p>

          <h3 class="font-bold mb-2">Unidade Gestora</h3>
          <p class="mb-4">{{ selected.unidade_gestora }}</p>

          <h3 class="font-bold mb-2">Data</h3>
          <p class="mb-4">{{ formatDate(selected.data) }}</p>

          <h3 class="font-bold mb-2">Espécie</h3>
          <p class="mb-4">{{ selected.especie }}</p>

          <h3 class="font-bold mb-2">Empenho</h3>
          <p class="mb-4">{{ selected.empenho }}</p>

          <h3 class="font-bold mb-2">Tipo Empenho</h3>
          <p class="mb-4">{{ selected.tipo_empenho }}</p>

          <h3 class="font-bold mb-2">Elemento Despesa</h3>
          <p class="mb-4">{{ selected.elemento_despesa }}</p>
        </div>

        <div>
          <h3 class="font-bold mb-2">Subtítulo</h3>
          <p class="mb-4">{{ selected.subtitulo }}</p>

          <h3 class="font-bold mb-2">Função</h3>
          <p class="mb-4">{{ selected.funcao }}</p>

          <h3 class="font-bold mb-2">Subfunção</h3>
          <p class="mb-4">{{ selected.subfuncao }}</p>

          <h3 class="font-bold mb-2">Programa</h3>
          <p class="mb-4">{{ selected.programa }}</p>

          <h3 class="font-bold mb-2">Fonte Recurso</h3>
          <p class="mb-4">{{ selected.fonte_recurso }}</p>

          <h3 class="font-bold mb-2">Grupo Despesa</h3>
          <p class="mb-4">{{ selected.grupo_despesa }}</p>

          <h3 class="font-bold mb-2">Documento Favorecido</h3>
          <p class="mb-4">{{ selected.documento_favorecido }}</p>

          <h3 class="font-bold mb-2">Nome Favorecido</h3>
          <p class="mb-4">{{ selected.nome_favorecido }}</p>

          <h3 class="font-bold mb-2">Valor</h3>
          <p class="mb-4">R$ {{ selected.valor }}</p>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
const page = ref(1);
const totalRecords = ref(0);

const selected = ref();
const rowOptions = [10, 25, 50, 100];
const pageSize = ref(rowOptions[0]);

const visible = ref(false);

const formatDate = (data) => {
  return data.split("T")[0].split("-").reverse().join("/");
};

const columns = [
  { field: "id", header: "Id" },
  { field: "ano", header: "Ano" },
  { field: "mes", header: "Mes" },
  { field: "unidade_gestora", header: "Unidade Gestora" },
  { field: "data", header: "Data" },
  { field: "especie", header: "Especie" },
  { field: "empenho", header: "Empenho" },
  { field: "tipo_empenho", header: "Tipo Empenho" },
  { field: "elemento_despesa", header: "Elemento Despesa" },
  { field: "subtitulo", header: "Subtitulo" },
  { field: "funcao", header: "Funcao" },
  { field: "subfuncao", header: "Subfuncao" },
  { field: "programa", header: "Programa" },
  { field: "fonte_recurso", header: "Fonte Recurso" },
  { field: "grupo_despesa", header: "Grupo Despesa" },
  { field: "documento_favorecido", header: "Documento Favorecido" },
  { field: "nome_favorecido", header: "Nome Favorecido" },
  { field: "valor", header: "Valor" },
];

const fetchTableData = async (nextPage, rowsPerPage) => {
  isFetching.value = true;

  const { data, meta } = await $fetch(
    `http://localhost:3000/empenhos?page=${nextPage}&pageSize=${rowsPerPage}`
  );

  empenhos.value = data;

  page.value = meta.page;
  pageSize.value = meta.pageSize;
  totalRecords.value = meta.totalCount;

  isFetching.value = false;
};

const isFetching = ref(false);
const empenhos = ref();

onMounted(async () => {
  await fetchTableData(page.value, pageSize.value);
});

async function onPageChange(event) {
  const nextPage = event.page + 1;
  const rowsPerPage = event.rows;

  await fetchTableData(nextPage, rowsPerPage);
}
</script>
