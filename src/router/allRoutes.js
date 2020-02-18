const allRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/About.vue")
  },
  {
    path: "/page1",
    name: "Page1",
    component: () => import("@/views/Page1.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/404",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "404" */ "@/views/NotFound.vue")
  },
  {
    path: "*",
    redirect: "/404"
  }
];

export default allRoutes;
