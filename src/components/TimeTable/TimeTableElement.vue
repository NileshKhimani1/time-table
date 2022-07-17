<template>
  <li class="time-table-entry">
    <span class="s-time">{{ time }}</span>
    <span class="s-code">{{ subjectCode }}</span
    ><span class="s-name">{{ subjectName }}</span
    ><a :href="venue" class="venue">{{ venue }}</a>
    <button class="edit-button" @click="$emit('edit-modal-open', index)">
      Edit Data
    </button>
  </li>
</template>
<style scoped>
.edit-button {
  margin-left: auto;
  padding: 12px;
  align-self: center;
  width: fit-content;
}
li {
  padding: 0;
}
.time-table-entry {
  display: flex;
  border: 2px solid #777;
  display: flex;
  justify-content: left;
  width: 100%;
}
.s-code {
  border-right: 1px solid #777;
  display: block;
  padding: 10px;
}
.s-name,
.s-time {
  border-right: 1px solid #777;
  display: block;
  padding: 10px;
}
.venue {
  padding: 10px;
}
</style>
<script>
export default {
  props: ["subjectName", "subjectCode", "venue", "index", "time"],
  emits: ["edit-modal-open"],
};
</script>
