/**
 * Created by Mili on 2017/6/16.
 */

var express = require('express');
let page2 = express.Router();

page2.route('/:id')
.get(function (req, res, next) {
  if(req.params.id != 1) {
    next('route');
  } else {
    res.send('Page2 Route1');
  }
});

page2.route('/:id')
.get(function (req, res, next) {
  res.send('Page2 Route2');
});

module.exports = page2;