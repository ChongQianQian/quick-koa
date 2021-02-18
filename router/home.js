/*
 * @Author: 云乐
 * @Date: 2021-02-18 14:27:27
 * @LastEditTime: 2021-02-18 14:40:00
 * @LastEditors: 云乐
 * @Description: 专门用来存放列表的所有接口
 */
const Router = require("koa-router");
const home = new Router();

home.get("/", async (ctx) => {
  ctx.response.body = "这是首页";
});
home.get("/banner", async (ctx) => {
  ctx.response.body = "首页--轮播图";
});

module.exports = home;
