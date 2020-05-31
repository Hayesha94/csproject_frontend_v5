<template>
  <v-app>
    
    <!-- Navigation bar -->
    <NavBar></NavBar>

    <!-- content goes here -->
    <v-content>
      hi, this is welcome page
    </v-content>

    <!-- Footer section -->
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "WelcomePage",
  components: {
    NavBar,
    Footer,
  }
}
</script>

<style>

</style>