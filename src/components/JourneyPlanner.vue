<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <!-- <v-list
          color="grey lighten-3"
        >
          <v-list-item
            v-for="location in locations"
            :key="location.id"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ location.name }}
              </v-list-item-title>
              <v-list-item-subtitl>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit...
                <v-divider></v-divider>
              </v-list-item-subtitl>
            </v-list-item-content>
          </v-list-item>
        </v-list> -->
        <v-card 
          color="grey lighten-3"
          class="mb-2"
        >
          <v-virtual-scroll
            :items="locations"
          >
            <template v-slot="{ location }">
              <v-card-title> {{ location.name }}</v-card-title>
            </template>
          </v-virtual-scroll>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'JourneyPlannerComponent',
  data() {
    return {
      locations: [
        { name: 'Location 1', id: '1' },
        { name: 'Location 2', id: '2' },
        { name: 'Location 3', id: '3' },
        { name: 'Location 4', id: '4' },
        { name: 'Location 5', id: '5' },
        { name: 'Location 6', id: '6' },
        { name: 'Location 7', id: '7' },
        { name: 'Location 8', id: '8' },
        { name: 'Location 9', id: '9' },
        { name: 'Location 10', id: '10' },
        { name: 'Location 11', id: '11' },
      ]
    }
  }
}
</script>

<style>

</style>