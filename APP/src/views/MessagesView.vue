<template>
  <main>
    <div class="main-container">
      <div class="main-content">
        <div class="contact-container">
            <h1>Mes messages</h1>
        </div>
        <div class="messages-container">messages</div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  position: relative;
  display: flex;
  flex-direction: column;
  .main-container {
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex: 1;
  }
  .main-content {
    display: flex;
    height: 100%;
    min-height: 100%;
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.contact-container {
  width: 40vw;
  height: max-content;
  min-height: 100%;
  background-color: white;
  border-right: 1px solid rgba($color-grey-light, 0.4);
  padding: 20px;
}
.messages-container {
  padding: 20px 40px;
  width: 100%;
}
</style>
