<template>
  <div class="flex flex-col h-screen">
    <Header />
    <main
      class="flex-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mx-16 my-10 p-10"
    >
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
</script>
