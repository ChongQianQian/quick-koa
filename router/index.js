/*
 * @Author: 云乐
 * @Date: 2021-02-18 14:21:20
 * @LastEditTime: 2021-02-23 10:36:01
 * @LastEditors: 云乐
 * @Description: 路由文件:主要是因为路由地址比较多的情况下 单独保存比较方便
 */

//引入路由
const Router = require("koa-router");
const router = new Router();
const list  = require('./list')
const home = require('./home')
const login = require('./login')
const todolist = require('./todolist')


// router.use(list.routes(),list.allowedMethods())
//添加中间件 如果路由匹配了 /list 就进入list.js
router.use('/list',list.routes(),list.allowedMethods())
router.use('/home',home.routes(),home.allowedMethods())
router.use('/login',login.routes(),login.allowedMethods())
router.use('/todolist',todolist.routes(),login.allowedMethods())


router.redirect('/','/home')

//导出router给app.js用
module.exports = router