<script setup lang="ts">
import { RouterLink, RouterView, onBeforeRouteUpdate } from "vue-router";
import { ref } from "vue";
import IconMap from "./components/icons/IconMap.vue";
import IconLogo from "./components/icons/IconLogo.vue";
import { onMounted } from "vue";
// @ts-ignore
import { supabase } from "./lib/supabaseClient";
import { Transition } from "vue";

function getScreenWidth() {
  if (window.innerWidth > 768) {
    return "desktop";
  } else {
    return "mobile";
  }
}

let showMobileMenu = ref(false);

let session = ref(null)
const user = ref(null)

onMounted(() => {
  supabase.auth.getSession().then(({ data }: { data: any }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_: any, _session: any) => {
    session.value = _session
  })
})



</script>

<template>
  <header>
    <div class="header-container">
      <div class="left">
        <RouterLink to="/" class="logo">
          <IconLogo class="logo__icon" />
        </RouterLink>
        <div class="menu" v-if="getScreenWidth() === 'desktop'">
          <RouterLink to="/trouver-un-job">Trouver mon job</RouterLink>
          <RouterLink to="/messages">Messages</RouterLink>
          <RouterLink to="/aide-juridique">Assistance Juridique</RouterLink>
        </div>
      </div>
      <div class="middle" v-if="getScreenWidth() === 'desktop'">
        <span class="icon"><IconMap /></span><span>Caen</span>
      </div>
      <div class="right">
        <RouterLink
          to="/inscription"
          class="btn--secondary"
          v-if="getScreenWidth() === 'desktop'"
          >Inscription</RouterLink
        >
        <RouterLink
          to="/connexion"
          class="btn--primary"
          v-if="getScreenWidth() === 'desktop'"
          >Connexion</RouterLink
        >
        <div
          class="burger"
          v-if="getScreenWidth() === 'mobile'"
          @click="showMobileMenu = !showMobileMenu"
        >
          <span class="burger__line"></span>
          <span class="burger__line"></span>
          <span class="burger__line"></span>
        </div>
      </div>
    </div>
    <Transition name="swipe">
      <div
        class="mobile-menu"
        v-if="getScreenWidth() === 'mobile'"
        v-show="showMobileMenu"
      >
        <span class="close" @click="showMobileMenu = false"> X </span>
        <div class="mobile-top-menu">
          <RouterLink to="/" @click="showMobileMenu = false">Accueil</RouterLink>
          <RouterLink to="/trouver-un-job" @click="showMobileMenu = false">Trouver mon job</RouterLink>
          <RouterLink to="/messages" @click="showMobileMenu = false">Messages</RouterLink>
          <RouterLink to="/aide-juridique" @click="showMobileMenu = false">Assistance Juridique</RouterLink>
        </div>
        <div class="mobile-bottom-menu">
          <RouterLink to="/inscription" class="btn--primary" @click="showMobileMenu = false"
            >Inscription</RouterLink
          >
          <RouterLink to="/connexion" class="btn--primary inverted" @click="showMobileMenu = false"
            >Connexion</RouterLink
          >
        </div>
      </div>
    </Transition>
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
  z-index: 10;
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
    .logo{
      :deep(svg){
        width: 120px;
        .cls-1 {
          fill: $color-primary;
        }
        .cls-2 {
          fill: none;
        }
      }
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
      @media (max-width: $media-md) {
        display: none;
      }
    }
    .right {
      a {
        @media (max-width: $media-md) {
          display: none;
        }
      }
      .burger {
        display: none;
        @media (max-width: $media-md) {
          display: inline-block;
          position: relative;
          width: 30px;
          height: 30px;
          cursor: pointer;
          .burger__line {
            display: block;
            width: 100%;
            height: 2px;
            background-color: $color-font-primary;
            margin: 5px 0;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }
    .middle {
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
      @media (max-width: $media-md) {
        display: none;
      }
    }
  }
}
.mobile-menu {
  @media (min-width: $media-md) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  overflow-x: hidden;
  background-color: $color-primary;
  color: white;
  z-index: 10;
  gap: 40px;

  .close {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: $font-lp;
    font-weight: 800;
    position: absolute;
    top: 20px;
    right: 40px;
  }

  .mobile-top-menu {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px;
    a {
      color: white;
      text-decoration: none;
      font-size: $font-lp;
      transition: all 0.3s ease-in-out;
      text-align: center;
      font-weight: 800;
    }
  }
  .mobile-bottom-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    .btn--primary:not(.inverted) {
      border: 1px solid white;
    }
  }
  & > div {
    padding: 20px;
  }
}
.swipe-enter-active,
.swipe-leave-active {
  transition: all 0.3s ease-in-out;
}
.swipe-enter-from,
.swipe-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.swipe-enter-to,
.swipe-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
