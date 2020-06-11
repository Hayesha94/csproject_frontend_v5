<template>
  <v-row class="d-flex flex-column"> 
    <v-row>
      <v-col class="d-flex justify-center">
        Enter your details
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="8">
        <v-expansion-panels
          flat
          focusable
          hover
        >
          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:default="{  }">
                <v-row no-gutters class="d-flex align-baseline">
                  <v-col cols="4">
                    <h1 class="blue-grey--text text--darken-2 subtitle-1">Personal Information</h1>
                  </v-col>
                  <v-col
                    cols="8"
                    class="d-flex justify-end pr-5 text--secondary"
                  >
                  <v-chip color="success">
                    <v-avatar left>
                      <v-icon>mdi-checkbox-marked-circle</v-icon>
                    </v-avatar>
                    100%
                  </v-chip>
                  </v-col>
                </v-row>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col>
                  <div>
                    <div 
                      id="username"
                      v-if="user.username && isEditing(id)"
                    >
                      <v-text-field
                        label="Username"
                        readonly
                        :value="user.username"
                        prepend-icon="mdi-pencil"
                      />
                    </div>
                    <div v-else>
                      <v-text-field
                        label="Username"
                        v-model="Updateuser.username"
                      >
                      </v-text-field>
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="col-2">
                  <v-text-field
                    label="Title"
                  ></v-text-field>
                </v-col>
                <v-col class="col-5">
                  <v-text-field
                    label="First Name"
                  ></v-text-field>
                </v-col>
                <v-col class="col-5">
                  <v-text-field
                    label="Last Name"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-col>
                  <v-text-field
                    label="Date of Birth"
                  ></v-text-field>
                </v-col>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:default="{  }">
                <v-row no-gutters>
                  <v-col cols="4">Contact Info</v-col>
                  <v-col
                    cols="8"
                    class="text--secondary"
                  >
                  </v-col>
                </v-row>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Email"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Address"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Contact No"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:default="{  }">
                <v-row no-gutters>
                  <v-col cols="4">Location and Language</v-col>
                  <v-col
                    cols="8"
                    class="text--secondary"
                  >
                  </v-col>
                </v-row>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Country"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Primary Language"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Secondary Languages"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        currentEditElement: 'username',
        updateUser: {
          username: '',
        }
      }
    },
    computed: {
      ...mapGetters({
        user: 'Login/user',
      })
    },
    methods: {
      isEditing() {
        console.log(event.target);
        return true;
      }
    }
  }
</script>

<!-- 
<v-expansion-panels
    flat
    focusable
    hover
  >
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">Trip name</v-col>
            <v-col
              cols="8"
              class="text--secondary"
            >
              <v-fade-transition leave-absolute>
                <span
                  v-if="open"
                  key="0"
                >
                  Enter a name for the trip
                </span>
                <span
                  v-else
                  key="1"
                >
                  {{ trip.name }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-text-field
          v-model="trip.name"
          placeholder="Caribbean Cruise"
        ></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  --->