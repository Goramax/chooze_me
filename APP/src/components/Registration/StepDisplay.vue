<template>
  <div class="step-display">
    <div class="step-text">
      Étape <span class="actual">{{ actualStep }}</span
      >/<span class="max">{{ maxStep }}</span>
    </div>
    <div class="progress-bar">
      <div
        class="progress"
        :style="{ width: (actualStep! / maxStep!) * 100 + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  actualStep: Number,
  maxStep: Number,
});
</script>

<style scoped lang="scss">
.step-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  width: 60%;
  .step-text {
    font-size: $font-s;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 10px;
    letter-spacing: 0.1em;
  }
  .progress-bar {
    width: 100%;
    height: 4px;
    background-color: $color-grey-light;
    position: relative;
    .progress {
      height: 100%;
      background-color: $color-primary;
      transition: width 0.4s cubic-bezier(.47,1.64,.41,.8);
    }
  }
}
</style>
