/**
 * @param routes 初始数据，为数组格式，一般来说是个空数组
 * @param data 后端返回的路由列表数据
 */
import routesMap from "@/router/routesMap";
import { resetRouter } from "@/router";

// 处理addRoutes，每次添加路由前，先 重新初试化一个新的路由表，替换之前的路由表
function hanleRoutes(routes, vm) {
  const resRoutes = formatRoutes(routes);
  resetRouter();
  console.log("最终加载的routes", resRoutes);

  vm.$router.addRoutes(resRoutes);
}
// 将component映射上，并添加通配路由
function formatRoutes(routes) {
  mapRouter(routes);
  // routes.push({
  //   path: "*",
  //   redirect: "/404"
  // });
  return routes;
}
function mapRouter(routes) {
  routes.forEach(element => {
    if (!element.component) return;
    element.component = routesMap[element.component];
    if (element.children && element.children.length > 0) {
      mapRouter(element.children);
    }
  });
}

export { hanleRoutes };
