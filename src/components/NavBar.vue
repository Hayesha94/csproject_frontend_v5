<template>

  <v-app-bar 
    app
    color="light-gray lighten-1"
    dark
    flat
  >
    <v-toolbar-title>TGS</v-toolbar-title>
    <v-spacer></v-spacer>
    
    <v-btn link='false' text rounded :to="{ name: 'welcome-page' }" exact>Home</v-btn>
    <v-btn v-if="loggedIn" link='false' text rounded :to="{ name: dashboard }">Dashboard</v-btn>

    <v-btn v-if="!loggedIn" link='false' text rounded :to="{ name: 'login-page' }">Login</v-btn>
    <v-btn v-if="!loggedIn" link='false' text rounded :to="{ name: 'registration-page' }">Register</v-btn>
    <v-btn v-if="loggedIn" link='false' text rounded @click="logout()">Logout</v-btn>

  </v-app-bar>

</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      //
    }
  },
  computed: {
    dashboard() {
      if (this.role === 'tourist') {
        return 'tourist-dashboardwall';
      } else if (this.role === 'guide') {
        return 'guide-dashboard-page';
      } else {
        return true;
      }
    },
    ...mapGetters({
      loggedIn: 'Login/loggedIn',
      role: 'Login/role'
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('Login/logout_user')
        .then( success => {
          if (success) {
            this.$router.push({ name: 'welcome-page'});
            console.log('return to home page');
          }
      });
    },
  }
}
</script>

<style>

</style>