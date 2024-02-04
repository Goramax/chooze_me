<template>
  <StepDisplay :maxStep="maxStep" :actualStep="step" />
    <section v-show="step === 1" class="form-section">
      <h2>Identité</h2>
      <form class="form-container-base">
        <div class="form-group">
          <label for="lastname">Nom*</label>
          <input type="text" id="lastname" placeholder="Nom" />
        </div>
        <div class="form-group">
          <label for="firstname">Prénom*</label>
          <input type="text" id="firstname" placeholder="Prénom" />
        </div>
        <div class="form-group">
          <label>Date de naissance*</label>
          <input type="date" :min="getMinDate()" :max="getDate()" />
        </div>
      </form>
    </section>
    <section v-show="step === 2" class="form-section">
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
    <section v-show="step === 3" class="form-section">
      <h2>Adresse</h2>
      <form class="form-container-base">
        <div class="form-group">
          <label for="job">Métier envisagé</label>
          <select name="job" id="job">
            <option value="" disabled selected>Chargement..</option>
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
