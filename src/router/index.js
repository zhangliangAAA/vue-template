import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const initRoutes = [
  {
    path: "/",
    redirect: "/login"
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  // },
  // {
  //   path: "/page1",
  //   name: "Page1",
  //   component: () => import(/* webpackChunkName: "about" */ "@/views/Page1.vue")
  // },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Login.vue")
  }
  // {
  //   path: "*",
  //   name: "NotFound",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "@/views/NotFound.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: initRoutes
});

/**
 * 路由权限方案设计1
 */
// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  //from: 从哪个路由来
  //to: 去哪个路由
  //next：是一个方法，使用路由拦截，必须在后面添加next()，否则路由无法跳转

  //假设我们从后台获取的权限为：
  // const list = ["About"];
  //如果没有匹配到，证明没有权限
  // if (list.includes(to.name)) {
  //   next("/login");
  //   //或者执行其他操作
  // } else {
  next();
  // }
  //路由拦截可根据项目返回的权限自行调整，这里只是做了一个简单的例子
});

export default router;
