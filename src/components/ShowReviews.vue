<template>
  <v-container>
    <v-dialog
      v-model="show"
      width="900"
      persistent
    >
      <v-card
        width="900"
      >
        <v-card-actions class="d-flex justify-end">
          <v-btn
            icon
            @click="$emit('hideDialog')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-title>
          <v-row class="d-flex flex-column">
            <v-col class="ma-0 pa-0">
              <h1 class="subtitle-2 ml-3">Add a review ({{ rating }})</h1>
            </v-col>
            <v-col class="ma-0 pa-0">
              <v-rating
                color="yellow"
                background-color="yellow"
                hover
                v-model="rating"
              ></v-rating>
            </v-col>
            <v-col cols="6">
              <v-textarea
                v-model="description"
                placeholder="Add a comment"
                hide-details
                outlined
              >
              </v-textarea>
            </v-col>
            <v-col>
              <v-btn
                text
                @click="submitReview"
              >
                submit
              </v-btn>
            </v-col>
            <v-col>
              <v-list
                three-line
              >
                <v-list-item
                  v-for="review in reviews.reviews"
                  :key="review"
                >
                  <v-list-item-avatar><v-img :src='review.user.dp_url'></v-img></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ review.user.fname }} {{ review.user.lname }}
                      <span class="subtitle-2 grey--text ml-5">1 day ago</span>
                      <span>
                        <v-rating
                          dense 
                          :value="review.rating" 
                          readonly 
                          color="yellow" 
                          background-color="yellow"
                        ></v-rating></span>
                    </v-list-item-title>
                    <v-list-item-subtitle class="mt-3">
                      {{ review.description }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-card-title>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import reviewAPI from '@/services/Reviews.js';
import { mapGetters } from 'vuex';

export default {
  props: [
    'show',
    'guide',
  ],
  data() {
    return {
      rating: 0,
      description: '',
      reviews: [],
    }
  },
  computed: {

    ...mapGetters({
      user_id: 'Login/userId',
    })
  },
  methods: {
    submitReview() {
      reviewAPI.storeReview({
        'guide_id': this.guide,
        'rating': this.rating,
        'description': this.description,
        'user_id': this.user_id,
      })
        .then( response => {
          this.reviews = response.data;
      })
      this.rating = 0;
      this.description = '';

    }
  },
  watch: {
    guide: {
      immediate: true,
      handler() {
        reviewAPI.getReviews({
          'guide': this.guide,
        })
        .then( response => {
          this.reviews = response.data;
        });
      }
    }
  },
}
</script>

<style>

</style>


