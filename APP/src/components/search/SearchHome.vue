<template>
  <div class="main-search-container">
    <div class="search-container">
      <div class="__left">Selects</div>
      <div class="__right">Search Btn</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-search-container {
  display: flex;
  justify-content: center;
  width: 100%;
  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 60px;
    border: $border-secondary;
    border-radius: $border-radius-primary;
    background-color: white;
    width: 70%;
    .__left,
    .__right {
      display: flex;
      gap: 20px;
    }
  }
}
</style>
