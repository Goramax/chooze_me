<template>
  <span class="title">Filtres</span>
  <form class="filters">
    <span>Temps de travail</span>
    <div>
      <input
        type="checkbox"
        id="full-time"
        name="full-time"
        value="full-time"
      />
      <label for="full-time">Temps plein</label>
    </div>
    <div>
      <input
        type="checkbox"
        id="part-time"
        name="part-time"
        value="part-time"
      />
      <label for="part-time">Temps partiel</label>
    </div>
    <span>Type de contrat</span>
    <div>
      <input type="checkbox" id="cdi" name="cdi" value="cdi" />
      <label for="cdi">CDI</label>
    </div>
    <div>
      <input type="checkbox" id="cdd" name="cdd" value="cdd" />
      <label for="cdd">CDD</label>
    </div>
    <div>
      <input type="checkbox" id="stage" name="stage" value="stage" />
      <label for="stage">Apprentissage</label>
    </div>
    <div>
      <input
        type="checkbox"
        id="alternance"
        name="alternance"
        value="alternance"
      />
      <label for="alternance">Contrat pro</label>
    </div>
    <span>Expérience</span>
    <div>
      <input type="checkbox" id="none" name="none" value="none" />
      <label for="none">Aucune</label>
    </div>
    <div>
      <input type="checkbox" id="<1" name="<1" value="<1" />
      <label for="<1">Moins d'un an</label>
    </div>
    <div>
      <input type="checkbox" id="1-3" name="1-3" value="1-3" />
      <label for="1-3">Entre 1 et 3 ans</label>
    </div>
    <div>
      <input type="checkbox" id=">3" name=">3" value=">3" />
      <label for=">3">Plus de 3 ans</label>
    </div>
    <span>Les plus</span>
    <div>
      <input
        type="checkbox"
        id="adaptability"
        name="adaptability"
        value="adaptability"
      />
      <label for="adaptability">Temps adapté</label>
    </div>
    <div>
      <input type="checkbox" id="remote" name="remote" value="remote" />
      <label for="remote">Télétravail</label>
    </div>
    <div>
      <input type="checkbox" id="disabled" name="disabled" value="disabled" />
      <label for="disabled">Handicap</label>
    </div>
    <div class="submit-btn-container">
      <button class="btn--primary filter-btn">
        <span>Filtrer</span><span><IconFunnel /></span>
      </button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.title {
  font-size: $font-l;
  font-weight: 800;
}
.filters {
  span {
    font-size: $font-m;
    font-weight: 800;
    margin-top: 14px;
    margin-bottom: 4px;
    display: inline-block;
  }
}
.submit-btn-container {
    margin-top: 20px;
  :deep(.filter-btn) {
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 10px;
    width: 100%;
    &:hover {
      svg path{
        stroke: $color-primary;
      }
    }
    span {
      font-weight: 600;
      font-size: $font-m;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
}
</style>

<script setup lang="ts">
import IconFunnel from "../icons/IconFunnel.vue";
</script>
