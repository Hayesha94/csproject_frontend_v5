<template>
  <v-app app>
    
    <!-- Navigation bar -->
    <NavBar></NavBar>

    <v-main app>
      
      <v-container fluid>

        <!-- left Navigation panel -->
        <LeftNavPanel :navLinks="items"></LeftNavPanel>

      </v-container>
    </v-main>

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
        { text: 'Dashboard', icon: 'mdi-view-dashboard', url: '/guide/dashboard' },
        { text: 'Profile', icon: 'mdi-account', url: '/guide/dashboard/profile' },
        { text: 'My Appointments', icon: 'mdi-calendar-account', url: '' },
        { text: 'Posts', icon: 'mdi-typewriter', url: '/guide/dashboard/posts/viewposts' },
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
