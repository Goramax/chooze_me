<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="header-container">
      <div class="left">
        <RouterLink to="/" class="logo">
          <img alt="Logo ChoozeMe" src="./assets/imgs/logo.png" />
        </RouterLink>
        <div class="menu">
          <RouterLink to="/chercher">Trouver mon job</RouterLink>
          <RouterLink to="/messages">Messages</RouterLink>
          <RouterLink to="/communaute">Communauté</RouterLink>
          <RouterLink to="/aide">Aide</RouterLink>
        </div>
      </div>
      <div class="middle">
        <span>Caen</span>
      </div>
      <div class="right">
        <RouterLink to="/inscription" class="btn--secondary">Inscription</RouterLink>
        <RouterLink to="/connexion" class="btn--primary">Connexion</RouterLink>
      </div>
    </div>
  </header>

  <RouterView />

  <footer>FOOTER</footer>
</template>

<style scoped lang="scss">
@import "./assets/scss/base.scss";
header {
  width: 100%;
  position: relative;
  border-bottom: 1px solid $color-grey-light;
  background-color: white;
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 60px;
    .left, .right, .menu {
      display: flex;
      gap: 20px;
    }
  }
}
</style>
