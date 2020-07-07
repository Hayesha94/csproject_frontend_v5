<template>
  <v-app>
    <v-main>
      <v-container>
        <v-form>
          <v-card width="500" class="mx-auto mt-10">
            <v-card-title class="justify-center">
              <h1 class=' my-2 grey--text text--darken-4'>Registration</h1>
            </v-card-title>
            <v-card-text class="pb-0 ">
              <v-text-field label="Username"
                prepend-icon="mdi-account-circle"
                v-model="credentials.username"
                :rules="usernameRules"
              />
              <v-text-field label="Email"
                type="email"
                prepend-icon="mdi-email"
                v-model="credentials.email"
                :rules="emailRules"
                required
              />
              <v-text-field label="Password" 
                prepend-icon="mdi-lock"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                v-model="credentials.password"
                :rules="passwordRules"
                @click:append="showPassword = !showPassword"
                required
              />
              <v-text-field label="Conform Password"
                :type="showPassword ? 'text' : 'password'"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                v-model="credentials.password_confirmation"
                :rules="conformPasswordRules"
                @click:append="showPassword = !showPassword"
                required
              />
              <v-card-subtitle class="justify-center">
                Before proceeed please select the user type
                <v-radio-group v-model="credentials.role">
                  <v-radio label="Tourist" default value="tourist"></v-radio>
                  <v-radio label="Travel Guide" value="guide"></v-radio>
                </v-radio-group>
              </v-card-subtitle>
              <v-divider></v-divider>
              <v-checkbox label="I accept the Terms of Use & Privacy Policy"
                v-model="credentials.termsAndPrivacy"
                :rules="termsAndPrivacyRules"
              />
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn 
                class="primary"
                @click.prevent="register()"
              >
                Register
              </v-btn>
            </v-card-actions>
            <div class="d-flex justify-center pb-5">
              <router-link link='false' :to="{ name: 'login-page' }">
                Already have an account? Login
              </router-link>
            </div>
          </v-card>
        </v-form>
      </v-container>
    </v-main>
  </v-app>

</template>

<script>
export default {
  data() {
    return {
      credentials: {
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        termsAndPrivacy: false,
        role: 'tourist'
      },
      usernameRules: [
        v => !!v || 'Username Required',
        v => v.length <= 25 || 'Username must not exceed maximum of 25 characters'
      ],
      emailRules: [
        v => !!v || "Email Required",
      ],
      showPassword: false,
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must have minimum of 6 characters',
        v => v.length <= 32 || 'Password must have maximum of 32 characters',
      ],
      conformPasswordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must have minimum of 6 characters',
        v => v.length <= 32 || 'Password must have maximum of 32 characters',
      ],
      termsAndPrivacyRules: [
        v => !!v || 'Accept Terms and Privacy Policy to Register'
      ],
    }
  },
  methods: {
    register() {
      this.$store.dispatch('Register/register_user', this.credentials)
        .then( response => {
          if (response === true) {
            this.$router.push({ name: 'login-page'})
          }
      });
    }
  }
}
</script>

<style>

</style>