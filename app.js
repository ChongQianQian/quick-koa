/*
 * @Author: 云乐
 * @Date: 2021-02-08 14:28:04
 * @LastEditTime: 2021-02-18 14:23:16
 * @LastEditors: 云乐
 * @Description: 整个项目的入口文件
 */
const Koa = require("koa2"); //构造函数
const app = new Koa(); //声明一个实例
const port = 7005;

const router = require('./router/index.js')

/*
  router.routes()作用是：启动路由，
  router.allowedMethods()作用是：允许任何请求（get post delete put update ）
*/
app.use(router.routes(), router.allowedMethods());

app.listen(port, () => {
  console.log("服务已经启动了，地址为：", "http://localhost:" + port);
});
