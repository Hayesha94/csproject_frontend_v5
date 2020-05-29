<template>

  <v-app-bar 
    app
    color="light-gray lighten-1"
    dark
    flat
  >
    <v-toolbar-title>TGS</v-toolbar-title>
    <v-spacer></v-spacer>
    
    <v-btn link='false' text rounded :to="{ name: 'welcome-page' }">Home</v-btn>
    <v-btn v-if="loggedIn" link='false' text rounded>Dashboard</v-btn>

    <v-btn v-if="!loggedIn" link='false' text rounded :to="{ name: 'login-page' }">Login</v-btn>
    <v-btn v-if="!loggedIn" link='false' text rounded :to="{ name: 'registration-page' }">Register</v-btn>
    <v-btn v-if="loggedIn" link='false' text rounded>Logout</v-btn>

  </v-app-bar>

</template>

<script>

export default {
  data() {
    return {
      //
    }
  },
}
</script>

<style>

</style>