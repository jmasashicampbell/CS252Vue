<template>
  <blue-box>
    <h3>Week {{ weekNum }}</h3>
    <table>
      <tr v-for="day in schedule" :key="day.date">
        <td>{{ day.date }}</td>
        <td v-html="day.content"></td>
      </tr>
    </table>
  </blue-box>
</template>

<script>
import BlueBox from "./blue-box";
export default {
  name: "schedule-box",
  components: {BlueBox},
  props: ["weekNum", "schedule"]
}
</script>

<style scoped>

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 0.625rem;
}

</style>