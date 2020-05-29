<template>
  <v-app>
    
    <!-- Navigation bar -->
    <NavBar></NavBar>

    <!-- content goes here -->
    <v-content>
      hi, this is welcome page
    </v-content>

  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: "WelcomePage",
  components: {
    NavBar,
  }
}
</script>

<style>

</style>