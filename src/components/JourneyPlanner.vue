<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card
          v-for="location in locations"
          :key="location.id"
          class="mb-2"
        >
          <v-card-title> {{ location.name }}</v-card-title>
          <v-card-subtitle>
            <div class="d-flex">
              <div
            v-for="(activity, index) in location.activity"
            :key="index"
            class="d-flex"
            >
              <v-chip>{{activity.name}}</v-chip>
            </div>
            </div>
          </v-card-subtitle>
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
        { 
          name: 'Location 1', 
          id: '1',
          activity: [
            { 
              name: 'Activity 1',
              id: '1',
              cate: [
                { name: 'cat1', id: '1'},
                { name: 'cat2', id: '2'},
              ],
            },
            { 
              name: 'Activity 2', 
              id: '2',
              cate: [
                { name: 'cat1', id: '1'},
                { name: 'cat2', id: '2'},
              ],
            },
          ],
        },
        { 
          name: 'Location 1', 
          id: '1',
          activity: [
            { 
              name: 'Activity 1', 
              id: '1',
              cate: [
                { name: 'cat1', id: '1'},
                { name: 'cat2', id: '2'},
              ],
            },
            { 
              name: 'Activity 2', 
              id: '2',
              cate: [
                { name: 'cat1', id: '1'},
                { name: 'cat2', id: '2'},
              ],
            },
          ],
        },
      ]
    }
  }
}
</script>

<style>

</style>