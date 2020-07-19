<template>
  <v-container>
    <v-row v-if="appointments.length > 0">
      <v-col
        v-for="appointment in appointments"
        :key="appointment"
      >
        <AppointmentCard :appointment="appointment"></AppointmentCard>
      </v-col>
    </v-row>
    <v-row v-else> No appointments found! </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import AppointmentCard from '@/components/AppointmentCard.vue';

export default {
  components: {
    AppointmentCard,
  },
  data() {
    return {
      //
    }
  },
  computed: {
    
    ...mapGetters({
      appointments: 'Appointments/getAppointments',
    })
  },
  mounted() {
    this.$store.dispatch('Appointments/get_appointments');
  }
}
</script>

<style>

</style>