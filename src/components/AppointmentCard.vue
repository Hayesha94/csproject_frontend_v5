<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <v-row>
              <v-col>
                <h1 class="my-3">{{ appointment.name }}</h1>
              </v-col>
              <v-col class="d-flex align-center">
                <h1 class="subtitle-2 pr-5">start 07/04/2020</h1>
                <h1 class="subtitle-2">end 07/04/2020</h1>
              </v-col>
            </v-row>
            <v-img
              src="https://storage.googleapis.com/checkfront-rogue.appspot.com/accounts/cf-94884/images/2020/large-LKI9500025-E-1587029096775.JPG?alt=media&generation=1587028986850655"
              height="300"
            >
            </v-img>
          </v-card-title>
          <v-card-text>
            <h1 class="subtitle-1">Description</h1> <br>
            {{ appointment.description }}
            <v-row>
              <v-col>
                <v-chip
                  v-for="act in appointment.locations"
                  :key="act"
                  class="mr-2"
                >
                  {{ act.location_to_activity.name }}
                </v-chip>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: [
    'appointment'
  ],
  data() {
    return {
      //
    }
  },
}
</script>

<style>

</style>