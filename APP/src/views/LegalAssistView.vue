<template>
  <main>
    <div class="content-container">
      <h1>Assistance juridique</h1>
      <form class="search-form">
        <div class="form-group">
          <input
            type="text"
            placeholder="Rechercher une question, un article de loi, un thème..."
          />
        </div>
        <button type="submit">
          <span class="btn-txt">Rechercher</span><IconSearch />
        </button>
      </form>
      <div class="legal-assist-results-container">
        <h2>Les questions les plus posées</h2>
        <div class="card-grid">
          <FaqCard
            v-for="faqItem in faqItems"
            :key="faqItem.id"
            :faqItem="faqItem"
          />
          <div class="result-nb">Nombre de résultats : {{ resCount }}</div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.result-nb {
  display: none;
}
h1 {
  font-weight: 900;
  text-align: center;
  font-size: $font-xxl;
  margin-bottom: 40px;
  margin-top: 80px;
  @media (max-width: 768px) {
    font-size: $font-lp;
    margin-bottom: 20px;
    margin-top: 40px;
  }
}
.search-form {
  display: flex;
  flex-direction: row;
  gap: 20px;
  .form-group {
    flex: 1;
    min-width: 80%;
    margin: 0;
  }
  button[type="submit"] {
    width: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    svg {
      max-height: 20px;
    }
    @media (max-width: 768px) {
      .btn-txt {
        display: none;
      }
    }
  }
}
.legal-assist-results-container {
  margin-top: 60px;
  h2 {
    font-size: $font-lp;
    font-weight: 800;
    @media (max-width: 768px) {
      font-size: $font-l;
    }
  }
  .card-grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin-top: 20px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>

<script setup lang="ts">
import { ref, onMounted, useAttrs } from "vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import FaqCard from "@/components/cards/FaqCard.vue";

defineOptions({
  inheritAttrs: false,
});

let resCount = ref(0);
let faqItems = ref([]) as any;

onMounted(() => {
  faqItems = [
    {
      id: 1,
      title:
        "Quels documents dois-je envoyer à mon entreprise lors de l'embauche ?",
      category: "Administratif",
    },
    {
      id: 2,
      title:
        "Quelle rémunération puis-je prétendre pour ma première année d'alternance ?",
      category: "Salaires ",
    },
    {
      id: 3,
      title:
        "Mon employeur doit-il prendre en charge mes trajets domicile-travail ?",
      category: "Transport",
    },
    {
      id: 4,
      title: "Un alternant peut-il faire des heures supplémentaires ?",
      category: "Horaires de travail",
    },
  ];
  resCount.value = faqItems.length;
});
</script>
