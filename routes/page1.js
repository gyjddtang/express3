/**
 * Created by Mili on 2017/6/16.
 */

var express = require('express');
let page1 = express.Router();

//路由级中间件, 绑定的对象为 express.Router()
// 挂载至 /page1 路由的中间件，任何指向 /page1 路由的请求都会执行它
// page1.use(function timeLog(req, res, next) {
//   console.log('Page1Time: ', Date.now());
//   next();
// });

page1.route('/')
.get(function (req, res) {
  res.send('Get page1')
});

page1.route('/detail/:id')
.get(function (req, res, next) {
  console.log('pageId', req.params.id);
  next();
}, function (req, res) {
  res.send('Get page1/detail')
});

module.exports = page1;