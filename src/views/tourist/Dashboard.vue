<template>
  <v-app app>
    
    <!-- Navigation bar -->
    <NavBar></NavBar>

    <v-content app>
      
      <v-container>
        <!-- left Navigation panel -->
        <LeftNavPanel :navLinks="items"></LeftNavPanel>
       </v-container>
    </v-content>

    <!-- Footer -->
    <Footer></Footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import LeftNavPanel from '@/components/LeftNavPanel.vue';

export default {
  components: {
    NavBar,
    Footer,
    LeftNavPanel,
  },
  data() {
    return {
      items: [
        { text: 'Profile', icon: 'mdi-account', url: '' },
        { text: 'My Appointments', icon: 'mdi-calendar-account', url: '' },
        { text: 'Events', icon: 'mdi-calendar-clock', url: '' },
        { text: 'Notifications', icon: 'mdi-bell', url: '' },
        { text: 'Settings', icon: 'mdi-cog', url: '' },
      ],
    }
  },
  computed: {
    ...mapGetters('Login', [
      'user',
    ])
  },
}
</script>

<style>

/* { text: 'Timeline', icon: 'mdi-timeline-clock-outline', url: '' }, */
</style>
