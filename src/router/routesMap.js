export default {
  notFound: () => import("@/views/NotFound"),
  layout: () => import("@/views/Layout"),
  home: () => import("@/views/Home.vue"),
  about: () => import("@/views/About.vue"),
  page1: () => import("@/views/Page1.vue"),
  nestRouter: () => import("@/views/NestRouter"),
  child1: () => import("@/views/NestRouter/Child/Child1.vue"),
  child2: () => import("@/views/NestRouter/Child/Child2.vue"),
  grandchild: () => import("@/views/NestRouter/Child/Grandchild")
};
