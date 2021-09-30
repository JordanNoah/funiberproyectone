<template>
  <v-container fill-height>
    <v-row justify="center" align="center" no-gutters>
      <v-col md="5" class="d-none d-md-block">
        <v-card outlined height="450">
          <v-container fill-height>
            <v-row justify="center" align="center">
              <v-col cols="12" md="6">
                <v-img contain height="250" src="../assets/prueba/prueba3.png"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" md="5" sm="10">
        <v-card outlined :height="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 450 : 'auto'" dark color="third">
          <v-container fill-height>
            <v-row justify="end" align="end">
              <v-col cols="5">
                <v-select v-model="languajeSelected" :items="languajes" item-text="text" item-value="abbr" :label="$t('Room.AppBar.MenuAvatar.Languajes')" outlined dense hide-details></v-select>
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-col cols="10" class="pa-6">
                <v-container class="d-block d-md-none">
                  <v-img contain height="150" src="../assets/prueba/GspLight.png" class="my-3"></v-img>
                  <v-divider></v-divider>
                </v-container>
                <v-container class="d-flex flex-column justify-center" :style="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'height:350px' : 'height:auto'">
                    <v-form v-model="loginForm" class="mx-3" lazy-validation ref="form">
                      <p class="text-center text-h4 font-weight-bold text-decoration-underline white--text mb-7">{{$t('Login.Label')}}</p>
                      <v-text-field v-model="user" outlined :rules="userRules" dense :label="$t('Login.User')" required clearable></v-text-field>
                      <v-text-field v-model="password" outlined :rules="passwordRules"
                      :append-icon="showPassword ? 'far fa-eye' : 'far fa-eye-slash'"
                      :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword" dense
                      :label="$t('Login.Password')" required></v-text-field>
                    </v-form>
                    <div class="d-flex justify-center my-4">
                      <v-btn success color="primary" block rounded elevation="0" @click="validate" :disabled="!loginForm">{{$t('Login.ActionButton')}}</v-btn>
                    </div>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="errorLogin" color="error" top>Credenciales incorrectas</v-snackbar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loginForm: true,
    user: "",
    userRules: [(v) => !!v || "Usuario es obligatorio"],
    password: "",
    passwordRules: [(v) => !!v || "Password es obligatorio"],
    showPassword: false,
    errorLogin: false,
    languajes:[
      {text:'Español',abbr:'es'},
      {text:'Ingles',abbr:'en'}
    ]
  }),
  beforeCreate: function() {
    this.$vuetify.theme.dark = false
  },
  computed:{
    languajeSelected:{
      get:function(){
        return this.$i18n.locale;
      },
      set:function(value){
        this.$i18n.locale = value
        localStorage.setItem('languaje',value)
      }
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.$store.commit(
          "setUserInformation",
          '{id:"1",nombre:"' +
            this.user +
            '",rol:"Administrador",token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c}'
        );
        this.$router.replace({ name: "Manager" }).catch((e) => {console.log(e)});
      }
    },
  },
};
</script>
