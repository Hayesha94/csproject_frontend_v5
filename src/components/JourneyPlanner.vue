<template>
  <v-container>

    <!-- show guide -->
    <v-row>
      <v-col>
        My Guide:
        <v-chip
          v-if="getGuide.id"
          pill
          v-on="on"
          class="ml-3"
        >
          <v-avatar left>
            <v-img :src='getGuide.guide_to_user.dp_url'></v-img>
          </v-avatar>
          {{ getGuide.guide_to_user.fname }} {{ getGuide.guide_to_user.lname }}
        </v-chip>
        <v-chip
          v-else
          pill
          v-on="on"
          class="ml-3"
        >
          Select a guide
        </v-chip>
      </v-col>
    </v-row>

    <!-- date picker -->
    <v-row>
      <v-col>
        <v-menu
          v-model="fromDatePicker"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              prefix="from"
              prepend-icon="mdi-calendar"
              v-model="date_from"
              v-bind="attrs"
              v-on="on"
              hide-details
              @change="updateFromDate"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date_from" @input="menu = false"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col>
        <v-menu
          v-model="toDatePicker"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              prefix="to"
              prepend-icon="mdi-calendar"
              v-model="date_to"
              v-bind="attrs"
              v-on="on"
              hide-details
            ></v-text-field>
          </template>
          <v-date-picker v-model="date_to" @input="menu = false" @change="updateToDate"></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>

    <v-row class="d-flex">

      <!-- drag locations to -->
      <v-col cols="4">
        <h1 class='title blue-grey--text ml-7 mb-3'>
          My Activities
          <v-chip
            small
            class="ml-10"
            @click="clearLocations"
          >
            <v-avatar left>
              <v-icon small>mdi-close</v-icon>
            </v-avatar>
            clear all
          </v-chip>
        </h1>

        <draggable
          :list="myLocations" 
          group="people" 
          ghost-class="ghost"
          @change="locationUpdate"
        >
          <v-card
            v-for="location in myLocations"
            :key="location"
            class="mb-2"
          >
            <v-card-title
              class='d-flex justify-start'
            >
              {{ location.location_to_activity.name }}
            </v-card-title>
          </v-card>
        </draggable>
      </v-col>

      <v-col></v-col>
      
      <!-- drag locatons from -->
      <v-col cols="6">
        <v-card
          v-for="destination in destinations"
          :key="destination"
          class="mb-5"
        >
          <v-card-title class="info--text pb-5"> {{ destination.name }}</v-card-title>
            <draggable 
              :list="destination.destination_to_locations" 
              :group="{ name: 'people', pull: 'clone', put: false }"
            >
              <v-card
                v-for="location in destination.destination_to_locations"
                :key="location"
                class="mb-2"
              >
                <v-card-title>
                  <v-avatar class="mr-2">
                    <v-img :src="avatar"></v-img>
                  </v-avatar>
                  {{ location.location_to_activity.name }}
                  @{{ location.name }}
                  <v-btn 
                    icon
                    class="mb-4"
                  >
                    <v-icon color="red">mdi-map-marker</v-icon>
                  </v-btn>
                </v-card-title>
                <v-card-text>
                  <v-chip
                    v-for="cat in location.location_to_activity.activity_to_categories"
                    :key="cat"
                    small
                    class="ma-1"
                  >
                    {{ cat.name }}
                  </v-chip>
                </v-card-text>
              </v-card>
              <!-- <v-list-item
                v-for="location in destination.destination_to_locations"
                :key="location"
              >
                <v-list-item-avatar>
                  <v-img :src="avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ location.location_to_activity.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <v-chip 
                        v-for="cat in location.location_to_activity.activity_to_categories"
                        :key="cat"
                        small
                        class="ma-1"
                      >
                        {{ cat.name }}
                      </v-chip>
                    <br>
                    @{{ location.name }}
                    <v-btn 
                      icon
                      class="mb-4"
                    >
                      <v-icon color="red">mdi-map-marker</v-icon>
                    </v-btn>
                    <v-divider></v-divider>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item> -->
            </draggable>
        </v-card>
        
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import draggable from 'vuedraggable';

export default {
  name: 'JourneyPlannerComponent',
  components: {
    draggable,
  },
  data() {
    return {
      myLocations: [],
      avatar: 'https://storage.googleapis.com/checkfront-rogue.appspot.com/accounts/cf-94884/images/2020/large-LKI9500025-E-1587029096775.JPG?alt=media&generation=1587028986850655',
      fromDatePicker: false,
      toDatePicker: false,
      date_to: '',
      date_from: '',
    }
  },
  computed: {

    ...mapGetters({
      destinations: 'Destinations/destinations',
      selectedDestinations: 'Destinations/selectedDestinations',
      selectedLocations: 'Destinations/selectedLocations',
      getGuide: 'Appointments/getGuide',
    }),
  },
  methods: {
    clearLocations() {
      this.myLocations = [];
      this.$store.commit('Appointments/SET_LOCATIONS', []);
    },
    locationUpdate({added}) {
      if (added) {
        let locationId = this.myLocations.map( loc => loc.id);
        this.$store.commit('Appointments/SET_LOCATIONS', locationId);
      }
    },
    updateFromDate(event) {
      this.$store.commit('Appointments/SET_DATE_START', event.target.value);
    },

    updateToDate(event) {
      this.$store.commit('Appointments/SET_DATE_END', event.target.value);
    },
    watch: {
      date_to: {
        immediate: true,
        handler() {
          /* this.$store.commit('Appointments/SET_DATE_END', this.date_to); */
          console.log('hi');
        }
      },
      date_from: {
        immediate: true,
        handler() {
          this.$store.commit('Appointments/SET_DATE_START', this.date_from);
        }
      }
    },
  }
}
</script>

<style scoped>
.ghost {
  opacity: 0.1;
  background: white;
}
.chosen {
  opacity: 0.5;
  background: blue;
}
.drag {
  opacity: 0.5;
  background: green;
}

</style>