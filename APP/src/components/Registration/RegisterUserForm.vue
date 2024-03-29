<template>
  <StepDisplay :maxStep="maxStep" :actualStep="step" />
  <section v-show="step === 1" class="form-section">
    <h2>Identité</h2>
    <form class="form-container-base" @submit.prevent="createAccount">
      <div class="form-group">
        <label for="lastname">Nom*</label>
        <input type="text" id="lastname" placeholder="Nom" v-model="lastname" />
      </div>
      <div class="form-group">
        <label for="firstname">Prénom*</label>
        <input
          type="text"
          id="firstname"
          placeholder="Prénom"
          v-model="firstname"
        />
      </div>
      <div class="form-group">
        <label>Date de naissance*</label>
        <input
          type="date"
          :min="getMinDate()"
          :max="getDate()"
          v-model="birthdate"
        />
      </div>
    </form>
  </section>
  <section v-show="step === 2" class="form-section">
    <h2>Identification</h2>
    <form class="form-container-base">
      <div class="form-group">
        <label for="email">Adresse mail*</label>
        <input
          type="email"
          id="email"
          placeholder="Adresse mail"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe*</label>
        <input
          type="password"
          id="password"
          placeholder="Mot de passe"
          v-model="password"
        />
      </div>
      <div class="form-group">
        <label for="password-confirm">Confirmer le mot de passe*</label>
        <input
          type="password"
          id="password-confirm"
          placeholder="Confirmer le mot de passe"
          v-model="passwordConfirm"
        />
      </div>
    </form>
  </section>
  <section v-show="step === 3" class="form-section">
    <h2>Adresse</h2>
    <form class="form-container-base">
      <div class="form-group">
        <label for="job">Métier envisagé</label>
        <select name="job" id="job">
          <option value="" disabled selected v-if="!job.length">
            Chargement...
          </option>
          <option v-for="j in job" :key="j.id" :value="j.id">
            {{ j.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="cv">CV (.pdf)</label>
        <input type="file" id="cv" accept=".pdf" />
      </div>
    </form>
  </section>
  <div class="btn-container form-container-base">
    <span class="prev btn--secondary" v-show="step > 1" @click="step--"
      >Précédent</span
    >
    <span class="next btn--primary" v-show="step < maxStep" @click="step++"
      >Suivant</span
    >
    <button
      class="btn--primary"
      v-show="step === maxStep"
      @click="createAccount"
    >
      Créer mon compte
    </button>
  </div>
</template>

<script setup lang="ts">
import StepDisplay from "@/components/Registration/StepDisplay.vue";
import { onMounted, ref } from "vue";
// @ts-ignore
import { supabase } from "@/lib/supabaseClient";
import router from "@/router";
let step = ref(1);
let maxStep = ref(step.value);
let job = ref([]) as any;

let email = ref("");
let password = ref("");
let passwordConfirm = ref("");
let lastname = ref("");
let firstname = ref("");
let birthdate = ref("");
let selectedJob = ref("");
let cv = ref("");

function getDate() {
  const date = new Date();
  const year = date.getFullYear() - 16;
  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;
  let day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;
  return year + "-" + month + "-" + day;
}
function getMinDate() {
  const date = new Date();
  const year = date.getFullYear() - 25;
  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;
  let day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;
  return year + "-" + month + "-" + day;
}

async function createAccount() {
  const { data, error } = await supabase.auth
    .signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          is_company: false,
          lastname: lastname.value,
          firstname: firstname.value,
          birthdate: birthdate.value,
          job: selectedJob.value,
          cv: cv.value,
        },
      },
    })
    .then(() => {
      alert("un email de confirmation a été envoyé à " + email.value);
      router.push("/connexion");
    });
}

onMounted(() => {
  let maxStepTmp = 0;
  document.querySelectorAll(".form-section").forEach((section) => {
    maxStepTmp++;
  });
  maxStep.value = maxStepTmp;

  job.value = [
    {
      id: 1,
      name: "Livreur",
    },
    {
      id: 2,
      name: "Caissier",
    },
    {
      id: 3,
      name: "Hôte d'accueil",
    },
    {
      id: 4,
      name: "Saisonier agricole",
    },
    {
      id: 5,
      name: "Serveur",
    },
  ];
});
</script>

<style scoped lang="scss">
.form-section {
  h2 {
    font-weight: 900;
    text-align: center;
    font-size: $font-xxl;
  }
}
.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
  .next,
  .prev, button {
    flex: 1;
  }
}
</style>
