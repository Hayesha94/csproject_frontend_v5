<template>
  <v-card
    class="mx-auto"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title class="d-flex justify-center">{{ des.name }}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <v-row>
        <v-col>{{ des.description }}</v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'DestinationCardComponent',
  props: [
    'destination',
    'filteredDestinations',
  ],
  data() {
    return {
      des: this.findDestinationByID(this.destination.id),
    }
  },
  methods: {
    findDestinationByID(id) {
      return this.filteredDestinations.find( destination => destination.id === id);
    },
  },
}
</script>

<style>

</style>