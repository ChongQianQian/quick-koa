/*
 * @Author: 云乐
 * @Date: 2021-02-08 14:28:04
 * @LastEditTime: 2021-02-19 10:45:32
 * @LastEditors: 云乐
 * @Description: 整个项目的入口文件
 */
const Koa = require("koa2"); //构造函数
const app = new Koa(); //声明一个实例
const port = 7005;
const cors = require("koa2-cors");

const router = require("./router/index.js");

const static = require("koa-static");
const path = require("path");
/*
  router.routes()作用是：启动路由，
  router.allowedMethods()作用是：允许任何请求（get post delete put update ）
*/
app.use(static(path.join(__dirname + "/assets"))); //就可以识别到 http://localhost:7005/images/icon.jpeg 这个静态资源文件了
app.use(cors()); //后端允许跨域问题 一定要写在路由之前
app.use(router.routes(), router.allowedMethods());

app.listen(port, () => {
  console.log("服务已经启动了，地址为：", "http://localhost:" + port);
});
