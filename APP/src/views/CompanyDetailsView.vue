<template>
  <main>
    <SearchTop />
    <div class="content-container">
      <span class="sector">Éducation</span>
      <h1>MyDigitalSchool</h1>
      <div class="infos">
        <span class="location"><IconPlace />Caen</span>
        <span class="employees"><IconPeople />150 employés</span>
        <span class="offers"><IconGraph />13 offres d'emploi</span>
      </div>
      <div class="tags">
        <span class="tag">Entreprise certifiée</span>
        <span class="tag">Très demandée</span>
      </div>
      <div class="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="offers-container">
        <div class="top">
          <h2>Les offres</h2>
          <span class="order-by">
            <span class="result-count">13 résultats</span>
            <!-- <span class="order-by__btn">Trier par</span> -->
          </span>
        </div>
        <div class="offers"></div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import SearchTop from "@/components/search/SearchTop.vue";
import IconPlace from "@/components/icons/IconPlace.vue";
import IconPeople from "@/components/icons/IconPeople.vue";
import IconGraph from "@/components/icons/IconGraph.vue";
</script>

<style scoped lang="scss">
h1 {
  margin: 8px 0;
  font-size: $font-xl;
  font-weight: 800;
}
.infos {
  display: flex;
  gap: 20px;
  margin: 20px 0;
  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
.tags {
  display: flex;
  gap: 10px;
  flex-direction: row;
  margin-top: 28px;
}

.offers-container{
  margin-top: 60px;
  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    align-items: center;
    h2 {
      margin: 0;
      font-size: $font-xl;
    }
  }
}
</style>
