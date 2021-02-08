/*
 * @Author: 云乐
 * @Date: 2021-02-08 14:41:09
 * @LastEditTime: 2021-02-08 14:48:18
 * @LastEditors: 云乐
 * @Description: 用来说明洋葱模型执行方式
 */
const Koa = require("koa2"); //构造函数
const port  = 7005
const app = new Koa(); //声明一个实例

//调用中间件
app.use(async (ctx,next) => {
    console.log(1)
    await next()
    console.log(1)
});
app.use(async (ctx,next) => {
    console.log(2)
    await next()
    console.log(2)
});
app.use(async (ctx,next) => {
    console.log(3)
});
//输出结果：1 2 3 2 1

app.listen(port,()=>{
    console.log("服务已经启动了，地址为：","http://localhost:"+port)
})

