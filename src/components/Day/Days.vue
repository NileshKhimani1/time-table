<template>
  <div class="day-container">
    <div class="head">
      <h2 class="day">Days</h2>
      <ul>
        <li v-for="day in days">
          <button
            :id="day"
            @click="$emit('setCurrentDay', day)"
            :class="{ isActive: currentDay === day }"
            class="days"
          >
            {{ day }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
li {
  list-style: none;
  margin: 5px;
  width: fit-content;
}
ul {
  margin: 0;
  padding: 0;
  width: 200px;
  max-width: 100%;
}
.day-container {
  width: 200px;
  flex-basis: auto;
  max-width: 100%;
}
.isActive {
  border: 2px solid white;
}
</style>
<script>
export default {
  emits: ["setCurrentDay"],
  props: ["days", "currentDay"],
};
</script>
