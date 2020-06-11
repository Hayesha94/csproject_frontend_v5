<template>
  <div class="d-flex">
    <v-col class="col-3">
      <v-card
        class="mx-auto my-6"
        flat
      >
        <ProfileCard></ProfileCard>
        
        <v-list rounded>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item, i) in navLinks"
              :key="i"
              :to="item.url"
              exact
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title >
                  <v-badge
                    v-if="item.text === 'Notifications'"
                    :content="messages"
                    color="green"
                  >
                    {{ item.text }}
                  </v-badge>
                  <div v-else>
                    {{ item.text }}
                  </div>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
    <v-col class="col-9">
      <router-view></router-view>
    </v-col>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProfileCard from '@/components/ProfileCard.vue';

export default {
  name: 'LeftNavBar',
  props: [
    'navLinks',
  ],
  components: {
    ProfileCard,
  },
  data() {
    return {
      messages: 'hello',
      show: false,
    }
  },
  computed: {
    ...mapGetters({
      user: 'Login/user',
    })
  }
}
</script>

<style>

</style>