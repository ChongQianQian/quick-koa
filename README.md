## 简单快速撸懂MySQL+Koa2
### 初始化一个项目
```bash
npm i koa2 -S

入口文件：
"start":"node app.js"

路由文件：
npm i koa-router
```

### 安装(自选)
Koa需要 node v7.6.0或更高版本来支持ES2015、异步方法
```bash
nvm install 7
npm i koa
node app.js
```

### mysql
```bash
yarn add mysql
```

### 允许跨域问题
```bash
npm i koa2-cors

app.use(cors())
app.use(router.routes(),router.allowedMethods())
```

### 读取静态资源文件
```bash
npm i koa-static
```

### 常见包介绍
```bash
//koa-bodyparser 用于获取post请求数据
npm i koa-bodyparser --save

//jsonwetoken 用于生成token
npm i jsonwebtoken --save

```
