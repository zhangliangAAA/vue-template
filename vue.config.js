const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  outputDir: "dest",
  devServer: {
    open: true,
    port: 9000,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {
          "/api": ""
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  }
};
