/*
 * @Author: 云乐
 * @Date: 2021-02-23 10:33:14
 * @LastEditTime: 2021-02-23 10:50:54
 * @LastEditors: 云乐
 * @Description: 学习redux结合实际接口
 */
const Router = require("koa-router");
const todolist = new Router();
const { query } = require("../utils/db.js");

todolist.get("/list", async (ctx) => {
  const data = await new Promise((resolve, reject) => {
    const sql = `select * from todolist`;
    return query(sql, (err, data) => {
      if (err) throw err;
      let listData = []
      data.forEach(item => {
        listData.push(item.listitem)
      });
      resolve(listData);
    });
  });
  // ctx.response.body = ["第1条待办", "第2条待办"];
  ctx.response.body = data;
});
module.exports = todolist;
