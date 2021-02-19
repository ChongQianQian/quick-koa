/*
 * @Author: 云乐
 * @Date: 2021-02-18 14:27:27
 * @LastEditTime: 2021-02-19 11:02:12
 * @LastEditors: 云乐
 * @Description: 专门用来存放列表的所有接口
 */
const Router = require("koa-router");
const home = new Router();
const { query } = require('../utils/db.js');

home.get("/", async (ctx) => {
  ctx.response.body = "这是首页";
});
home.get("/banner", async (ctx) => {
  //必须是异步执行 这样才可以确定执行的顺序
  let sqlData = await new Promise((resolve,reject)=>{
    //访问数据库中banner中的数据 返回给前端
    const sql  = `select * from banner`
    return query(sql,(err,data)=>{
      if(err) throw err;
      resolve(data)
    })
  })
  
  ctx.response.body = sqlData;
});

module.exports = home;
