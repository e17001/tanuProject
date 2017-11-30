var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('uchiban', { title: '内番' ,contents: '今日の内番をランダムで決めます。'});
});

module.exports = router;
