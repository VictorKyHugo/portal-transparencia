<template>
  <header class="text-slate-50 bg-zinc-900">
    <div class="ml-10 relative px-4 py-6 flex items-center">
      <Icon
        v-if="$route.path !== '/'"
        class="absolute -left-5 cursor-pointer"
        @click="
          () => {
            $router.back();
          }
        "
        size="1.5rem"
        name="material-symbols:arrow-back"
      />

      <div class="flex flex-col items-start">
        <h1 class="font-semibold text-xl">Portal da Transparência</h1>
        <div class="text-sm">Prefeitura Municipal de Colatina - ES</div>
      </div>
    </div>
  </header>
</template>
