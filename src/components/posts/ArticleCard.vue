<template>
  <v-row class="my-0 py-0">
    <v-col cols="1"></v-col>
    <v-col>
      <v-card
        width="600"
      >
        <v-card-title>
          <div class="d-flex">
            <div>
              <v-avatar color="indigo" size="48" class="mr-5">
                MG
              </v-avatar>
            </div>
            <div>
              <div class="subtitle-2 blue--text">
                Ruchinara Samaranayake
              </div>
              <div class="caption blue-grey--text">Just Now</div>
            </div>
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text v-html="article.body">
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="1"></v-col>
  </v-row>
</template>

<script>
export default {
  props: [
    'article'
  ],
  data() {
    return {
      //
    }
  }
}
</script>

<style>

</style>