import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "login",
    path: "/login",
    alias: ["/"],
    components: {
      default: () => import("@/views/LoginView.vue"),
    },
  },
  {
    path: "/",
    meta: {
      isRequiredLogin: true,
    },
    component: () => import("@/views/IndexView.vue"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        components: {
          default: () => import("@/views/DashboardView.vue"),
        },
      },
    ],
  },
];
export default routes;
