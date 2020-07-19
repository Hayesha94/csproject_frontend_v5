<template>
  <!-- <v-container>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-chip-group>
          <v-chip @click="events = true">Events</v-chip>
          <v-chip @click="events = false">Articles</v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
    <v-row v-if="events" class="d-flex flex-column"> 
      <v-row
        class="d-flex flex-column"
        v-for="post in posts"
        :key="post"
      >
        <v-col
          cols="10"
          v-if="post.postable_type === 'App\\Event'"
        >
          <v-card>
            <v-card-title class="d-flex justify-space-between">
              <v-col>
                {{ post.postable.title }} 
                  <br> 
                <span class="subtitle-2">start: {{post.postable.start}} end: {{post.postable.end}} </span>
              </v-col>
            </v-card-title>
            <v-card-text>
              <v-col class="my-0 py-0">
                <v-icon class="mb2">mdi-account-group</v-icon>
                # of Participants (2/{{post.postable.participants}})
                <v-chip-group>
                  <v-chip
                  pill
                  v-on="on"
                  class="ml-3"
                  v-for="i in 5" :key="i"
                >
                  <v-avatar left>
                    <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                  </v-avatar>
                  Ruchinara
                </v-chip>
                </v-chip-group>
              </v-col>
              <v-col>
                <v-chip-group>
                  <v-chip>{{ post.postable.location }}</v-chip>
                  <v-chip>{{ post.postable.activity }}</v-chip>
                </v-chip-group>
              </v-col>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
    <v-row 
      v-if="!events"
      class="d-flex flex-column"
    >
      <v-row
        v-for="post in posts"
        :key="post"
      >
        <v-col 
          v-if="post.postable_type === 'App\\Article'"
          cols="10"
        >
          <v-card>
            <v-card-title>{{ post.postable.title }}</v-card-title>
            <v-card-text v-html="post.postable.body">
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
  </v-container> -->
  <v-container>
    <v-row>
      <v-col>
        <h1 class="title grey--text">My Posts</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-chip-group>
          <v-chip>All</v-chip>
          <v-chip>Accepted</v-chip>
          <v-chip>Declined</v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :items="posts"
          :headers="headers"
          show-expand
        >
          <template #item.Id="{item}">
            {{ item.id }}
          </template>

          <template #item.type="{item}">
            <v-chip
              small
              class="primary"
              v-if="item.postable_type == 'App\\Event'"
            >
              event
            </v-chip>
            <v-chip
              small
              class="primary"
              v-else
            >
              article
            </v-chip>
          </template>

          <template #item.body="{item}">
            {{ item }}
          </template>

        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ViewPosts',
  data() {
    return {
      events: true,
    }
  },
  computed: {
    headers() {
      return [
        { text: 'Post Id', value: 'Id'},
        { text: '', value: 'type'},
        { text: 'body', value: 'body'},
      ]
      
    },
    ...mapGetters({
      userId: 'Login/userId',
      posts: 'Posts/posts',
    })
  },
  mounted() {
    this.$store.dispatch('Posts/get_posts_by_id', {
      'user_id': this.userId,
    });
  }
}
</script>

<style>

</style>