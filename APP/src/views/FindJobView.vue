<template>
  <main>
    <SearchTop />
    <div class="main-content">
      <div class="filters-container">Filtres</div>
      <div class="jobs-ads-container">
        <div class="top">
          <h2>Votre recherche</h2>
          <span class="order-by">
            <span class="result-count">{{ resCount }} résultats</span>
            <span class="order-by__btn">Trier par</span>
          </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import SearchTop from "@/components/search/SearchTop.vue";

let resCount = 0;
</script>
