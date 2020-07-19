<template>
  <v-row class="d-flex justify-center">

    <!-- search bar -->
    <v-row class="d-flex flex-column pl-5">
      <v-row class="ma-0 pa-0">
        <v-col>
          <v-text-field
            hide-details
            label="Search... (Username, Name)"
            prepend-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
        <v-col cols='3'>
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
              ></v-text-field>
            </template>
            <v-date-picker v-model="date_from" @input="menu = false"></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="3">
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
            <v-date-picker v-model="date_to" @input="menu = false"></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-select
            v-model="primary_lang"
            label="Prefered Language"
            prepend-icon="mdi-web"
            hide-details
            chips
            clearable
            :items="languages"
            item-text="name"
          ></v-select>
        </v-col>
        <v-col>
          <!-- <v-select
            v-model="secondary_langs"
            label="Other Languages"
            prepend-icon="mdi-web"
            hide-details
            chips
            clearable
            multiple
            :items="languages"
            item-text="name"
          ></v-select> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            text
            block
          >
            <v-icon>mdi-magnify</v-icon>
            Search
          </v-btn>
        </v-col>
      </v-row>
    </v-row>

    <!-- guide data table -->
    <v-row>
      <v-col>
        <v-data-table
          :items="guides"
          :headers="headers"
          show-expand
          @click:row="selectGuide"
        >
          <template #item.username="{item}">
            {{ item.guide_to_user.username }}
          </template>

          <template #item.fullname="{item}">
            {{ item.guide_to_user.fname }} {{ item.guide_to_user.lname}}
          </template>

          <template #item.region="{item}">
            <v-chip
              small
              color="success mr-1"
            >
              {{ item.guide_to_destination.name }}
            </v-chip>
          </template>
          
          <template #expanded-item="{headers, item}">
            <td :colspan="headers.length">
              <v-row>
                <v-col class="d-flex flex-column col-3">
                  <v-avatar
                    color="grey"
                    size="164"
                    tile
                  >
                    <v-img :src="item.guide_to_user.dp_url"></v-img> 
                  </v-avatar>
                  <v-btn
                    text
                    color="primary"
                    @click="followUser(item.guide_to_user.id)"
                  >
                    follow me
                  </v-btn>
                </v-col>
                <v-col>
                  <div class="d-flex">
                    <div class="d-flex flex-column align-baseline">
                      <h1 class="title">{{ item.guide_to_user.fname }} {{ item.guide_to_user.lname }}</h1>
                      <span class="d-flex align-baseline">
                        ({{ calRating(item) }}/{{ item.review_count }})
                        <v-rating
                          class="ml-2 d-flex align-start"
                          :value="calRating(item)"
                          background-color="white"
                          color="yellow accent-4"
                          dense
                          half-increments
                          hover
                          size="18"
                          readonly
                        >
                        </v-rating>
                      </span>
                    </div>
                  </div>
                  <v-divider class="my-2"></v-divider>
                  <p class="blue-grey--text text--lighten-1"> {{ item.guide_to_user.bio}} </p>
                  <v-col class="d-flex flex-column align-start">
                    <div>
                      <v-icon class="mr-2 mb-2">mdi-email</v-icon>
                      <span>{{item.guide_to_user.email}}</span>
                    </div>
                    <div>
                      <v-icon class="mr-2">mdi-phone</v-icon>
                      <span>{{item.guide_to_user.contact_no}}</span>
                    </div>
                  </v-col>
                  <v-card
                    flat
                    class="mt-4 mb-2"
                  >
                    <v-card-actions
                      class="d-flex"
                    >
                      <v-btn 
                        small
                        class="primary mr-2"
                        v-on="on"
                        @click="showReviews(item.id)"
                      >
                        show reviews
                      </v-btn>
                      <v-btn
                        small
                        class="success"
                        @click="selectGuide(item)"
                      >
                        Select Me
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </td>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    
    <showReviews :show="showReviewDialog" @hideDialog="showReviewDialog = false" :guide="guide"></showReviews>
  </v-row>
</template>

<script>
import showReviews from '@/components/ShowReviews.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'GuidesTableComponent',
  props: ['guides'],
  components: {
    showReviews,
  },
  data() {
    return {
      rating: 0,
      registered: false,
      fromDatePicker: false,
      toDatePicker: false,
      date_from: new Date().toISOString().substr(0, 10),
      date_to: new Date().toISOString().substr(0, 10),
      languages: [
        { id: 1, 'name': 'English'},
        { id: 2, 'name': 'Sinhala'},
        { id: 3, 'name': 'German'},
        { id: 4, 'name': 'French'},
        { id: 5, 'name': 'Tamil'},
      ],
      primary_lang: '',
      secondary_langs: [],
      showReviewDialog: false,
      guide: [],
    }
  },
  computed: {
    headers() {
      return [
        { text: 'Username', value: 'username'},
        { text: 'Full Name', value: 'fullname'},
        { text: 'Assigned Region', value: 'region'},
      ]
    },

    ...mapGetters({
      user: 'Login/user',
    })
  },
  methods: {
    decrement() {
      this.rating--
    },
    increment() {
      this.rating++
    },
    selectGuide(guide) {
      this.$store.commit('Appointments/SET_GUIDE', guide);
      this.$store.dispatch('Snackbar/set_snackbar', {
        text: `You selected ${guide.guide_to_user.fname} as your guide`,
        color: 'green',
        rounded: true,
      })
      console.log('guide', guide);
    },
    showReviews(guide) {
      this.showReviewDialog = true;
      this.guide = guide;
    },
    calRating(arr) {
      let star_count = arr.star_1 + arr.star_2 + arr.star_3 + arr.star_4 + arr.star_5;
      let tot = Number((1 * arr.star_1 + 2 * arr.star_2 + 3 * arr.star_3 + 4 * arr.star_4 + 5 * arr.star_5) / star_count)
                  .toFixed(1);
      if (tot === 'NaN') {
        return 0;
      } else {
        return tot;
      }
    },
    followUser(id) {
      this.$store.dispatch('Follows/add_follow', {
        user_id: this.user.id,
        following_user_id: id,
      })
      /* console.log('id', id); */
    }
  },
  /* watch: {
    destinations: {
      immediate: true,
      handler() {
        this.getGuidesByRegion();
      }
    }
  } */
}
</script>

<style>

</style>