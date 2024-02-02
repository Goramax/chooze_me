<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import IconMap from "./components/icons/IconMap.vue";
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
          <RouterLink to="/aide-juridique">Assistance Juridique</RouterLink>
        </div>
      </div>
      <div class="middle">
        <span class="icon"><IconMap /></span><span>Caen</span>
      </div>
      <div class="right">
        <RouterLink to="/inscription" class="btn--secondary"
          >Inscription</RouterLink
        >
        <RouterLink to="/connexion" class="btn--primary">Connexion</RouterLink>
      </div>
    </div>
  </header>

  <RouterView />

  <!-- <footer>FOOTER</footer> -->
</template>

<style lang="scss">
@import "./assets/scss/base.scss";
</style>
<style scoped lang="scss">
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
    .left,
    .right,
    .menu {
      display: flex;
      gap: 20px;
    }
    .menu {
      a {
        display: inline-block;
        text-decoration: none;
        color: $color-font-primary;
        position: relative;
        transition: all 0.3s ease-in-out;
        &::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background-color: $color-primary;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          transition: all 0.3s ease-in-out;
        }
        &:hover {
          color: $color-primary;
          transform: translateY(-1px);
          transition: all 0.3s ease-in-out;
          &::after {
            width: 100%;
          }
        }
      }
    }
    .middle{
      display: flex;
      align-items: center;
    .icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: $font-m;
      width: auto;
      svg {
        max-height: 100%;
        max-width: 100%;
        stroke: $color-font-primary;
      }
    }
    }
  }
}
</style>
