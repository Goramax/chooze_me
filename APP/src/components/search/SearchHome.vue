import IconPerson from '../icons/IconPerson.vue';
<template>
  <div class="main-search-container">
    <form class="search-container">
      <div class="__left">
        <span class="select-search">
          <span class="circle-icon">
            <IconPerson />
          </span>
          <select name="job" id="job-search">
            <option value="uxui">Designer UI/UX</option>
          </select>
        </span>
        <span class="select-search">
          <span class="circle-icon">
            <IconPlace />
          </span>
          <select name="location" id="location-search">
            <option value="caen">Caen</option>
          </select>
        </span>
        <span class="select-search">
          <span class="circle-icon">
            <IconBook />
          </span>
          <select name="diploma" id="diploma-search">
            <option value="bac">Bac+5</option>
          </select>
        </span>
      </div>
      <div class="__right">
        <span class="btn--primary search-btn">Chercher<IconSearch /></span>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import IconPerson from "../icons/IconPerson.vue";
import IconPlace from "../icons/IconPlace.vue";
import IconBook from "../icons/IconBook.vue";
import IconSearch from "../icons/IconSearch.vue";
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
