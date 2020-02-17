export default {
  home: () => import("@/views/Home.vue"),
  about: () => import("@/views/About.vue"),
  page1: () => import("@/views/Page1.vue"),
  nestRouter: () => import("@/views/NestRouter"),
  child1: () => import("@/views/NestRouter/Child/Child1.vue")
};
