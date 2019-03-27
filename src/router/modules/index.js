export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue")
  }
];
