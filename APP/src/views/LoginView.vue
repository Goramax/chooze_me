<template>
  <main>
    <h1>Connexion</h1>
    <form class="form-container-base" @submit.prevent="login">
      <div class="form-group">
        <label for="login">Identifiant</label>
        <input type="text" id="login" placeholder="Identifiant" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" placeholder="Mot de passe" v-model="password" />
      </div>
      <div class="form-group">
        <input type="checkbox" id="remember" />
        <label for="remember">Rester connecté</label>
      </div>
      <button type="submit">Se connecter</button>
    </form>
    <div class="no-account-txt">
      Pas de compte ? <router-link to="/inscription">Je m'inscris !</router-link>
    </div>
  </main>
</template>

<script setup lang="ts">
import { defineOptions, toRefs, onMounted, defineProps, ref } from "vue";
// @ts-ignore
import { supabase } from "@/lib/supabaseClient";
import router from "@/router";

let email = ref("");
let password = ref("");

defineOptions({
  inheritAttrs: false,
});


onMounted(() => {
  let user = supabase.auth.getUser();
  user.then((data: any) => {
    console.log(data);
    if (data) {
      router.push("/");
    }
  });
});

async function getUser(){
  const user = supabase.auth.user()
  return user
}

async function login() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email:  email.value,
    password: password.value,
  });
  if (error) {
    console.log(error);
  } else {
   localStorage.setItem('session', JSON.stringify(data))
    router.push("/");
  }
}

</script>

<style scoped lang="scss">
h1 {
  font-weight: 900;
  text-align: center;
  font-size: $font-xxl;
  @media (max-width: $media-md) {
    font-size: $font-lp;
  }
}
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.no-account-txt {
  text-align: center;
  margin-top: 60px;
}
</style>
