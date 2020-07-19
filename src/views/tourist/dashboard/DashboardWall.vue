<template>
  <div>
    <v-row class="my-0 py-0">
      <v-col cols="8">
        <div v-for="post in posts" :key="post.id">
          <div v-if="post.postable_type === 'App\\Event'">
            <EventCard :event="post"></EventCard>
          </div>
          <div v-else-if="post.postable_type === 'App\\Article'">
            <ArticleCard :article="post"></ArticleCard>
          </div>
        </div>
      </v-col>
      <v-col cols="4">
        <v-card
          class="mt-9"
          v-if="follows.length > 0"
        >
          <v-card-title>
            My Friend List
          </v-card-title>
          <v-card-text>
            <v-list
             shaped
            >
              <v-list-item
                v-for="follow in follows"
                :key="follow"
              >
                <v-list-item-avatar>
                  <v-img :src="follow.dp_url"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    <div class="d-flex">
                      {{ follow.fname }} {{ follow.lname }}
                      <v-spacer></v-spacer>
                      <v-icon color="info">mdi-chat</v-icon>
                    </div>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import EventCard from '@/components/posts/EventCard.vue';
import ArticleCard from '@/components/posts/ArticleCard.vue';

export default {
  name: 'DashboardPage',
  components: {
    EventCard,
    ArticleCard,
  },
  data() {
    return {
      //
    }
  },
  mounted() {
    this.$store.dispatch('Posts/get_posts')
      .then( () => {
        this.$store.dispatch('Events/get_registered_events', {
          'tourist_id': this.user_id,
        });
    });

    if(this.follows.length === 0) {
      this.$store.dispatch('Follows/get_follows_by_id', {
        user_id: this.user_id,
      })
    }
  },
  computed: {
    //
    ...mapGetters({
      posts: 'Posts/posts',
      user_id: 'Login/userId',
      follows: 'Follows/follows'
    })
  },
}
</script>

<style>

</style>