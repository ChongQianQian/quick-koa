/*
 * @Author: 云乐
 * @Date: 2021-02-18 14:27:27
 * @LastEditTime: 2021-02-18 14:37:23
 * @LastEditors: 云乐
 * @Description: 专门用来存放列表的所有接口
 */
const Router = require("koa-router");
const list = new Router();

list.get("/", async (ctx) => {
  console.log("调用");
  ctx.response.body = "这是列表页";
});

list.get("/baby", async (ctx) => {
  console.log("调用");
  ctx.response.body = "列表页--婴儿";
});

list.get("/play", async (ctx) => {
  console.log("调用");
  ctx.response.body = "列表页--玩具";
});

module.exports = list;
