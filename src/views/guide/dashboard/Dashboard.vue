<template>
  <v-container>
    <v-container>
      <v-row>
        <v-col>
          <stat-card 
            link="appointments"
            color="success"
          >
            <template #header>
              <h1 class="title white--text">
                Appointments
              </h1>
            </template>

            <template #body>
              <v-row class="d-flex flex-column">
                <v-col class="pt-0">
                  <h1 class="subtitle-1 grey--text">Appointments Start Today: 12</h1>
                  <h1 class="subtitle-1 grey--text">Ongoing Appointments: 12</h1>
                  <h1 class="subtitle-1 grey--text">Appointments End Today: 12</h1>
                </v-col>
              </v-row>
            </template>
          </stat-card>
        </v-col>
        <v-col>
          <stat-card 
            link="posts/viewposts"
            color="success"
          >
            <template #header>
              <h1 class="title white--text">
                Events
              </h1>
            </template>
            <template #body>
              <v-row class="d-flex flex-column">
                <v-col class="pt-0">
                  <h1 class="subtitle-1 grey--text">Events Start Today: 12</h1>
                  <h1 class="subtitle-1 grey--text">Ongoing Events: 12</h1>
                  <h1 class="subtitle-1 grey--text">Events End Today: 12</h1>
                </v-col>
              </v-row>
            </template>
          </stat-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <stat-card>
            <template #header>
              <h1 class="title white--text">
                <strong class="gray--text text--lighten-3">+234</strong>
                Followers
              </h1>
            </template>
            <template #body>
              <p class="subtitle-2 grey--text">
                Latest Follower
                  <br>
                <v-chip
                  pill
                  v-on="on"
                  class="ml-3 mt-2"
                >
                  <v-avatar left>
                    <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                  </v-avatar>
                  Ruchinara
                </v-chip>
              </p>
            </template>
          </stat-card>
        </v-col>
        <v-col>
          <stat-card>
            <template #header>
              <h1 class="title white--text">
                <strong class="gray--text text--lighten-3">+234</strong>
                Following
              </h1>
            </template>
            <template #body>
              <p class="subtitle-2 grey--text">
                Latest Following
                  <br>
                <v-chip
                  pill
                  v-on="on"
                  class="ml-3 mt-2"
                >
                  <v-avatar left>
                    <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                  </v-avatar>
                  Ruchinara
                </v-chip>
              </p>
            </template>
          </stat-card>
        </v-col>
        <v-col>
          <stat-card
            color="error"
          >
            <template #header>
              <h1 class="title white--text">
                <strong class="gray--text text--lighten-3">+23</strong>
                Reviews
              </h1>
            </template>
            <template #body>
              <v-row class="d-flex flex-column">
                <v-col class="d-flex py-0">
                  <v-rating 
                    value="4.3"
                    readonly 
                    dense
                    color="yellow"
                    background-color="yellow"
                    half-increments
                  ></v-rating>
                  <h1 class="subtitle-2 mt-2 ml-2">4.3 out of 5</h1>
                </v-col>
                <v-col>
                  <h1 class="subtitle-2 grey--text">Latest Review</h1>
                  <v-list
                    three-line
                  >
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-img src='https://cdn.vuetifyjs.com/images/john.png'>
                        </v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>
                          Ruchinara Samaranayake
                          <span class="subtitle-2 grey--text ml-5">1 day ago</span>
                          <span>
                            <v-rating
                              dense 
                              :value="4" 
                              readonly 
                              color="yellow" 
                              background-color="yellow"
                            ></v-rating></span>
                        </v-list-item-title>
                        <v-list-item-subtitle class="mt-3">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt aperiam impedit harum illum error quisquam labore architecto? Similique voluptates dolores corrupti magnam. Optio repudiandae cupiditate at, maiores fuga harum quis!
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <!-- <v-col class="d-flex py-0">
                  <v-rating 
                    value="5" 
                    readonly 
                    small 
                    dense
                    color="yellow"
                    background-color="yellow"
                  ></v-rating>
                  <span class="caption mt-2 ml-8">83%</span>
                </v-col>
                <v-col class="d-flex py-0">
                  <v-rating 
                    value="4" 
                    readonly 
                    small 
                    dense 
                    color="yellow"
                    background-color="yellow"
                  ></v-rating>
                  <span class="caption mt-2 ml-8">10%</span>
                </v-col>
                <v-col class="d-flex py-0">
                  <v-rating 
                    value="3" 
                    readonly 
                    small 
                    dense 
                    color="yellow"
                    background-color="yellow"
                  ></v-rating>
                  <span class="caption mt-2 ml-8">4%</span>
                </v-col>
                <v-col class="d-flex py-0">
                  <v-rating 
                    value="2" 
                    readonly 
                    small 
                    dense 
                    color="yellow"
                    background-color="yellow"
                  ></v-rating>
                  <span class="caption mt-2 ml-8">2%</span>
                </v-col>
                <v-col class="d-flex py-0">
                  <v-rating 
                    value="1" 
                    readonly 
                    small 
                    dense 
                    color="yellow"
                    background-color="yellow"
                  ></v-rating>
                  <span class="caption mt-2 ml-8">2%</span>
                </v-col> -->
              </v-row>
            </template>
          </stat-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-calander></v-calander>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import statCard from '@/components/StatCard.vue';

export default {
  components: {
    statCard,
  },
  data() {
    return {
      currentDate: new Date().toISOString().substr(0, 10),
    }
  },
  computed: {

    ...mapGetters({
      user: 'Login/user',
    })
  }
}
</script>

<style>
.v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>