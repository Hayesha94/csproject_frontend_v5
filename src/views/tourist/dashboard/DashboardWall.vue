<template>
  <div>
    <v-row class="my-0 py-0">
      <v-col cols="9">
        <div v-for="post in posts" :key="post.id">
          <div v-if="post.postable_type === 'App\\Event'">
            <EventCard :event="post.postable"></EventCard>
          </div>
          <div v-else-if="post.postable_type === 'App\\Article'">
            <ArticleCard :article="post.postable"></ArticleCard>
          </div>
        </div>
      </v-col>
      <v-col cols="3"></v-col>
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
  },
  computed: {
    //
    ...mapGetters({
      posts: 'Posts/posts',
      user_id: 'Login/userId',
    })
  },
}
</script>

<style>

</style>