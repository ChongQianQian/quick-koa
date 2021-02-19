/*
 * @Author: 云乐
 * @Date: 2021-02-18 14:51:47
 * @LastEditTime: 2021-02-18 16:25:14
 * @LastEditors: 云乐
 * @Description: 连接mysql
 */
let mysql = require("mysql");

//连接池
var pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  database: "koa_demo",
  user: "root",
  password: "Q729874453",
});

//对数据库进行增删该茶操作的基础
function query(sql, callback) {
  pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, rows) {
      callback(err, rows);
      connection.release(); //中断连接
    });
  });
}
module.exports = {
  query,
};
