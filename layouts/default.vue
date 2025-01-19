<template>
  <div class="flex flex-col h-screen">
    <header class="bg-slate-50 text-slate-900">
      <h1 class="text-3xl">Portal da transparência</h1>
      <h2 class="text-xl">Prefeitura municipal de Colatina - ES</h2>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "../components/layout/Footer";
</script>
