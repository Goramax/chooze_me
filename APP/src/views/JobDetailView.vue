<template>
  <main>
    <SearchTop />
    <div class="content-container">
      <div class="main-grid">
        <div class="description">
          <span class="company">MyDigitalSchool</span>
          <h1>Développeur Web</h1>
          <div class="infos">
            <span class="location">Caen</span>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <!-- End WYSIWYG -->
          </div>
        </div>
        <div class="other-details">
          <div class="card-job-infos">Card1</div>
          <div class="card-company-infos">Card2</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import SearchTop from "@/components/search/SearchTop.vue";
</script>

<style scoped lang="scss">
.main-grid {
  display: flex;
  flex-direction: row;
  gap: 40px;
  .description{
    flex: 2;
  }
  .other-details{
    flex: 1;
  }

  .card-job-infos{
    background-color: $color-primary;
    color: white;
    padding: 20px;
    border-radius: 24px;
    margin-bottom: 20px;
  }
    .card-company-infos{
        background-color: white;
        color: $color-font-primary;
        padding: 20px;
        border: 2px solid $color-font-primary;
        border-radius: 24px;
    }
}
</style>
