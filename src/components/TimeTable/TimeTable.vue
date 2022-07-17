<template>
  <div class="time-table">
    <ul class="time-table">
      <li v-for="(entry, index) in timeTable">
        <time-table-element
          :subjectCode="entry.code"
          :subjectName="entry.name"
          :venue="entry.venue"
          :time="entry.time"
          @edit-modal-open="(newData) => openEditModal(index, newData)"
        />
      </li>
    </ul>
    <button @click="$emit('add-entry')">Add New Entry</button>
  </div>
  <edit-data-modal
    v-if="isEditModalOpen"
    @close-modal="closeEditModal"
    :currentData="timeTable[currentDataIndex]"
    @edit-data-entry="
      (newData) => {
        $emit('edit-data-entry', currentDataIndex, newData);
        closeEditModal();
      }
    "
  ></edit-data-modal>
</template>
<style scoped>
li {
  list-style: none;
}
.time-table {
  flex-grow: 4;
  width: 100%;
  padding: 2rem;
}
</style>
<script>
import TimeTableElement from "./TimeTableElement.vue";
import EditDataModal from "./EditDataModal.vue";
export default {
  props: ["timeTable"],
  emits: ["add-entry", "edit-data-entry"],
  methods: {
    openEditModal(index) {
      this.isEditModalOpen = true;
      this.currentDataIndex = index;
    },
    closeEditModal() {
      this.isEditModalOpen = false;
    },
  },
  data() {
    return {
      isEditModalOpen: false,
      currentDataIndex: 0,
    };
  },
  components: { TimeTableElement, EditDataModal },
};
</script>
