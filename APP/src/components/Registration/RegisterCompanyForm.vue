<template>
  <StepDisplay :maxStep="maxStep" :actualStep="step" />
  <section v-show="step === 1" class="form-section">
    <h2>L'entreprise</h2>
    <form class="form-container-base">
      <div class="form-group">
        <label for="company_name">Dénomination*</label>
        <input
          type="text"
          id="company_name"
          placeholder="Dénomination"
          v-model="company_name"
        />
      </div>
      <div class="form-group">
        <label for="activity">Secteur d'activité*</label>
        <select name="activity" id="activity" v-model="activity_sector">
          <!-- CHARGER LES DONNEES VIA API -->
          <option value="" disabled selected v-if="!activitySectors.length">
            Chargement...
          </option>
          <option
            v-for="sector in activitySectors"
            :key="sector"
            :value="sector"
          >
            {{ sector }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="siret">Numéro de siret*</label>
        <input
          type="text"
          id="siret"
          placeholder="Numéro de siret"
          pattern="[0-9]{9}"
          v-model="siret"
        />
      </div>
    </form>
  </section>
  <section v-show="step === 2" class="form-section">
    <h2>Localisation</h2>
    <form class="form-container-base">
      <div class="form-group">
        <label for="address">Adresse du siège social*</label>
        <input
          type="text"
          id="address"
          placeholder="Adresse du siège social"
          v-model="address"
        />
      </div>
      <div class="form-group">
        <label for="city">Ville*</label>
        <input type="text" id="city" placeholder="Ville" v-model="city" />
      </div>
      <div class="form-group">
        <label for="postal_code">Code postal*</label>
        <input
          type="text"
          id="postal_code"
          placeholder="Code postal"
          pattern="[0-9]{5}"
          v-model="postal_code"
        />
      </div>
    </form>
  </section>
  <section v-show="step === 3" class="form-section">
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
        />
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
let activitySectors = ref([]) as any;

let email = ref("");
let password = ref("");
let passwordConfirm = ref("");
let company_name = ref("");
let activity_sector = ref("");
let siret = ref("");
let address = ref("");
let city = ref("");
let postal_code = ref("");

async function createAccount() {
  const { data, error } = await supabase.auth
    .signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          is_company: true,
          company_name: company_name.value,
          company_sector: activity_sector.value,
          company_siret: siret.value,
          address: address.value,
          city: city.value,
          postal_code: postal_code.value,
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

  // Fetch activity sectors
  activitySectors.value = [
    "Informatique",
    "Artisanat",
    "Assurance",
    "Banque",
    "Bâtiment",
    "Biotechnologie",
    "Chimie",
    "Commerce",
    "Communication",
    "Comptabilité",
    "Culture",
    "Défense",
    "Droit",
    "E-commerce",
    "Economie",
    "Education",
    "Energie",
    "Environnement",
    "Finance",
    "Formation",
    "Gestion",
    "Hôtellerie",
    "Immobilier",
    "Industrie",
    "Informatique",
    "Ingénierie",
    "Internet",
    "Journalisme",
    "Logistique",
    "Marketing",
    "Média",
    "Mode",
    "Musique",
    "Pharmacie",
    "Publicité",
    "Restauration",
    "Ressources humaines",
    "Santé",
    "Sécurité",
    "Service",
    "Sport",
    "Télécommunication",
    "Tourisme",
    "Transport",
    "Agriculture",
    "Agroalimentaire",
    "Architecture",
    "Urbanisme",
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
  .prev,
  button {
    flex: 1;
  }
}
</style>
