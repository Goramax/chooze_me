<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import SearchHome from "../components/search/SearchHome.vue";
</script>
<template>
  <main>
    <p class="home-top-text">Un outil pratique</p>
    <h1 class="home-title">
      Trouvez votre <b>prochain job</b><br />simplement.
    </h1>
    <p class="home-subtext">
      Un service gratuit pour que chaque jeune puisse trouver un emploi
    </p>
    <SearchHome />
  </main>
  <div class="squares-container">
    <span class="square square__1"></span>
    <span class="square square__2"></span>
  </div>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    b {
      color: $color-primary;
    }
    text-align: center;
    font-weight: 900;
    font-size: $font-xxxl;
    margin: 0;
  }
  .home-top-text {
    text-align: center;
    font-size: $font-s;
    color: $color-primary;
    font-weight: 700;
    text-transform: uppercase;
  }
  .home-subtext {
    text-align: center;
    font-size: $font-m;
    color: $color-font-primary;
    font-weight: 400;
    margin-top: 20px;
  }
}
.squares-container {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    .square {
      border: 4px solid $color-font-primary;
      opacity: 0.2;
      width: 395px;
      height: 395px;
      position: absolute;
      z-index: -1;
      &__1 {
        top: 50%;
        left: -100px;
        animation: floating1 6s ease-in-out infinite;
        transform: rotate(45deg);
      }
      &__2 {
        bottom: -120px;
        right: -82px;
        transform: rotate(-20deg);
        animation: floating2 6s ease-in-out infinite;
      }
    }
  }
</style>
