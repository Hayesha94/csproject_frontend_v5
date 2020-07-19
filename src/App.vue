<template>
  <div>
    <!-- loads all the views into App.vue -->
    <router-view></router-view>

    <v-snackbar
      v-for="(snackbar, index) in snackbars.filter(s => s.showing)"
      :key="index"
      v-model="snackbar.showing"
      color="green"
      :style="`bottom: ${(index * 60) + 10}px`"
      :timeout="-1"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="snackbar.showing = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
    
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      //
    }
  },
  computed: {

    ...mapGetters({
      snackbars: 'Snackbar/snackbar',
    })
  }
}
</script>

<style>

</style>