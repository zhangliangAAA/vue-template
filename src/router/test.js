const allRoutes = [
  {
    path: "/login",
    name: "Login",
    components: {
      out: () => import(/* webpackChunkName: "login" */ "@/views/Login.vue")
    }
  },
  {
    path: "/",
    name: "main",
    component: () => import(/* webpackChunkName: "main" */ "@/views/Layout"),
    children: [
      {
        path: "",
        redirect: "home"
      },
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home.vue")
      },
      {
        path: "about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/About.vue")
      },
      {
        path: "page1",
        name: "Page1",
        component: () => import("@/views/Page1.vue")
      },
      {
        path: "nestRouter",
        name: "NestRouter",
        component: () => import("@/views/NestRouter"),
        children: [
          {
            path: "child1",
            name: "Child1",
            component: () => import("@/views/NestRouter/Child/Child1.vue")
          },
          {
            path: "child2",
            name: "Child2",
            component: () => import("@/views/NestRouter/Child/Child2.vue")
          }
        ]
      },
      {
        path: "404",
        name: "NotFound",
        component: () =>
          import(/* webpackChunkName: "404" */ "@/views/NotFound.vue")
      },
      {
        path: "*",
        redirect: "/404"
      }
    ]
  }
];

export default allRoutes;
