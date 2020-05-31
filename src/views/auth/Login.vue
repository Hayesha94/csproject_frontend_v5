<template>
  <v-app>

    <v-card width="400" class="mx-auto my-auto">
      <v-card-title class="d-flex justify-center  blue darken-1">
        <h1 class="display-1 grey--text text--darken-4">Login</h1>
      </v-card-title>
      <v-card-text class="pt-2">
        <v-form>
        <v-text-field 
          label="Email"
          prepend-icon="mdi-email"
          v-model="credentials.email"
        />
        <v-text-field 
          :type="showPassword ? 'text' : 'password'" 
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          v-model="credentials.password"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn 
          class="primary mb-2"
          @click.prevent="login"
          >
            Login
          </v-btn>
      </v-card-actions>
      <v-card-subtitle class="pa-0 ma-0">
        <v-container>
          <v-row >
            <v-col class="d-flex justify-space-between ma-0 py-0 px-5">
              <span>
                <p class="blue--text">Forgot your password?</p>
              </span>
              <span>
                <p class="ma-0 pa-0 text--disabled pr-2">Not Registered?</p>
                <p class="ma-0 pa-0">
                  <router-link :to="{ name: 'registration-page' }">Create an Account</router-link>
                </p>
              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-card-subtitle>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      showPassword: false,
      credentials: {
        'email': '',
        'password': '',
      },
    }
  },
  methods: {
    login() {
      this.$store.dispatch('Login/login_user', this.credentials)
        .then( success => {
          if (success === true) {
            this.$router.push( {name: 'welcome-page'})
          }
      });
    }
  }
}
</script>

<style>

</style>