const express = require('express');
const router = express.Router();

//查询所有信息
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
