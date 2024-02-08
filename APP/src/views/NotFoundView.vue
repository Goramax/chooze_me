<template>
  <main>
    <div class="not-found content-container">
      <h1>404</h1>
      <p>Page non trouvée</p>
    </div>
  </main>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 900;
  text-align: center;
  font-size: $font-xxl;
  margin-bottom: 40px;
  margin-top: 80px;
}
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>