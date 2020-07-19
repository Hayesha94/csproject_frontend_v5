<template>
  <v-row>
    <v-col cols="1"></v-col>
    <v-col>
      <v-card
        width="600"
        class="ma-0 pa-0"
      >
        <v-card-subtitle 
          class="pb-0"
        >
          <div class="d-flex justify-space-between">
            <div>
              <div class="d-flex">
                <div>
                <v-avatar size="48" class="mr-2">
                  <v-img
                    :src='event.post_to_guide.guide_to_user.dp_url'
                  ></v-img>
                </v-avatar>
              </div>
              <div>
                <div class="subtitle-2 blue--text">
                  {{ event.post_to_guide.guide_to_user.fname }} {{ event.post_to_guide.guide_to_user.lname }}
                </div>
                  <span class="caption blue-grey--text">Just Now</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div class='d-flex' v-if="isRegistered(event.id)">
                  <v-btn
                    color="success"
                    text
                    slot
                    rounded
                  >
                    <v-icon small>mdi-check</v-icon>
                    <span>Registered</span>
                  </v-btn>
                </div>
                <div class='d-flex' v-else>
                  <v-btn
                    color="error"
                    text
                    slot
                    rounded
                    @click="register(event.id)"
                  >
                    <v-icon>mdi-plus</v-icon>
                    <span>Register</span>
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
        </v-card-subtitle>
        <v-card-title class="d-flex pt-0">
          <span class="title-2 grey--text">{{ event.title }}</span>
        </v-card-title>
        <v-card-text>
          <v-img
            src="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg"
          >
          </v-img>
          {{ event.postable.description }}
        </v-card-text>
        <!-- <v-divider></v-divider>
        <v-card-actions class="d-flex justify-space-around">
            <div class="d-flex align-baseline">
              <span class="caption blue-grey--text">Like</span>
              <v-btn
                icon
                color="blue"
                @click="like(event.id)"
              >
                <v-icon>mdi-thumb-up</v-icon>
              </v-btn>
            </div>
            <div class="d-flex align-center">
              <span class="caption blue-grey--text">Comments</span>
              <v-btn
                icon
                color="primary"
              >
                <v-icon>mdi-comment-text</v-icon>
              </v-btn>
            </div>
            <div class="d-flex align-center">
              <span class="caption blue-grey--text">Share</span>
              <v-btn
                icon
                color="black"
              >
                <v-icon>mdi-share</v-icon>
              </v-btn>
            </div>
        </v-card-actions> -->
        <!-- <v-divider></v-divider>
        <v-card-subtitle class="pb-0">
          <div class="d-flex justify-space-between align-baseline">
            <v-avatar 
              color="red" 
              size="48" 
              class="mr-5"
            >
              <span class="white--text text--lighten-3">RU</span>
            </v-avatar>
            <v-text-field
              placeholder="Enter a comment..."
              rounded
              dense
              clearable
              filled
            ></v-text-field>
          </div>
        </v-card-subtitle> -->
      </v-card>
    </v-col>
    <v-col cols="1"></v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: [
    'event'
  ],
  data() {
    return {
      //
    }
  },
  computed: {
    ...mapGetters({
      user_id: 'Login/userId',
      isRegistered: 'Events/isRegistered',
    })
  },
  methods: {
    register(id) {
      this.$store.dispatch('Events/register_to_event', {
        'event_id': id,
        'user_id': this.user_id,
      });
    }
  }
}
</script>

<style>

</style>