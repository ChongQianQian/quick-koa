/*
 * @Author: 云乐
 * @Date: 2021-02-18 16:38:03
 * @LastEditTime: 2021-02-18 17:35:28
 * @LastEditors: 云乐
 * @Description: 读取文本内容，存储到数据库中
 */

const fs = require("fs");
const path = require("path");
const { query } = require("./db");

function readFileFn(arg) {
  return new Promise((resolve, rejects) => {
    let myPath = path.join(__dirname, `../assets/${arg}.txt`);
    fs.readFile(myPath, (err, data) => {
      if (err) throw err;
      //这里读取的文件是二进制文件流，所以需要转换为字符串
      resolve(data.toString());
    });
  });
}

let fn = async () => {
  //必须是异步执行 才可以全部存储到数据库中
  let vueTxt = await readFileFn("vue");
  let reactTxt = await readFileFn("react");
  let anguleTxt = await readFileFn("angule");

  let arr = [
    {
      id: 0,
      title: "0",
      author: "张三",
      date: "2021-02-18",
      imgUrl: "/images/dt.png",
      content: vueTxt,
    },
    {
      id: 1,
      title: "1",
      author: "张三",
      date: "2021-02-18",
      imgUrl: "/images/dt.png",
      content: reactTxt,
    },
    {
      id: 2,
      title: "2",
      author: "张三",
      date: "2021-02-18",
      imgUrl: "/images/dt.png",
      content: anguleTxt,
    },
  ];

  arr.map((val) => {
    const sql = `insert into article values (${val.id},'${val.title}','${val.author}','${val.date}',
    '${val.imgUrl}','${val.content}')`;
    query(sql, (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  });
};

fn();
