<template>
  <div>
    <v-stepper
      :value="step"
      alt-labels
    >

      <!-- stepper header -->
      <v-stepper-header>

        <!-- step 1 -->
        <v-stepper-step 
          step="1"
          :complete="step > 1"
        >
          <div>
            <h1 class="subtitle-2">Select Category</h1>
          </div>
        </v-stepper-step>

        <v-divider></v-divider>

        <!-- step 2 -->
        <v-stepper-step 
          step="2"
          :complete="step > 2"
        >
          <div>
            <h1 class="subtitle-2">Edit {{ post_type }} </h1>
          </div>
        </v-stepper-step>

        <v-divider></v-divider>

        <!-- step 3 -->
        <v-stepper-step 
          step="3"
          :complete="step > 3"
        >
          STEP 3
        </v-stepper-step>

        <v-divider></v-divider>

        <!-- step 4 -->
        <v-stepper-step 
          step="4"
        >
          <div>
            <h1 class="subtitle-2">Publish {{ post_type }} </h1>
          </div>
        </v-stepper-step>
        
      </v-stepper-header>

      <!-- stepper items -->
      <v-stepper-items>

        <!-- item 1 -->
        <v-stepper-content 
          step="1"
        >
          <v-card 
            flat
          >
            <v-card-title>Select a Post Category</v-card-title>
            <v-card-text>
              <v-radio-group  v-model="post_type" class="ml-10" dense>
                <v-radio label="New Article" value="article"></v-radio>
                <v-radio label="New Event" value="event"></v-radio>
                <v-radio label="radio 3" value="3"></v-radio>
              </v-radio-group>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn
                small
                class="primary"
                @click="back()"
              >
                Back
              </v-btn>
              <v-btn
                small
                class="primary"
                @click="next()"
              >
                Next
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content><!-- /item 1 -->

        <!-- item 2 -->
        <v-stepper-content
          step="2"
        >
          <v-card 
            flat
          >
            <v-card-title>Edit {{ post_type }}</v-card-title>
            <v-card-text v-if="post_type == 'article'">
              <v-text-field
                label="Title"
                v-model="article.title"
              />
              <v-textarea
                label="Body"
                v-model="article.body"
              />
            </v-card-text>
            <v-card-text v-else-if="post_type == 'event'">
              <v-expansion-panels
                flat
              >
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <template v-slot:default="{ open }">
                      <v-row no-gutters>
                        <v-col cols="4">Event Name</v-col>
                        <v-col
                          cols="8"
                          class="text--secondary"
                        >
                          <v-fade-transition leave-absolute>
                            <span
                              v-if="open"
                              key="0"
                            >
                              Enter an event name
                            </span>
                            <span
                              v-else
                              key="1"
                            >
                              {{ event.title }}
                            </span>
                          </v-fade-transition>
                        </v-col>
                      </v-row>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-text-field
                      v-model="event.title"
                      label="Event Title"
                    ></v-text-field>
                    <v-textarea
                      label="Description"
                      v-model="event.description"
                    ></v-textarea>
                    <v-text-field
                      v-model="event.participants"
                      label="Number of Participants"
                    ></v-text-field>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header v-slot="{ open }">
                    <v-row no-gutters>
                      <v-col cols="4">Destinations & Activities</v-col>
                      <v-col
                        cols="8"
                        class="text--secondary"
                      >
                        <v-fade-transition leave-absolute>
                          <span
                            v-if="open"
                            key="0"
                          >
                            Select event location
                          </span>
                          <span
                            v-else
                            key="1"
                          >
                            {{ event.locations }}
                          </span>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row no-gutters>
                      <v-spacer></v-spacer>
                      <v-col cols="5">
                        <v-select
                          v-model="event.locations"
                          :items="destinations"
                          item-text="name"
                          item-value="id"
                          chips
                          flat
                        
                          clearable
                        ></v-select>
                      </v-col>

                      <v-col cols="3">
                        Select your destination of choice
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-spacer></v-spacer>
                      <v-col cols="5">
                        <v-select
                          v-model="event.activities"
                          :items="activities"
                          item-text="name"
                          item-value="id"
                          chips
                          flat
                        
                          clearable
                        ></v-select>
                      </v-col>

                      <v-col cols="3">
                        Select Activities
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <v-row no-gutters>
                      <v-col cols="4">Start and end dates</v-col>
                      <v-col
                        cols="8"
                        class="text--secondary"
                      >
                      </v-col>
                    </v-row>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row
                      justify="space-around"
                      no-gutters
                    >
                      <v-col cols="3">
                        <v-menu
                          ref="startMenu"
                          :close-on-content-click="false"
                          :return-value.sync="event.start"
                          offset-y
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="event.start"
                              label="Start date"
                              readonly
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="event.start"
                            no-title
                            scrollable
                          >
                            <v-spacer></v-spacer>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.startMenu.isActive = false"
                            >Cancel</v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.startMenu.save(event.start)"
                            >OK</v-btn>
                          </v-date-picker>
                        </v-menu>
                      </v-col>

                      <v-col cols="3">
                        <v-menu
                          ref="endMenu"
                          :close-on-content-click="false"
                          :return-value.sync="event.end"
                          offset-y
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="event.end"
                              label="End date"
                              readonly
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="event.end"
                            no-title
                            scrollable
                          >
                            <v-spacer></v-spacer>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.endMenu.isActive = false"
                            >
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.endMenu.save(event.end)"
                            >
                              OK
                            </v-btn>
                          </v-date-picker>
                        </v-menu>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
            <v-card-text v-else>
              <p>This is 3</p>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn
                small
                class="primary"
                @click="back()"
              >
                Back
              </v-btn>
              <v-btn
                small
                class="primary"
                @click="next()"
              >
                Next
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content><!-- /item 2 -->

        <!-- item 3 -->
        <v-stepper-content 
          step="3"
        >
          <v-card 
            flat
          >
            <v-card-title>Select Post Category</v-card-title>
            <v-card-text>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam maiores? Quis in expedita facilis temporibus saepe deleniti dolore ad aut sed tenetur, officiis magni. Accusantium, nihil quia. Porro, cumque?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam maiores? Quis in expedita facilis temporibus saepe deleniti dolore ad aut sed tenetur, officiis magni. Accusantium, nihil quia. Porro, cumque?</p>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn
                small
                class="primary"
                @click="back()"
              >
                Back
              </v-btn>
              <v-btn
                small
                class="primary"
                @click="next()"
              >
                Next
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content><!-- /item 3 -->

        <!-- item 4 -->
        <v-stepper-content 
          step="4"
        >
          <v-card 
            flat
          >
            <v-card-title>Publish {{ post_type }}</v-card-title>
            <v-card-text>
              lets publish the {{ post_type }}
              <v-btn class="success" @click="publish()">Publish</v-btn>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn
                small
                class="primary"
                @click="back()"
              >
                Back
              </v-btn>
              <v-btn
                small
                class="primary"
                @click="next()"
              >
                Next
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content><!-- item 4 -->
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CreatePostComponent',
  components: {
    //
  },
  data() {
    return {
      step: '1',
      low_step: '1',
      high_step: '4',
      post_type: 'article',
      event: this.freshEventObject(),
      article: {
        title: '',
        body: '',
      }
    }
  },
  computed: {
    ...mapGetters({
      user_id: 'Login/user_id',
    })
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
    publish() {
      if (this.post_type === 'article') {
        this.$store.dispatch('Articles/store_articles', this.article)
          .then( success => {
            if (success) {
              alert('article success');
            }
            else {
              alert('article unsuccess');
            }
          })
      } else if (this.post_type === 'event') {
        this.$store.dispatch('Events/store_events', {
          event: this.event,
          guide_id: 2,
        })
          .then( success => {
            if (success) {
              this.event = this.freshEventObject();
              alert('event success');
            }
            else {
              alert('event unsuccess');
            }
          })
      } else {
        console.log('publish else');
      }
    },
    freshEventObject() {
      return  {
        title: '',
        description: '',
        participants: '',
        locations: '',
        activities: '',
        start: '',
        end: '',
      }
    },
  }
}
</script>

<style>

</style>