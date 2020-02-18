// const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, dir);
// }
module.exports = {
  outputDir: "dest",
  devServer: {
    open: true,
    port: 9000,
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     pathRewrite: {
    //       "/api": ""
    //     }
    //   }
    // },
    before(app) {
      app.get("/api/login", function(req, res) {
        const { username, passwd } = req.query;
        if (username == "router1" && passwd) {
          res.status(200).json({
            code: 1,
            token: username + (new Date().getTime() + 1000 * 60),
            userId: "1",
            userName: username,
            routes: [
              {
                path: "/about",
                name: "About",
                component: "about"
              }
            ]
          });
        } else if (username && passwd) {
          res.json({
            code: 1,
            token: username + (new Date().getTime() + 1000 * 60),
            userId: "all",
            userName: username,
            routes: [
              {
                path: "/home",
                name: "Home",
                component: "home"
              },
              {
                path: "/about",
                name: "About",
                component: "about"
              },
              {
                path: "/page1",
                name: "Page1",
                component: "page1"
              },
              {
                path: "/nestRouter",
                name: "NestRouter",
                component: "nestRouter",
                children: [
                  {
                    path: "/nestRouter/child1",
                    name: "Child1",
                    component: "child1"
                  }
                ]
              }
            ]
          });
        } else {
          res.status(401).json({
            code: 0,
            message: "用户名或者密码错误"
          });
        }
      });
    }
  }
  // chainWebpack: config => {
  //   // config.resolve.alias.set("@", resolve("src"));
  // }
};
