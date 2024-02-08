<template>
  <div class="faq-card">
    <div class="faq-card__header">
      <span class="btn--primary favorite-btn"><IconHeart /></span>
    </div>
    <span class="category">{{ faqItem?.category }}</span>
    <h3>{{ faqItem?.title }}</h3>
    <RouterLink :to="'aide-juridique/' + faqItem?.id" class="btn--primary"
      >En savoir plus</RouterLink
    >
  </div>
</template>

<script setup lang="ts">
import IconHeart from "@/components/icons/IconHeart.vue";
import { defineProps } from "vue";
const props = defineProps({
  faqItem: Object as () => {
    id: Number;
    title: String;
    category: String;
  },
});
</script>

<style scoped lang="scss">
.faq-card {
  border: 2px solid $color-font-primary;
  border-radius: 24px;
  width: -webkit-fill-available;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .faq-card__header {
    display: flex;
    justify-content: end;
  }
}
</style>
