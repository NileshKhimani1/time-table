<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Days from "../components/Day/Days.vue";
import TimeTable from "../components/TimeTable/TimeTable.vue";
import AddDataModal from "../components/TimeTable/AddDataModal.vue";
import { database } from "../firebase.js";
import { ref, set, get } from "firebase/database";

export default {
  props: ["username"],
  mounted() {
    let username = this.$route.params.user;
    this.db = ref(database, this.username);
    get(this.db)
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.setData(snapshot.val());
        }
        this.isLoading = false;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  data() {
    return {
      isLoading: true,
      currentDay: "Monday",
      isModalOpen: false,
      db: null,
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      timetable: {
        Tuesday: [],
        Monday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: [],
      },
    };
  },
  methods: {
    setData(newData) {
      this.timetable = newData;
    },
    setCurrentDay(day) {
      this.currentDay = day;
    },
    openEntryModal() {
      this.isModalOpen = true;
    },
    closeEntryModal() {
      this.isModalOpen = false;
    },
    addEntry(data) {
      this.timetable[this.currentDay].push(data);
      set(this.db, this.timetable);
      this.isModalOpen = false;
      console.log(this.timetable[this.currentDay]);
    },
    editData(index, newData) {
      this.timetable[this.currentDay][index] = newData;
      set(this.db, this.timetable);
    },
  },
  components: {
    Days,
    TimeTable,
    AddDataModal,
  },
};
</script>

<template>
  <div class="parent" v-if="!isLoading">
    <days
      :days="days"
      @setCurrentDay="setCurrentDay"
      :currentDay="currentDay"
    />
    <time-table
      :timeTable="timetable[currentDay]"
      @add-entry="openEntryModal"
      @edit-data-entry="editData"
    />
  </div>
  <add-data-modal
    v-if="isModalOpen"
    @add-data-entry="addEntry"
    @close-modal="closeEntryModal"
  />
</template>

<style scoped>
.parent {
  display: flex;
  justify-content: space-between;
}
body {
  background-color: white;
}

button:focus {
  outline: none;
}

.days {
  font-size: 30px;
  width: 100%;
  border: none;
  display: block;
  height: 100px;
  color: black;
  border-bottom: 1px solid gray;
  padding: 15px 32px;
  background: transparent;
  cursor: pointer;
  float: left;
}

#days {
  height: 600px;
  position: fixed;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.sub {
  font-size: 15px;
  border: none;
  display: block;
  height: fit-content;
  color: black;
  position: relative;

  padding: 15px 32px;
  background: transparent;
  cursor: pointer;
}

.day {
  background-color: black;
  font-size: 45px;
  text-align: center;
  height: 20px;
  color: blanchedalmond;
  height: 70px;
}

#Imagev {
  float: right;
  height: 600px;
  width: 900px;
}

#pannel {
  float: right;
}

.head {
  background-color: black;
  text-align: center;
}

@media only screen and (max-width: 1200px) {
  #days {
    height: 500px;
  }
}

@media only screen and (max-width: 767px) {
  #days {
    display: inline;
    width: 100%;
    font-size: 7px;

    position: relative;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .days {
    font-size: 5px;
    width: 100%;
    height: 10px;
    background-color: black;
    color: blanchedalmond;
  }

  #pannel {
    display: inline-block;
    display: inline;
    width: 100%;
    font-size: 10px;
    position: relative;
  }

  .day {
    font-size: 20px;
    background-color: black;
    height: 30px;
    width: 100%;
  }

  #Imagev {
    float: right;
    height: 100%;
    width: 100%;
  }

  .head {
    background-color: black;
  }
}
</style>
