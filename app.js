/*
 * @Author: 云乐
 * @Date: 2021-02-08 14:28:04
 * @LastEditTime: 2021-02-08 14:59:15
 * @LastEditors: 云乐
 * @Description: 整个项目的入口文件
 */
const Koa = require("koa2"); //构造函数
const port = 7005;
const app = new Koa(); //声明一个实例

//引入路由
const Router = require("koa-router");
const router = new Router();

router.get("/", async (ctx) => {
  ctx.response.body = "这是首页";
});
router.get("/list", async (ctx) => {
  ctx.response.body = "这是列表页";
});

/*
    router.routes()作用是：启动路由，
    router.allowedMethods()作用是：允许任何请求（get post delete put update ）
*/
app.use(router.routes(), router.allowedMethods());

//调用中间件
// app.use(async (ctx) => {
//   //返回数据给页面
//   // ctx.response.body = "首页"
// });

app.listen(port, () => {
  console.log("服务已经启动了，地址为：", "http://localhost:" + port);
});
