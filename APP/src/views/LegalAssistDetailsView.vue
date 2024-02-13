<template>
  <main>
    <div class="legal-assist-details content-container">
      <span class="category">{{ faq?.sector }}</span>
      <h1>
        {{ faq?.title }}
      </h1>
      <!-- WYSIWYG -->
      <div class="description-text">
        <p>
          {{ faq?.description }}
        </p>
        <!-- End WYSIWYG -->
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.legal-assist-details {
  margin-top: 60px;
}
h1 {
  font-weight: 800;
  font-size: $font-xl;
  margin: 0;
  @media (max-width: $media-md) {
    font-size: $font-lp;
  }
}
.description-text {
  white-space: pre-line;
}
</style>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { type Faq } from "@/types/Faq.vue";
// @ts-ignore
import { supabase } from "@/lib/supabaseClient";

let faq = ref<Faq | null>(null);
let faqId = useRoute().params.id as string;

async function getFaq() {
  const { data } = await supabase.from("faq").select().eq("id", faqId);
  faq.value = data[0];
}

onMounted(() => {
  getFaq();
});
</script>
