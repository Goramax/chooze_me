<template>
  <div class="card">
    <div class="card__header">
      <span class="btn--primary favorite-btn"><IconHeart /></span>
    </div>
    <div class="card__body">
      <div class="body__content">
        <span class="company">{{ company?.name }}</span>
        <h3 class="job-title">{{ jobAd.job_title }}</h3>
        <div class="tags">
          <!-- v-for -->
          <span class="tag">Contrat en apprentissage</span>
          <span class="tag">CDD</span>
        </div>
        <div class="card__footer">
          <div class="infos">
            <span class="salary"
              >salaire <br />
              <span class="amount">{{ jobAd.salary }} €</span></span
            >
            <span class="location">{{ jobAd.location }}</span>
          </div>
          <RouterLink to="/annonce/1" class="btn--primary"
            >Découvrir</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconHeart from "@/components/icons/IconHeart.vue";
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { type JobAd } from "@/types/JobAd.vue";
import { type Company } from "@/types/Company.vue";
import { onMounted, defineProps } from "vue";

const props = defineProps({
  jobAd: {
    type: Object as () => JobAd,
    required: true,
  },
  company: {
    type: Object as () => Company,
    required: false,
  },
});


</script>

<style scoped lang="scss">
.card {
  border: 2px solid $color-font-primary;
  border-radius: 24px;
  aspect-ratio: 1/1;
  max-width: 450px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .card__header {
    display: flex;
    justify-content: end;
  }
  .card__body {
    display: flex;
    flex-direction: column;
    justify-content: end;
    flex: 1;
    h3 {
      margin: 4px 0;
      font-size: $font-l;
      font-weight: 800;
    }
    .company {
      font-size: $font-m;
    }
    .tags {
      display: flex;
      gap: 10px;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 10px 0;
    }
  }
  .card__footer {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .infos {
      display: flex;
      flex-direction: column;
      .salary {
        .amount {
          font-weight: 800;
        }
      }
    }
    .btn--primary {
      padding: 18px 34px;
    }
  }
}
</style>
@/types/jobAd@/types/JobAd.vue