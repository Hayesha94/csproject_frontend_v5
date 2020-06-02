<template>
  <div>
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
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title 
                  v-text="item.text"
                >
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
  </div>
</template>

<script>
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
      //
    }
  }
}
</script>

<style>

</style>