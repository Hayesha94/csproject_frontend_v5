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
                    <v-text-field
                      label="Journey Title"
                      @blur="updateName"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-textarea
                      label="Brief Description"
                      @blur="updateDescription"
                    ></v-textarea>
                  </v-col>
                  <v-col>
                    <h1 class="subtitle-2"># of Participants</h1>
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
                  <v-col>
                    <v-textarea
                      label="Additional Notes"
                      @blur="updateNotes"
                    ></v-textarea>
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

                <!-- <v-btn 
                  outlined
                  color="success"
                >
                  Save Progress
                  <v-icon right dark>mdi-cloud-upload</v-icon>
                </v-btn> -->

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
                            v-model="selectedInterests"
                            column
                            multiple
                            @change="updateSelectedInterests"
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
                          multiple
                          column
                          v-model="selectedDestinations"
                          @change="updateSelectedDestinations"
                        >
                          <template v-if="selectedInterests.length">
                            <v-chip
                              v-for="(destination, index) in preferredDestinations"
                              :key="index"
                              :value="destination"
                              filter
                            >
                              {{ destination.name }}
                            </v-chip>
                          </template>
                          <template v-else>
                            <v-chip
                              v-for="(destination, index) in destinations"
                              :key="index"
                              :value="destination"
                              filter
                            >
                              {{ destination.name }}
                            </v-chip>
                          </template>
                        </v-chip-group>
                      </v-col>
                    </v-row>
                    <v-row class="d-flex justify-space-around">
                      <template v-if="destinationsSelected">
                        <v-col
                          cols="12"
                          sm="4"
                          md="5"
                          v-for="(destination, index) in destinationsSelected"
                          :key="index"
                        >
                          <DestinationCard
                            :destination="destination" 
                            :filteredDestinations="destinations"
                          ></DestinationCard>
                        </v-col>
                      </template>
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

                <!-- <v-btn 
                  outlined
                  color="success"
                >
                  Save Progress
                  <v-icon right dark>mdi-cloud-upload</v-icon>
                </v-btn> -->

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
              <v-card-text>
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

                <!-- <v-btn 
                  text
                  color="success"
                >
                  Save Progress
                </v-btn> -->

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
                  @click="submitAppointment"
                >
                  send proposal
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
      step: '1',
      low_step: '1',
      high_step: '4',

      selectedInterests: [],
      showDestinations: [],
      selectedDestinations: [],

      languages: [
        'English',
        'Sinhala',
        'Tamil',
        'French',
        'Latin',
      ],
      snackbar: false,
    }
  },
  computed: {

    ...mapGetters({
      fullName: 'Login/fullName',
      user: 'Login/user',
      destinations: 'Destinations/destinations',
      categories: 'Destinations/categories',
      userInterests: 'Appointments/getInterests',
      preferredDestinations: 'Destinations/preDestinations',
      destinationsSelected: 'Destinations/selectedDestinations',
      guidesByRegion: 'Guides/guidesByRegion',
    }),
  },
  methods: {
    next() {
      if (this.step < this.high_step) {
        this.step++;
      }
    },
    back() {
      if (this.step > 1) {
        this.step--
      }
    },
    updateSelectedInterests() {
      if (this.selectedDestinations.length != 0) {
        this.selectedDestinations = [];
        this.$store.commit('Destinations/Destinations/SET_SELECTED_DESTINATIONS', []);
        this.$store.commit('Destinations/SET_SELECTED_DESTINATIONS', []);   
      }
      this.$store.commit('Appointments/SET_INTERESTS', this.selectedInterests);

      if (this.selectedInterests.length > 0) {
        this.$store.dispatch('Destinations/set_destinations_by_preferances', {
          data: this.selectedInterests
        });
      } else {
        this.$store.commit('Appointments/SET_INTERESTS', []);
      }
    },
    updateAdultsCount(event) {
      this.$store.commit('Appointments/SET_PARTICIPANTS_ADULTS', event.target.value);
    },
    updateChildrenCount(event) {
      this.$store.commit('Appointments/SET_PARTICIPANTS_CHILDREN', event.target.value);
    },
    updateName(event) {
      this.$store.commit('Appointments/SET_NAME', event.target.value);
    },
    updateDescription(event) {
      this.$store.commit('Appointments/SET_DESCRIPTION', event.target.value);
    },
    updateNotes(event) {
      this.$store.commit('Appointments/SET_NOTES', event.target.value);
    },
    updateSelectedDestinations() {
      if (this.selectedDestinations.length > 0) {
        this.$store.commit('Destinations/SET_SELECTED_DESTINATIONS', this.selectedDestinations);

        let destinations_id = this.selectedDestinations.map(destination => destination.id)
        this.$store.dispatch('Guides/get_guides_by_destination', {
          data: destinations_id,
        });

      } else {
        this.$store.commit('Destinations/SET_SELECTED_DESTINATIONS', []);
        this.$store.commit('Guides/SET_GUIDES_REGION', []);
      }
    },
    submitAppointment() {
      this.$store.dispatch('Appointments/submit_appointment');
      
    }
  },
  mounted() {
    this.$store.commit('Appointments/SET_USER_ID', this.user.user_to_tourist.id);
    this.showDestinations = this.destinations;
  }
}
</script>

<style>

</style>