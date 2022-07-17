<template>
  <div class="backdrop" @click="$emit('close-modal')"></div>
  <div class="modal">
    <h3 class="modal-title">Add New Course</h3>
    <label for="code">Course Code : </label>
    <input
      type="text"
      v-model="code"
      id="code"
      placeholder="Enter the course code"
    />
    <label for="name">Course Name : </label>
    <input
      type="text"
      v-model="name"
      id="name"
      placeholder="Enter the course name"
    />
    <label for="link">Link : </label>
    <input type="text" v-model="link" id="link" placeholder="Enter the link" />
    <label for="time">Pick the Time : </label>
    <vue-time-picker v-model="time"></vue-time-picker>
    <input
      type="submit"
      @click.prevent="
        $emit('add-data-entry', { code, name, venue: link, time })
      "
      value="Add Data"
    />
  </div>
</template>
<style>
.backdrop {
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.modal-title {
  border-bottom: 2px solid #888;
  padding: 10px;
}
.modal {
  border-radius: 1rem;
  background-color: black;
  z-index: 35;
  color: white;
  width: 600px;
  max-width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
}
input {
  display: block;
  border: 2px solid #555;
  background-color: #222;
  border-radius: 0.25rem;
  margin: auto;
  margin-bottom: 10px;
  padding: 0.2rem;
}
label {
  display: block;
  margin: auto;
  margin-bottom: 10px;
}
</style>
<script>
import VueTimePicker from "vue3-timepicker/src/VueTimepicker.vue";
export default {
  emits: ["close-modal", "add-data-entry"],
  components: { VueTimePicker },
  data() {
    return {
      code: "",
      name: "",
      link: "",
      time: "",
    };
  },
};
</script>
