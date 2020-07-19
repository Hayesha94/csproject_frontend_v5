<template>
  <v-app>
    
    <!-- Navigation bar -->
    <NavBar></NavBar>

    <!-- content goes here -->
    <v-main>

      <v-container class="grey lighten-3">

        <!-- carousel -->
        <v-row class="d-flex flex-column">
          <v-col>
            <h1 class="heading text-center text-uppercase">
              Welcome to Southern Sri Lanka, Pride of the nation
            </h1>
          </v-col>
          <v-col>
            <v-carousel
              cycle
            >
              <v-carousel-item
                v-for="(image, i) in images"
                :key="i"
                :src="image.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>

        <!-- tranding tourist zones -->
        <v-row>
          <v-col cols="12">
            Tranding Tourist Zones
          </v-col>
          <v-col class="d-flex">
            <v-col cols="4">
              <v-card>
                <v-card-title>
                  Galle
                  <v-img 
                    :src="require('@/assets/carouselImages/img1.jpg')"
                  >
                  </v-img>
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim architecto natus itaque voluptate id blanditiis sequi distinctio, minus nulla provident unde sit nemo quos similique ullam! Consectetur architecto impedit ad!
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card>
                <v-card-title>
                  Galle
                  <v-img 
                    :src="require('@/assets/carouselImages/img1.jpg')"
                  >
                  </v-img>
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim architecto natus itaque voluptate id blanditiis sequi distinctio, minus nulla provident unde sit nemo quos similique ullam! Consectetur architecto impedit ad!
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card>
                <v-card-title>
                  Galle
                  <v-img 
                    :src="require('@/assets/carouselImages/img1.jpg')"
                  >
                  </v-img>
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim architecto natus itaque voluptate id blanditiis sequi distinctio, minus nulla provident unde sit nemo quos similique ullam! Consectetur architecto impedit ad!
                </v-card-text>
              </v-card>
            </v-col>
          </v-col>
        </v-row>

        <!-- value propositions -->
        <v-row>
          <v-col>
            <h1 class="display-1 text-center pb-3">
              Easy to use, easy to find
            </h1>
            <v-row class="d-flex">
              <v-col class="d-flex flex-column align-center">
                <h1 class="title mb-3">plan your journey</h1>
                <v-img 
                  :src="require('@/assets/welcome_page/plan_journey.svg')"
                  width="200"
                >
                </v-img>
              </v-col>
              <v-col class="d-flex flex-column align-center">
                <h1 class="title mb-3">book your travel guide</h1>
                <v-img 
                  :src="require('@/assets/welcome_page/book_guide.svg')"
                  width="200"
                >
                </v-img>
              </v-col>
              <v-col class="d-flex flex-column align-center">
                <h1 class="title mb-3">get the experts opinion</h1>
                <v-img 
                  :src="require('@/assets/welcome_page/guide_opinion.svg')"
                  width="200"
                >
                </v-img>
              </v-col>
              <v-col class="d-flex flex-column align-center"> 
                <h1 class="title mb-3">enjoy the journey</h1>
                <v-img 
                  :src="require('@/assets/welcome_page/enjoy.svg')"
                  width="150"
                >
                </v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        
      </v-container>

    </v-main>

    <!-- Footer section -->
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "WelcomePage",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      images: [
        {
          src: require('@/assets/carouselImages/img1.jpg'),
        },
        {
          src: require('@/assets/carouselImages/img2.jpg'),
        },
        {
          src: require('@/assets/carouselImages/img3.jpg'),
        },
        {
          src: require('@/assets/carouselImages/img4.jpg'),
        },
      ],
    }
  }
}
</script>

<style>

</style>
