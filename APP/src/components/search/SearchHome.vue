import IconPerson from '../icons/IconPerson.vue';
<template>
  <div class="main-search-container">
    <form class="search-container">
      <div class="__left">
        <span class="select-search">
          <span class="circle-icon">
            <IconPerson />
          </span>
          <select name="job" id="job-search" v-model="params.job">
            <option value="" disabled selected v-if="!jobs.length">
              Chargement...
            </option>
            <option v-for="j in jobs" :key="j.id" :value="j.id">
              {{ j.name }}
            </option>
          </select>
        </span>
        <span class="select-search">
          <span class="circle-icon">
            <IconPlace />
          </span>
          <select name="location" id="location-search">
            <option value="caen">Caen</option>
            <option value="caen">Rouen</option>
            <option value="caen">Le Havre</option>
            <option value="caen">Flers</option>
          </select>
        </span>
        <span class="select-search">
          <span class="circle-icon">
            <IconBook />
          </span>
          <select name="diploma" id="diploma-search" v-model="params.diploma">
            <option value="" disabled selected v-if="!diplomas.length">
              Chargement...
            </option>
            <option v-for="d in diplomas" :key="d.id" :value="d.id">
              {{ d.name }}
            </option>
          </select>
        </span>
      </div>
      <div class="__right">
        <span class="btn--primary search-btn" @click="search"
          >Chercher<IconSearch
        /></span>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import IconPerson from "../icons/IconPerson.vue";
import IconPlace from "../icons/IconPlace.vue";
import IconBook from "../icons/IconBook.vue";
import IconSearch from "../icons/IconSearch.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

let jobs = ref([]) as any;
let diplomas = ref([]) as any;

let params = {
  job: 0,
  location: "caen",
  diploma: 0,
};

const router = useRouter();

function search() {
  router.push({
    name: "find-job",
    query: {
      job: params.job,
      location: params.location,
      diploma: params.diploma,
    },
  });
}

onMounted(() => {
  let responseJobs = [
    {
      id: 1,
      name: "Manager de projet",
    },
    {
      id: 2,
      name: "Développeur Frontend",
    },
    {
      id: 3,
      name: "Développeur Backend",
    },
    {
      id: 4,
      name: "Développeur Fullstack",
    },
    {
      id: 5,
      name: "Community Manager",
    },
    {
      id: 6,
      name: "Designer UI/UX",
    },
  ];
  let responseDiplomas = [
  {
      id: 2,
      name: "Baccalauréat",
    },
    {
      id: 1,
      name: "Brevet des collèges",
    },
    {
      id: 3,
      name: "Bac +2",
    },
    {
      id: 4,
      name: "Bac +3",
    },
    {
      id: 5,
      name: "Bac +4",
    },
    {
      id: 6,
      name: "Bac +5",
    },
  ];
  jobs.value = responseJobs;
  diplomas.value = responseDiplomas;

  params.job = responseJobs[0].id;
  params.diploma = responseDiplomas[0].id;
});
</script>

<style scoped lang="scss">
.main-search-container {
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: $media-md) {
    margin: 0 20px;
    width: auto;
  }
  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 10px;
    border: $border-secondary;
    border-radius: $border-radius-primary;
    background-color: white;
    width: 70%;
    gap: 60px;

    @media (max-width: $media-md) {
      width: 100%;
      border: none !important;
    }

    .__left,
    .__right {
      display: flex;
      gap: 20px;
      > span {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
      }
      @media (max-width: $media-md) {
        width: 100%;
      }
    }
    .__left {
      justify-content: space-between;
      flex: 8;
    }
    .__right {
      flex: 2;
      justify-content: flex-end;
    }
  }
  :deep(.search-btn) {
    &:hover {
      svg {
        path {
          stroke: $color-primary;
        }
      }
    }
  }
  @media (max-width: $media-md) {
    .search-container {
      flex-direction: column;
      gap: 20px;
      .__left {
        flex-direction: column;
        gap: 20px;
      }
      .__left,
      .__right {
        flex: 1;
      }
    }
  }
}
</style>
