<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  beforeCreate: async function() {
    if(!localStorage.getItem('languaje')){
      this.$i18n.locale = navigator.language.split("-")[0]
      localStorage.setItem('languaje',navigator.language.split("-")[0])
    }else{
      this.$i18n.locale = localStorage.getItem('languaje')
      this.$vuetify.lang.current = localStorage.getItem('languaje')
    }
  },
};
</script>

<style>
@font-face {
  font-family: "LocalFont";
  src: url("./assets/font/Frutiger.ttf");
}
.v-application{
  font-family:'LocalFont'!important;
}
.theme--light.v-application{
  background-color: #F2F2F2F2!important;
}
.theme--dark.v-application{
  background: #13131A!important;
}
</style>