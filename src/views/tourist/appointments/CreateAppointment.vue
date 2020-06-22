<template>
  <v-row>
    <v-col>
      <v-stepper 
        alt-labels
        :value="step"
      >
        <v-stepper-header>
          <v-stepper-step 
            step="1"
            :complete="step > 1"
          >
            First Step
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step 
            step="2"
          >
            Conform
          </v-stepper-step>

        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content 
            step="1"
            :complete="step > 1"
          >
            <v-card flat>
              <v-card-text>
                <div>
                  <p class="title">Tell us about your plans</p>
                  
                </div>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-between">
                <v-btn 
                  text
                  @click="back()"
                  color="error"
                >
                  <v-icon>mdi-arrow-left</v-icon>
                  Back
                </v-btn>

                <v-btn 
                  text
                  color="success"
                >
                  Save Progress
                </v-btn>

                <v-btn 
                  text
                  @click="next()"
                  color="error"
                >
                  Next
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>

          <v-stepper-content 
            step="2"
            :complete="step > 2"
          >
            <v-card>
              <v-card-text>
                first step message body
              </v-card-text>
              <v-card-actions class="d-flex justify-space-between">
                <v-btn 
                  text
                  @click="back()"
                  color="error"
                >
                  <v-icon>mdi-arrow-left</v-icon>
                  Back
                </v-btn>

                <v-btn 
                  text
                  color="success"
                >
                  Save Progress
                </v-btn>

                <v-btn 
                  text
                  @click="next()"
                  color="error"
                >
                  Next
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      step: '1',
      low_step: '1',
      high_step: '2',
    }
  },
  methods: {
    next() {
      if (this.step < this.high_step) {
        this.step++;
      }
    },
    back() {
      if (this.step > 1) {
        this.step--
      }
    }
  },
}
</script>

<style>

</style>

data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    }),