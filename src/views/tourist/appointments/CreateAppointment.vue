<template>
  <v-row>
    <v-col>
      <v-stepper 
        alt-labels
        :value="step"
      >
        <v-stepper-header>
          <v-stepper-step 
            step="1"
            :complete="step > 1"
          >
            About Me
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step 
            step="2"
            :complete="step > 2"
          >
            Select Destinations
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            step="3"
            :complete="step > 3"
          >
            Meet Your Travel Guide
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            step="4"
            :complete="step > 4"
          >
            Plan Your Journey
          </v-stepper-step>

        </v-stepper-header>

        <v-stepper-items>

          <v-stepper-content
            step="1"
            :complete="step > 1"
          >
            <v-card>
              <v-card-text>
                <v-row class="d-flex flex-column">
                  <v-col>
                    <h1 class="title d-flex justify-center">Your Details</h1>
                  </v-col>
                  <v-col>
                    <v-text-field 
                      label="Username"
                      :value="user.username"
                      readonly
                    ></v-text-field>
                    <v-text-field
                      label="Full Name"
                      :value="fullName"
                      readonly
                    >
                    </v-text-field>
                    <v-text-field
                      label="Email"
                      :value="user.email"
                      readonly
                    >
                    </v-text-field>
                    <v-text-field
                      label="Address"
                      :value="user.address"
                      readonly
                    >
                    </v-text-field>
                    <v-text-field
                      label="Country"
                      :value="user.country"
                      readonly
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row class="d-flex flex-column">
                  <v-col>
                    <h1 class="title d-flex justify-center"># of Participants</h1>
                  </v-col>
                  <v-col class="d-flex">
                    <v-col>
                      <v-text-field
                        prefix="Adults"
                        @blur="updateAdultsCount"
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field
                        prefix="Children"
                        @blur="updateChildrenCount"
                      ></v-text-field>
                    </v-col>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-between">
                <v-btn 
                  text
                  @click="back()"
                  color="error"
                >
                  <v-icon>mdi-arrow-left</v-icon>
                  Back
                </v-btn>

                <v-btn 
                  outlined
                  color="success"
                >
                  Save Progress
                  <v-icon right dark>mdi-cloud-upload</v-icon>
                </v-btn>

                <v-btn 
                  text
                  @click="next()"
                  color="error"
                >
                  Next
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>

          <v-stepper-content
            step="2"
            :complete="step > 2"
          >
            <v-card flat>
              <v-card-text>
                <div>
                  <div>
                    <p class="title d-flex justify-center blue-grey--text">Tell us about your interests</p>
                    <div>
                      <p class="subtitle-2">Activity Preferances</p>
                      <v-row>
                        <v-col>
                          <v-chip-group
                            v-model="interests"
                            column
                            multiple
                            @change="updateInterests"
                          >
                            <v-chip 
                              v-for="(category, index) in categories"
                              :key="index"
                              filter
                              :value="category.id"
                            > {{ category.name }} </v-chip>
                          </v-chip-group>
                        </v-col>
                      </v-row>
                    </div>
                    <v-row>
                      <v-col>
                        <p class="subtitle-2">Destinations</p>
                        <v-chip-group
                          v-if="selectedDestinations"
                          v-model="selectedDestinations"
                          multiple
                          column
                          @change="updateDestinations"
                        >
                          <v-chip
                            v-for="(destination, index) in filteredDestinations"
                            :key="index"
                            :value="destination.id"
                            filter
                          >
                            {{ destination.name }}
                          </v-chip>
                        </v-chip-group>
                      </v-col>
                    </v-row>
                    <v-row v-if="selectedDestinations" class="d-flex justify-space-around">
                      <v-col
                        cols="12"
                        sm="4"
                        md="5"
                        v-for="(destination, index) in selectedDestinations"
                        :key="index"
                      >
                        <DestinationCard 
                          :destination="destination" 
                          :filteredDestinations="filteredDestinations"
                        ></DestinationCard>

                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-between">
                <v-btn 
                  text
                  @click="back()"
                  color="error"
                >
                  <v-icon>mdi-arrow-left</v-icon>
                  Back
                </v-btn>

                <v-btn 
                  outlined
                  color="success"
                >
                  Save Progress
                  <v-icon right dark>mdi-cloud-upload</v-icon>
                </v-btn>

                <v-btn 
                  text
                  @click="next()"
                  color="error"
                >
                  Next
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>

          <v-stepper-content 
            step="3"
            :complete="step > 3"
          >
            <v-card>
              <v-card-text v-if="guidesByRegion">
                <GuidesTable :guides="guidesByRegion"></GuidesTable>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-between">
                <v-btn 
                  text
                  @click="back()"
                  color="error"
                >
                  <v-icon>mdi-arrow-left</v-icon>
                  Back
                </v-btn>

                <v-btn 
                  text
                  color="success"
                >
                  Save Progress
                </v-btn>

                <v-btn 
                  text
                  @click="next()"
                  color="error"
                >
                  Next
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>

          <v-stepper-content
            step="4"
            :complete="step > 4"
          >
            <v-card>
                <v-card-text v-if="selectedDestinations">
                  <JourneyPlanner></JourneyPlanner>
                </v-card-text>
              <v-card-actions class="d-flex justify-space-between">
                <v-btn 
                  text
                  @click="back()"
                  color="error"
                >
                  <v-icon>mdi-arrow-left</v-icon>
                  Back
                </v-btn>

                <v-btn 
                  text
                  color="success"
                >
                  Save Progress
                </v-btn>

                <v-btn 
                  text
                  @click="next()"
                  color="error"
                >
                  Next
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>

        </v-stepper-items>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import DestinationCard from '@/components/DestinationCard.vue';
