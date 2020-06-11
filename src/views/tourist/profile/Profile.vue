<template>
  <v-container>
    <v-row>
      <v-tabs>
        <v-tab :to="{name: 'tourist-personal-info'}">Personal Info</v-tab>
        <v-tab :to="{name: 'tourist-image-gallery'}">Image Gallery</v-tab>
        <v-tab :to="{name: 'tourist-personal-info'}">My Reviews</v-tab>
        <v-tab :to="{name: 'tourist-personal-info'}">Guides</v-tab>
      </v-tabs>
    </v-row>
    <v-row>
      <v-col>
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>