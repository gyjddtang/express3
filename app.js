/**
 * Created by Mili on 2017/6/16.
 */

var express = require('express');
let page1 = require('./routes/page1');
let page2 = require('./routes/page2');

let app = express();

// 应用级中间件, 绑定到 app 对象
// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
  console.log('Time: ', Date());
  next();
});

app.use('/page1', page1);
app.use('/page2', page2);

app.listen(3000, function () {
  console.log('Example app listening at http://localhost:3000');
});
