<template>
  <StepDisplay :maxStep="maxStep" :actualStep="step" />
  <section v-show="step === 1" class="form-section">
    <h2>L'entreprise</h2>
    <form class="form-container-base">
      <div class="form-group">
        <label for="company_name">Dénomination*</label>
        <input type="text" id="company_name" placeholder="Dénomination" />
      </div>
      <div class="form-group">
        <label for="activity">Secteur d'activité*</label>
        <select name="activity" id="activity">
          <!-- CHARGER LES DONNEES VIA API -->
          <option value="" disabled selected>Chargement..</option>
        </select>
      </div>
      <div class="form-group">
        <label for="siret">Numéro de siret*</label>
        <input
          type="text"
          id="siret"
          placeholder="Numéro de siret"
          pattern="[0-9]{9}"
        />
      </div>
    </form>
  </section>
  <section v-show="step === 2" class="form-section">
    <h2>Localisation</h2>
    <form class="form-container-base">
      <div class="form-group">
        <label for="address">Adresse du siège social*</label>
        <input type="text" id="address" placeholder="Adresse du siège social" />
      </div>
      <div class="form-group">
        <label for="city">Ville*</label>
        <input type="text" id="city" placeholder="Ville" />
      </div>
      <div class="form-group">
        <label for="postal_code">Code postal*</label>
        <input
          type="text"
          id="postal_code"
          placeholder="Code postal"
          pattern="[0-9]{5}"
        />
      </div>
    </form>
  </section>
  <section v-show="step === 3" class="form-section">
    <h2>Identification</h2>
    <form class="form-container-base">
      <div class="form-group">
        <label for="email">Adresse mail*</label>
        <input type="email" id="email" placeholder="Adresse mail" />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe*</label>
        <input type="password" id="password" placeholder="Mot de passe" />
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
  </div>
</template>

<script setup lang="ts">
import StepDisplay from "@/components/Registration/StepDisplay.vue";
import { onMounted, ref } from "vue";
let step = ref(1);
let maxStep = ref(step.value);
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
onMounted(() => {
  let maxStepTmp = 0;
  document.querySelectorAll(".form-section").forEach((section) => {
    maxStepTmp++;
  });
  maxStep.value = maxStepTmp;
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
  .prev {
    flex: 1;
  }
}
</style>
