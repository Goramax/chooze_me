<script setup lang="ts">
import Slider from "../components/Slider.vue";
</script>

<template>
  <main>
    <Slider :items="[
      {
        image: 'https://images.unsplash.com/photo-1637710133707-688643e86b63?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        image: 'https://images.unsplash.com/photo-1702234663985-c4ebc2fd94db?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        image: 'https://images.unsplash.com/photo-1682686578601-e7851641d52c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ]" />
  </main>
</template>
