# Vue 模板项目
## 插件
vue + vue-router + vuex + axios + sass 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## 主要功能
### 1、模拟接口
在vue.config.js
```js
 devServer: {
    before(app) {
      app.get("/api/login", function(req, res) {
        const { username, passwd } = req.query;
        res.status(200).json({
          code: 1,
          routes: [
            {
              path: "/about",
              name: "About",
              component: "about"
            }
          ]
        });
      });
    }
  }
```
### 2、addRoutes 动态添加路由
模拟从接口获取router信息，使用 addRoutes 控制路由权限
注意：通过遍历接拼接的 route.component = import(`@/${route.component}.vue`); 不能正常加载  问题？
解决方案为：先建routesMap文件，在axios.then()中映射出对应的component即可
优化：将addRoutes封装成一个一个方法 eg： utils/permission.js

### 3、数据持久化 localStorage
刷新页面后，由于重新生成一个Vue，导致之前的数据丢失，因此需要将数据本地持久化。
1. 方案一 （本地存储，可篡改）
登录成功后将用户信息和权限树authTree 存储在localStorage中，刷新页面时可以在main.js实例化之前检测到本地路由就直接合并路由，也可以在App.vue的created()中检测到本地路由,使用addRoutes后续添加
