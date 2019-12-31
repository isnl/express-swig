const express = require('express')
// const ejs = require('ejs');
const swig = require('swig')
const appRouter = require('./router.js')
const app = express();
 
// 配置ejs模板渲染，用ejs.renderFile
// app.set('view cache', false);  
// app.set('views', './src');
// app.set('view engine', 'html'); 
// app.engine('html', ejs.renderFile); 
 
// 配置swig模板渲染 
app.set('view cache', false); // 设置页面不缓存
app.set('views', './src'); // 这个是设置渲染的目录，只要可以定位到目录就行
app.set('view engine', 'html'); // 设置渲染.html结尾的文件
app.engine('html', swig.renderFile); // 渲染html
 
 
// 代理静态资源到assets
app.use('/assets', express.static('src/assets'))
// 使用路由
app.use('/', appRouter)
 
// 创建服务
const server = app.listen(8090, 'localhost', function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('> 服务启动完成，访问地址： http://%s:%s/', host, port);
})