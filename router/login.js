/*
 * @Author: 云乐
 * @Date: 2021-02-19 11:32:49
 * @LastEditTime: 2021-02-19 14:09:00
 * @LastEditors: 云乐
 * @Description: 登陆注册接口
 */
const Router = require("koa-router");
const login = new Router();
const bodyparser = require("koa-bodyparser");
const jwt = require("jsonwebtoken");
const { query } = require("../utils/db");

login.use(bodyparser());

login.post("/register", async (ctx) => {
  let myaccount = ctx.request.body.account;
  let mypwd = ctx.request.body.pwd;

  let data = await new Promise((resolve, reject) => {
    const searchSql = `select * from users where account='${myaccount}'`;
    return query(searchSql, (err, data) => {
      if (err) throw err;
      resolve(data);
    });
  });

  //对查询的数据进行判断 如果长度小于0 则新增 否则校验mima
  if (data.length > 0) {
    if (data[0].pwd == mypwd) {
      ctx.body = {
        msg: "登陆成功",
        account: data[0].account,
        token: data[0].token,
      };
    } else {
      ctx.body = {
        msg: "账号或密码错误",
      };
    }
  } else {
    let mytoken = jwt.sign({ myaccount: myaccount, mypwd: mypwd }, "secret", {
      expiresIn: 3600,
    });
    let success = await new Promise((resolve, reject) => {
      const addSql = `insert into users (account,pwd,token) values ('${myaccount}','${mypwd}','${mytoken}')`;
      return query(addSql, (err, data) => {
        if (err) throw err;
        resolve({
          msg: "注册成功",
          account: myaccount,
          token: mytoken,
        });
      });
    });
    ctx.body = success;
  }
});

module.exports = login;
