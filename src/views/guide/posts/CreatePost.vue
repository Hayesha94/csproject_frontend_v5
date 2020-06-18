<template>
  <div>
    <v-row>
      <v-col>
        <CreatePost></CreatePost>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
</template>

<script>
import CreatePost from '@/components/posts/CreatePost.vue';

export default {
  name: 'CreatePostPage',
  components: {
    CreatePost,
  }
}
</script>

<style>

</style>