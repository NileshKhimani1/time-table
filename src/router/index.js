import { createWebHashHistory, createRouter } from "vue-router";
import Login from "../pages/Login.vue";
import TimeTable from "../pages/TimeTable.vue";
const routes = [
  { path: "/", component: Login },
  {
    path: "/time-table/:username",
    component: TimeTable,
    meta: {
      authRequired: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
