<template>
  <div>
    <v-list
      dense
    >
      <v-list-item>
        <v-badge
          left
          icon="mdi-camera"
        >
          <v-avatar
            size="100"
          >
            <v-img
              src="https://i.pravatar.cc/300"
              alt=""
            >
            </v-img>
          </v-avatar>
        </v-badge>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title grey--text text--darken-3" v-if="fullName"> {{ fullName }}</v-list-item-title>
            <div class="blue-grey--text text--lighten-2" v-if="userName">@{{ userName }}</div>
          <v-list-item-subtitle>
            <div class="mt-2">
              <div class="d-flex pb-1">
                <h1 class="subtitle-2 mr-2"><span class="font-weight-bold">2.3k</span> following</h1>
                <h1 class="subtitle-2"><span class="font-weight-bold">2.3k</span> followers</h1>
              </div>
            <v-divider></v-divider>
            </div>

          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProfileCard',
  data() {
    return {
      //
    }
  },
  computed: {
    ...mapGetters({
      fullName : 'Login/fullName',
      userName: 'Login/userName',
    })
  },
  methods: {
    showHi() {
      console.log('pressed hi');
    }
  }
}
</script>

<style>

</style>