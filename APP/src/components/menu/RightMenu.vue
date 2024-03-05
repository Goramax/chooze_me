<template>
  <span
    class="right-menu"
    v-if="props.session === null || props.session === undefined"
  >
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
  </span>

  <span class="right-menu" v-else-if="getScreenWidth() === 'desktop'">
    <div class="user-menu">
      <span class="user-menu__avatar">
        <img v-if="!!props.user" :src="props.user?.avatar_url" alt="Avatar" />
        <IconPerson v-else />
      </span>
      <span class="hover-menu">
        <RouterLink class="hover-menu__link" to="/mon-compte"
          >Mon profil</RouterLink
        >
        <button class="hover-menu__link" @click="logout">Déconnexion</button>
      </span>
    </div>
    <div class="menu-circle">
      <IconBell />
    </div>
    <div class="menu-circle">
      <IconGear />
    </div>
  </span>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
// @ts-ignore
import { supabase } from "@/lib/supabaseClient";
import IconPerson from "@/components/icons/IconPerson.vue";
import IconGear from "../icons/IconGear.vue";
import IconBell from "../icons/IconBell.vue";

const props = defineProps({
  session: Object as any,
  user: Object as any,
  getScreenWidth: Function as any,
});

defineOptions({
  inheritAttrs: true,
});

function logout() {
  localStorage.removeItem("session");
  supabase.auth.signOut().then(() => {
    window.location.reload();
  });
}
</script>

<style scoped lang="scss">
.user-menu {
  position: relative;
  .user-menu__avatar {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    svg {
      width: 30px;
      height: 30px;
    }
  }
  .hover-menu {
    display: none;
    position: absolute;
    top: 100%;
    right: 50%;
    transform: translateX(50%);
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 10px;
    z-index: 10;
    .hover-menu__link {
      width: 100%;
      padding: 10px;
      text-align: left;
      border: none;
      background-color: transparent;
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
      }
    }
    a.hover-menu__link {
      display: block;
      text-decoration: none;
      color: $color-font-primary;
      position: relative;
      max-width: -webkit-fill-available;
    }
  }
  &:hover {
    .hover-menu {
      display: block;
    }
  }
}
.menu-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid $color-grey-light;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
  }
}
</style>
