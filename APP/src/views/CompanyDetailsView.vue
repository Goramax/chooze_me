<template>
  <main>
    <SearchTop />
    <div class="content-container">
      <span class="sector">{{ company?.sector }}</span>
      <h1>{{ company?.name }}</h1>
      <div class="infos">
        <span class="location"><IconPlace />{{ company?.location }}</span>
        <span class="employees"><IconPeople />{{ company?.employees }} employés</span>
        <span class="offers"><IconGraph />13 offres d'emploi</span>
      </div>
      <div class="tags">
        <span class="tag">Entreprise certifiée</span>
        <span class="tag">Très demandée</span>
      </div>
      <div class="description">
        <p>
          {{ company?.description }}
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
// @ts-ignore
import { supabase } from "@/lib/supabaseClient"
import { type Company } from "@/types/Company.vue";
import { onMounted, ref } from "vue";

let company = ref<Company | null>(null);

async function getCompany() {
  const { data } = await supabase.from("companies").select();
  company.value = data[0];
}

onMounted(() => {
  getCompany();
});

</script>

<style scoped lang="scss">
h1 {
  margin: 8px 0;
  font-size: $font-xl;
  font-weight: 800;
  @media (max-width: $media-md) {
    font-size: $font-lp;
  }
}
.infos {
  display: flex;
  gap: 20px;
  margin: 20px 0;
  flex-wrap: wrap;
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
  flex-wrap: wrap;
}

.offers-container {
  margin-top: 60px;
  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    align-items: center;
    @media (max-width: $media-md) {
      flex-direction: column;
      align-items: flex-start;
    }
    h2 {
      margin: 0;
      font-size: $font-xl;
    }
  }
}
</style>
