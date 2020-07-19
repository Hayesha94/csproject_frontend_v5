<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
            class="mt-4 mx-auto"
            max-width="400"
            :to="link"
          >
            <v-sheet
              class="v-sheet--offset mx-auto pa-5"
              :color="color"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <slot name="header">This is the header</slot>
            </v-sheet>
            <v-card-title>
              <slot name="body">
                This is the body
              </slot>
            </v-card-title>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'StatCardComponent.vue',
  props: {
    link: {
      default: '',
    },
    color: {
      default: 'primary',
    }
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