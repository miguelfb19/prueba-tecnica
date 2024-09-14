<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <h1 class="menuTitle">Menú inicial</h1>
  <div class="containerBtnsHome mt-5">
    <button class="btn btn-primary">
      <RouterLink to="/form" class="btn-home">Ir al Formulario</RouterLink>
    </button>
    <button class="btn btn-primary">
      <RouterLink to="/data" class="btn-home"
        >Visualizar datos guardados</RouterLink
      >
    </button>

    <a href="https://miguelangeldev.vercel.app" class="btn btn-outline-primary" target="_blank"
      >Ir a mi portafolio</a
    >

    <a href="" class="btn btn-outline-primary">Ver código en GitHub</a>
  </div>
</template>
