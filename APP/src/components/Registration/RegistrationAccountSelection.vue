<template>
  <div class="main-container">
    <div class="new-user">
      <h2>Particulier</h2>
      <div class="big-text">Vous êtes<br />un chercheur d'emploi ?</div>
      <div class="sub-text">
        Trouvez des offres d'emploi pour dénicher un employeur.
      </div>
      <div
        class="btn--secondary no-border"
        @click="$emit('changeAccountType', 'user')"
      >
        Je crée mon compte
      </div>
    </div>
    <div class="new-company">
      <h2><b>Entreprise</b></h2>
      <div class="big-text">Vous êtes<br /><b>une entreprise ?</b></div>
      <div class="sub-text">
        Déposez des annonces pour trouver la perle rare.
      </div>
      <div class="btn--primary" @click="$emit('changeAccountType', 'company')">
        Je crée mon compte
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  min-height: 100%;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
}
.new-user,
.new-company {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 100%;
  height: 100%;
  h2 {
    font-size: $font-m;
    text-transform: uppercase;
    font-weight: 600;
  }
  .big-text {
    font-size: $font-xxl;
    text-align: center;
    font-weight: 900;
  }
  .sub-text {
    font-size: 1rem;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  button {
    margin-top: 20px;
  }
}
.new-user {
  background-color: $color-primary;
  color: white;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
}

</style>
