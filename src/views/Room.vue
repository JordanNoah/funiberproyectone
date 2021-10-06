<template>
  <v-container fluid class="pa-0">
    <v-app-bar app hide-on-scroll color="primary">
      <v-img :src="require(`@/assets/prueba/logo.png`)" max-height="40" max-width="40" contain @click="goTo()"></v-img>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <span class="titleAppBar">
          <strong class="white--text d-none d-md-block">
            {{$t("Room.AppBar.Title")}}
          </strong>
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom rounded :close-on-content-click="false" min-width="250">
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="third" size="43">
              <span class="white--text text-h6">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card class="menuStyle" color="background">
          <v-container>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar class="mb-2" color="accent">
                  <span class="text-h6 white--text">{{ user.initials }}</span>
                </v-avatar>
                <h3>{{ user.fullName }}</h3>
                <p class="text-caption mt-1">
                  {{ user.email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <div class="d-flex justify-space-between align-center mb-3">
                  <span>{{$t("Room.AppBar.MenuAvatar.DarkMode")}}</span>
                  <v-switch
                    v-model="darkMode"
                    inset
                    hide-details
                    class="ma-0 pa-0"
                  ></v-switch>
                </div>
                <div>
                  <v-select v-model="languaje" :items="items" item-text="text" item-value="abbr" :label="$t('Room.AppBar.MenuAvatar.Languajes')" outlined dense hide-details></v-select>
                </div>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded text @click.stop="closeSesion()"> {{$t("Room.AppBar.MenuAvatar.Disconnect")}} </v-btn>
              </div>
            </v-list-item-content>
          </v-container>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    user: {
      initials: "JU",
      fullName: "Jordan Ubilla",
      email: "jordan.ubilla@funiber.org",
    },
    items: [
      {text:'Español',abbr:'es'},
      {text:'Ingles',abbr:'en'}
    ],
  }),
  mounted: function(){
    if(!localStorage.getItem('darkMode')){
      this.$vuetify.theme.dark = false
    }else{
      this.$vuetify.theme.dark = localStorage.getItem('darkMode') === 'true' ? true : false
    }
  },
  computed:{
    languaje:{
      get:function(){
        return this.$i18n.locale;
      },
      set:function(value){
        this.$i18n.locale = value
        this.$vuetify.lang.current = value
        localStorage.setItem('languaje',value)
      }
    },
    darkMode:{
      get:function(){
        return this.$vuetify.theme.dark
      },
      set:function(value){
        this.$vuetify.theme.dark = value
        localStorage.setItem('darkMode',value);
      }
    }
  },
  methods:{
    closeSesion(){
      this.$store.commit('removeUserInformation')
      this.$router.push({ name: "Login" }).catch((e) => {console.log(e)});
    },
    getDirectory(){
      if(this.$vuetify.theme.dark){
        return 'light'
      }else{
        return 'dark'
      }
    },
    goTo(){
      this.$route.name != "Manager" ? this.$router.push({name:'Room'}) : null
    }
  }
};
</script>

<style>
/* .theme--dark .titleAppBar{
  color: #0088ce;
}
.theme--light .titleAppBar{
  color: #ffffff;
}
.menuStyle.theme--light{
  color: #F3F3F3
}
.menuStyle.theme--dark{
  color: #F3F3F3
} */
</style>