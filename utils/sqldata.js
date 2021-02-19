/*
 * @Author: 云乐
 * @Date: 2021-02-18 16:13:21
 * @LastEditTime: 2021-02-18 16:28:11
 * @LastEditors: 云乐
 * @Description: 循环执行sql语句
 */

const { query } = require('./db');

 var arr = [
     {id:1,imgUrl:"/image/banner_1.png"},
     {id:2,imgUrl:"/image/banner_2.png"},
     {id:3,imgUrl:"/image/banner_3.png"}
 ]
 arr.map(val=>{
     const sql = `insert into banner values (${val.id},'${val.imgUrl}')`;
     query(sql,(err,data)=>{
         if(err) throw err;
         console.log(data)
     })
 })