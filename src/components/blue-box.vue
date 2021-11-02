<template>
  <div class="blue-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "blue-box"
}
</script>

<style scoped>
.blue-box {
  padding: 1rem;
  color: white;
  background-color: var(--royal-blue);
  border-radius: 0.7rem;
  box-shadow: var(--light-shadow);
}

.blue-box h3 {
  color: white;
}

.blue-box th, td {
  border: 1px solid var(--light-gray);
}

</style>