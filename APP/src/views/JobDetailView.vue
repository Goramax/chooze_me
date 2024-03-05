<template>
  <main>
    <SearchTop />
    <div class="content-container">
      <div class="main-grid">
        <div class="description">
          <span class="company">{{ company?.name }}</span>
          <h1>{{ jobAd?.job_title }}</h1>
          <div class="infos">
            <span class="location"><IconPlace />{{ jobAd?.location }}</span>
            <!-- <span class="published-date">Publiée il y a 3 jours</span> -->
          </div>
          <div class="tags">
            <span class="tag">Contrat en apprentissage</span>
            <span class="tag">CDD</span>
          </div>
          <div class="description-text">
            <!-- WYSIWYG -->
            <h2>Intitulé de la mission</h2>
            <p>
              {{ jobAd?.description }}
            </p>
            <!-- End WYSIWYG -->
          </div>
        </div>
        <div class="other-details">
          <div class="card-job-infos">
            <span class="company">{{ company?.name }}</span>
            <span class="job-title">{{ jobAd?.job_title }}</span>
            <span class="salary"><b>{{ jobAd?.salary }} €</b> / mois</span>
            <div class="tags">
              <span class="tag">Contrat en apprentissage</span>
              <span class="tag">CDD</span>
            </div>
            <button class="btn--primary inverted">
              Je postule !<IconSend />
            </button>
          </div>
          <div class="card-company-infos">
            <span class="sector">{{ company?.sector }}</span>
            <span class="company">{{ company?.name }}</span>
            <p class="short-desc">
              {{ company?.description }}
            </p>
            <div class="btn-container">
              <RouterLink :to="'/entreprise/'+ company?.id" class="btn--primary"
                >Découvrir l'entreprise</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import SearchTop from "@/components/search/SearchTop.vue";
import IconPlace from "@/components/icons/IconPlace.vue";
import IconSend from "@/components/icons/IconSend.vue";
import { RouterLink } from "vue-router";
import { ref, onMounted } from "vue";
import { type JobAd } from "@/types/JobAd.vue";
import { type Company } from "@/types/Company.vue";
// @ts-ignore
import { supabase } from "@/lib/supabaseClient"
import { useRoute } from "vue-router";

let jobAd = ref<JobAd | null>(null);
let company = ref<Company | null>(null);
let jobAdId = useRoute().params.id;

async function getJobAd() {
  const { data } = await supabase.from("job_ads").select().eq("id", jobAdId);
  jobAd.value = data[0];
}

async function getCompany() {
  const { data } = await supabase.from("companies").select().eq("id", jobAd.value?.company);
  company.value = data[0];
}

onMounted(() => {
  getJobAd().then(() => {
    getCompany();
  });
});

</script>

<style scoped lang="scss">
.main-grid {
  display: flex;
  flex-direction: row;
  gap: 40px;
  @media (max-width: 1240px) {
    flex-direction: column;
  }
  .description {
    flex: 2;
    .company,
    .infos span {
      font-size: $font-m;
    }
    .infos span {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    h1 {
      margin: 8px 0;
      font-size: $font-xl;
      @media (max-width: $media-md){
        font-size: $font-lp;
      }
    }
    .tags {
      display: flex;
      gap: 10px;
      flex-direction: row;
      margin-top: 28px;
    }
    .description-text {
      margin-top: 20px;
      h2 {
        margin: 0;
        font-size: $font-m;
        font-weight: 800;
      }
      p {
        margin-top: 0;
        font-size: $font-m;
      }
    }
  }
  .other-details {
    flex: 1;
    .card-job-infos {
      .company {
        font-size: $font-m;
        font-weight: 400;
        display: block;
      }
      .job-title {
        font-size: $font-l;
        font-weight: 800;
        display: block;
        margin: 8px 0;
      }
      .salary {
        font-size: $font-m;
        font-weight: 600;
        display: block;
        b {
          font-size: $font-xl;
          color: white;
        }
      }
      .tags {
        margin: 28px 0;
        display: flex;
        gap: 10px;
        .tag {
          border-color: white;
        }
      }
    }
    .card-company-infos {
      .company {
        font-size: $font-l;
        font-weight: 800;
        display: block;
      }
    }
    .btn--primary {
      width: 100%;
    }
  }

  .card-job-infos {
    background-color: $color-primary;
    color: white;
    padding: 20px;
    border-radius: 24px;
    margin-bottom: 20px;
  }
  .card-company-infos {
    background-color: white;
    color: $color-font-primary;
    padding: 20px;
    border: 2px solid $color-font-primary;
    border-radius: 24px;
  }
}
.btn-container {
  display: flex;
}
</style>@/types/JobAd.vue
