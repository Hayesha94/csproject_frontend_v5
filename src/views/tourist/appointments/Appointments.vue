<template>
  <v-container>
    <v-row>
      <v-tabs>
        <v-tab :to="{name: 'tourist-view-appointments'}">My Appointments</v-tab>
        <v-tab :to="{name: 'tourist-create-appointment'}">Make Appointment</v-tab>
      </v-tabs>
    </v-row>
    <v-row>
      <v-col>
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>