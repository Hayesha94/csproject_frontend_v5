<template>
  <div>
    <!-- personal information component goes here -->
    <PersonalInfoContainer></PersonalInfoContainer>
  </div>
</template>

<script>
import PersonalInfoContainer from '@/components/dashboard/PersonalInfoContainer.vue';

export default {
  name: 'TPersonalInfo',
  components: {
    PersonalInfoContainer,
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