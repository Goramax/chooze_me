<template>
  <main>
    <h1>Connexion</h1>
    <form class="form-container-base">
      <div class="form-group">
        <label for="login">Identifiant</label>
        <input type="text" id="login" placeholder="Identifiant" />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" placeholder="Mot de passe" />
      </div>
      <div class="form-group">
        <input type="checkbox" id="remember" />
        <label for="remember">Rester connecté</label>
      </div>
      <button type="submit">Se connecter</button>
    </form>
    <div class="no-account-txt">
      Pas de compte ? <router-link to="/inscription">Je m'inscris !</router-link>
    </div>
  </main>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 900;
  text-align: center;
  font-size: $font-xxl;
  @media (max-width: $media-md) {
    font-size: $font-lp;
  }
}
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.no-account-txt {
  text-align: center;
  margin-top: 60px;
}
</style>
