/**
 * @param routers 初始数据，为数组格式，一般来说是个空数组
 * @param data 后端返回的路由列表数据
 */
import routesMap from "@/router/routesMap";
function formatRoutes(routers) {
  mapRouter(routers);
  routers.push({
    path: "*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue")
  });
  return routers;
}

function mapRouter(routers) {
  routers.forEach(element => {
    element.component = routesMap[element.component];
    if (element.children && element.children.length > 0) {
      mapRouter(element.children);
    }
  });
}

export { formatRoutes };
