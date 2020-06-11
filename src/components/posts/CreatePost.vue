<template>
  <div>
    <v-stepper
      :value="step"
      alt-labels
    >

      <!-- stepper header -->
      <v-stepper-header>

        <!-- step 1 -->
        <v-stepper-step 
          step="1"
        >
          <small>Select Category</small>
        </v-stepper-step>

        <v-divider></v-divider>

        <!-- step 2 -->
        <v-stepper-step 
          step="2"
        >
          STEP 2
        </v-stepper-step>

        <v-divider></v-divider>

        <!-- step 3 -->
        <v-stepper-step 
          step="3"
        >
          STEP 3
        </v-stepper-step>

        <v-divider></v-divider>

        <!-- step 4 -->
        <v-stepper-step 
          step="4"
        >
          STEP 4
        </v-stepper-step>
        
      </v-stepper-header>

      <!-- stepper items -->
      <v-stepper-items>

        <!-- item 1 -->
        <v-stepper-content 
          step="1"
        >
          <v-card 
            flat
          >
            <v-card-title>Select a Post Category</v-card-title>
            <v-card-content>
              <v-radio-group class="ml-10">
                <v-radio label="radio 1" value="1"></v-radio>
                <v-radio label="radio 2" value="2"></v-radio>
                <v-radio label="radio 3" value="3"></v-radio>
              </v-radio-group>
            </v-card-content>
            <v-card-actions class="d-flex justify-center">
              <v-btn
                small
                class="primary"
                @click="back()"
              >
                Back
              </v-btn>
              <v-btn
                small
                class="primary"
                @click="next()"
              >
                Next
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content><!-- /item 1 -->

        <!-- item 2 -->
        <v-stepper-content
          step="2"
        >
          <v-card 
            flat
          >
            <v-card-title>Select Post Category</v-card-title>
            <v-card-content>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam maiores? Quis in expedita facilis temporibus saepe deleniti dolore ad aut sed tenetur, officiis magni. Accusantium, nihil quia. Porro, cumque?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam maiores? Quis in expedita facilis temporibus saepe deleniti dolore ad aut sed tenetur, officiis magni. Accusantium, nihil quia. Porro, cumque?</p>
            </v-card-content>
            <v-card-actions class="d-flex justify-center">
              <v-btn
                small
                class="primary"
                @click="back()"
              >
                Back
              </v-btn>
              <v-btn
                small
                class="primary"
                @click="next()"
              >
                Next
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content><!-- /item 2 -->

        <!-- item 3 -->
        <v-stepper-content 
          step="3"
        >
          <v-card 
            flat
          >
            <v-card-title>Select Post Category</v-card-title>
            <v-card-content>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam maiores? Quis in expedita facilis temporibus saepe deleniti dolore ad aut sed tenetur, officiis magni. Accusantium, nihil quia. Porro, cumque?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam maiores? Quis in expedita facilis temporibus saepe deleniti dolore ad aut sed tenetur, officiis magni. Accusantium, nihil quia. Porro, cumque?</p>
            </v-card-content>
            <v-card-actions class="d-flex justify-center">
              <v-btn
                small
                class="primary"
                @click="back()"
              >
                Back
              </v-btn>
              <v-btn
                small
                class="primary"
                @click="next()"
              >
                Next
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content><!-- /item 3 -->

        <!-- item 4 -->
        <v-stepper-content 
          step="4"
        >
          <v-card 
            flat
          >
            <v-card-title>Select Post Category</v-card-title>
            <v-card-content>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam maiores? Quis in expedita facilis temporibus saepe deleniti dolore ad aut sed tenetur, officiis magni. Accusantium, nihil quia. Porro, cumque?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam maiores? Quis in expedita facilis temporibus saepe deleniti dolore ad aut sed tenetur, officiis magni. Accusantium, nihil quia. Porro, cumque?</p>
            </v-card-content>
            <v-card-actions class="d-flex justify-center">
              <v-btn
                small
                class="primary"
                @click="back()"
              >
                Back
              </v-btn>
              <v-btn
                small
                class="primary"
                @click="next()"
              >
                Next
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content><!-- item 4 -->
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
export default {
  name: 'CreatePostComponent',
  data() {
    return {
      step: '1',
      high_step: '4',
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
    },
  }
}
</script>

<style>

</style>