const nameRoutes = [
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
        redirect: "/home"
      },
      {
        path: "/home",
        name: "Home",
        meta: {
          title: "首页",
          visible: true
        },
        component: () => import("@/views/Home.vue")
      },
      {
        path: "/about",
        name: "About",
        meta: {
          title: "关于",
          visible: true
        },
        component: () => import("@/views/About.vue")
      },
      {
        path: "/page1",
        name: "Page1",
        meta: {
          title: "页面1",
          visible: true
        },
        component: () => import("@/views/Page1.vue")
      },
      {
        path: "/nestRouter",
        name: "NestRouter",
        meta: {
          title: "嵌套路由",
          visible: true
        },
        component: () => import("@/views/NestRouter"),
        children: [
          {
            path: "/nestRouter/child1",
            name: "Child1",
            meta: {
              title: "嵌套子路由1",
              visible: true
            },
            component: () => import("@/views/NestRouter/Child/Child1.vue")
          },
          {
            path: "/nestRouter/child2",
            name: "Child2",
            meta: {
              title: "嵌套子路由2",
              visible: true
            },
            component: () => import("@/views/NestRouter/Child/Child2.vue"),
            children: [
              {
                path: "/nestRouter/child2/grandchild",
                name: "Grandchild",
                meta: {
                  title: "嵌套孙路由",
                  visible: true
                },
                component: () => import("@/views/NestRouter/Child/Grandchild")
              }
            ]
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

export default nameRoutes;
