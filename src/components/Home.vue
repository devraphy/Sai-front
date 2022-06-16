<template>
  <div class="container calendar-wrapper">
    <Calendar />
  </div>
</template>
<script>
import Calendar from './calendar/Calendar';

export default {
  components: {
    Calendar
  }
}
</script>

<style>
.calendar-wrapper {
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 10%;
}
</style>