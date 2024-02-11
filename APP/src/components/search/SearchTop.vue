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
  padding: 20px 40px;
  border-bottom: 1px solid $color-grey-light;
  @media (max-width: $media-md) {
    display: none;
  }
  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 100%;
    gap: 60px;
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
    }
    .__left {
      justify-content: space-between;
      flex: 8;
    }
    .__right {
      flex: 2;
      justify-content: flex-end;
      > span {
        max-width: min-content;
      }
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
}
</style>
