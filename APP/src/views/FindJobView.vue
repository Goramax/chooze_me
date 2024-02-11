<template>
  <main>
    <SearchTop />
    <div class="main-container">
      <div class="main-content">
        <div class="filters-container"><Filters /></div>
        <div class="jobs-ads-container">
          <div class="top">
            <h2>Votre recherche</h2>
            <span class="order-by">
              <span class="result-count">{{ resCount }} résultats</span>
              <!-- <span class="order-by__btn">Trier par</span> -->
            </span>
          </div>
          <div class="jobs-ads">
            <JobCard v-for="jobAd in jobAds" :key="jobAd.id" :jobAd="jobAd" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import SearchTop from "@/components/search/SearchTop.vue";
import Filters from "@/components/search/Filters.vue";
import JobCard from "@/components/cards/JobCard.vue";
import { onMounted, ref } from "vue";

defineOptions({
  inheritAttrs: false,
});

let resCount = ref(0);
let jobAds = ref([]) as any;

// Mock data
onMounted(() => {
  jobAds = [
    {
      id: 1,
      title: "Développeur Frontend",
      company: "Google",
      location: "Paris",
      contract: "CDI",
      salary: "60k - 80k",
      tags: ["React", "TypeScript", "Redux"],
    },
    {
      id: 2,
      title: "Développeur Backend",
      company: "Facebook",
      location: "Paris",
      contract: "CDI",
      salary: "60k - 80k",
      tags: ["Node.js", "TypeScript", "GraphQL"],
    },
    {
      id: 3,
      title: "Développeur Fullstack",
      company: "Amazon",
      location: "Paris",
      contract: "CDI",
      salary: "60k - 80k",
      tags: ["React", "Node.js", "TypeScript"],
    },
  ];
  resCount.value = jobAds.length;
});
</script>

<style scoped lang="scss">
main {
  position: relative;
  display: flex;
  flex-direction: column;
  .main-container {
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex: 1;
  }
  .main-content {
    display: flex;
    height: 100%;
    min-height: 100%;
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.filters-container {
  width: 230px;
  height: max-content;
  min-height: 100%;
  background-color: white;
  border-right: 1px solid rgba($color-grey-light, 0.4);
  padding: 20px;
  @media (max-width: $media-md) {
    display: none;
  }
}
.jobs-ads-container {
  padding: 20px 40px;
  width: 100%;
  @media (max-width: $media-md) {
    padding: 40px 20px;
  }
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
      @media (max-width: $media-md) {
        margin-bottom: 20px;
        font-size: $font-lp;
        text-align: center;
        width: 100%;
      }
    }
  }
  .jobs-ads {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;
    @media (max-width: 1360px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 920px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
