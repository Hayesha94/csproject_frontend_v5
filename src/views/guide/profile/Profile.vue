<template>
  <v-container>
    <v-row>
      <v-tabs class="d-flex justify-center">
        <v-tab :to="{name: 'guide-myprofile'}">My Profile </v-tab>
        <v-tab :to="{name: 'guide-image-gallery'}">Image Gallery </v-tab>
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