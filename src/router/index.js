import Vue from "vue";
import VueRouter from "vue-router";
import nameRoutes from "./nameRoutes"; //用于本地调试
// import allRoutes from "./allRoutes"; //用于本地调试
// import Home from "@/views/Home.vue";

/**
 * 解决 在当前页面中点击 还到当前页面的router-link 时 的报错: NavigationDuplicated
 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);
const initRoutes = [
  // {
  //   path: "/",
  //   redirect: "/home"
  // },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Login.vue")
  }
  // {
  //   path: "/404",
  //   name: "NotFound",
  //   component: () =>
  //     import(/* webpackChunkName: "404" */ "@/views/NotFound.vue")
  // }
];

const createRouter = () =>
  new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: initRoutes || nameRoutes
  });

const router = createRouter();

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
  // next();
  // }
  //路由拦截可根据项目返回的权限自行调整，这里只是做了一个简单的例子

  let isLogin = !!localStorage.getItem("token");
  if (to.path === "/login" || isLogin) {
    next();
  } else {
    next("/login");
  }
});

//重新实例化一个新的路由表，替换之前的路由表，然后将这个方法导出
//解决重复登录过程中的问题-Duplicate named routes definition
function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // the relevant part
}
export { router, resetRouter };
