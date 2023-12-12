<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="item in items" :key="item.id" class="swiper-slide">
        <img :src="item.image" alt="Slide" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Swiper from "swiper";
import "swiper/css";

export default {
  name: "SwiperComponent",
  props: {
    items: {
      type: [Array, Object],
      required: true,
    },
  },
  setup(props) {
    const swiperInstance = ref<Swiper | null>(null);

    onMounted(() => {
      swiperInstance.value = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    });

    onUnmounted(() => {
      if (swiperInstance.value) {
        swiperInstance.value.destroy();
      }
    });

    return {};
  },
};
</script>

<style scoped lang="scss">
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
    height: 512px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