import GuidesTable from '@/components/GuidesTable.vue';
import JourneyPlanner from '@/components/JourneyPlanner.vue';

import destinationAPI from '@/services/Destinations.js';
import guideAPI from '@/services/Guides.js';

export default {
  components: {
    DestinationCard,
    GuidesTable,
    JourneyPlanner,
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      step: '4',
      low_step: '1',
      high_step: '4',
      interests: [],
      selectedDestinations: [],
      filteredDestinations: [],
      guidesByRegion: null,
      languages: [
        'English',
        'Sinhala',
        'Tamil',
        'French',
        'Latin',
      ]
    }
  },
  computed: {

    ...mapGetters({
      fullName: 'Login/fullName',
      user: 'Login/user',
      destinations: 'Destinations/destinations',
      categories: 'Destinations/categories',
    })
  },
  methods: {
    next() {
      if (this.step < this.high_step) {
        this.step++;
        return guideAPI.getGuidesByRegion(this.selectedDestinations)
          .then (response => {
            this.guidesByRegion = response.data;
            console.log('guidesByRegion', response.data);
          })
      }
    },
    back() {
      if (this.step > 1) {
        this.step--
      }
    },
    changed(event) {
      console.log('event', event.target);
    },
    updateAdultsCount(event) {
      this.$store.commit('Appointments/SET_PARTICIPANTS_ADULTS', event.target.value);
    },
    updateChildrenCount(event) {
      this.$store.commit('Appointments/SET_PARTICIPANTS_CHILDREN', event.target.value);
    },
    updateInterests() {
      this.$store.commit('Appointments/SET_INTERESTS', this.interests);

      if (this.interests.length) {
        destinationAPI.getDestinationsByPreferance({
          'data': this.interests,
        })
          .then( response => {
            this.filteredDestinations = response.data;
          })
      } else {
        this.filteredDestinations = this.destinations;
        console.log('empty');
      }
    },
    updateDestinations() {
      this.$store.commit('Appointments/SET_DESTINATIONS', this.selectedDestinations)
    }
  },
  mounted() {
    this.$store.commit('Appointments/SET_USER_ID', this.user.id)
    this.filteredDestinations = this.destinations;
  }
}
</script>

<style>

</style>