<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="title grey--text">My Appointments</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-chip-group>
          <v-chip @click="showAll()">All</v-chip>
          <v-chip @click="showAccepted()">Accepted</v-chip>
          <v-chip @click="showDeclined()">Declined</v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :items="appointments"
          :headers="headers"
          show-expand
        >
          <template #item.appId="{item}">
            {{ item.id }}
          </template>

          <template #item.name="{item}">
            {{ item.name }}
          </template>

          <template #item.cus_name="{item}">
            <v-avatar 
              left size="32"
              class="mb-1 mr-2"
            >
              <v-img :src="item.tourist.tourist_to_user.dp_url"></v-img>
            </v-avatar>
            {{ item.tourist.tourist_to_user.fname }} {{ item.tourist.tourist_to_user.lname }}
          </template>

          <template #item.status="{item}">
            <v-icon
              v-if="item.conform === 1"
              color="success"
            >
              mdi-check
            </v-icon>
            <v-icon
              v-else-if="item.conform === 0"
              color="error"
            >
              mdi-close
            </v-icon>
            <h1 v-else class="warning--text subtitle-2">pending</h1>
          </template> -->

          <template #item.conform="{item}">
            <v-btn
              @click="acceptAppointment(item.id)"
              x-small
              class="success mx-1"
            >
              Accept
            </v-btn>
            <v-btn
              @click="declineAppointment(item.id)"
              x-small
              class="error mx-1"
            >
              Decline
            </v-btn>
          </template>

          
          <template #expanded-item="{headers, item}">
            <td :colspan="headers.length">
              <v-row>
                <v-col>
                  <p>{{ item }}</p>
                </v-col>
              </v-row>
            </td>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      //
    }
  },
  computed: {
    headers() {
      return [
        { text: 'Appointment Id', value: 'appId'},
        { text: 'Appointment Title', value: 'name'},
        { text: 'Tourist Name', value: 'cus_name'},
        /* { text: 'Start Data', value: 'str_date'},
        { text: 'End Data', value: 'end_date'}, */
        { text: 'status', value: 'status'},
        { text: '', value: 'conform'},
      ]
    },

    ...mapGetters({
      user_id: 'Login/userId',
      appointments: 'Appointments/getAppointments',
    })
  },
  methods: {
    acceptAppointment(app_id) {
      this.$store.dispatch('Appointments/update_appointment', {
        'appointment_id': app_id,
        'conform': 1,
      });
    },
    declineAppointment(app_id) {
      this.$store.dispatch('Appointments/update_appointment', {
        'appointment_id': app_id,
        'conform': 0,
      });
    },
    showAll() {
      console.log('all appointments');
      this.$store.dispatch('Appointments/get_appointments_by_id', {
        'user_id': this.user_id,
      })
    },
    showAccepted() {
      console.log('accepted appointments');
      this.$store.dispatch('Appointments/get_appointments_by_id', {
        'user_id': this.user_id,
        'filter': '1'
      })
    },
    showDeclined() {
      console.log('declined appointments');
      this.$store.dispatch('Appointments/get_appointments_by_id', {
        'user_id': this.user_id,
        'filter': '0'
      })
    },
  },
  mounted() {
    this.$store.dispatch('Appointments/get_appointments_by_id', {
      'user_id': this.user_id,
    })
  }
}
</script>

<style>

</style>