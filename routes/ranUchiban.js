var express = require('express');
var router = express.Router();

const data = ['加州清光','山姥切国広','歌仙兼定','陸奥守吉行','蜂須賀虎徹'];

/* GET home page. */
router.get('/', function(req, res, next) {
  let len = data.length;
  let n = Math.floor(Math.random() * len);

  res.json(data[n]);
});

module.exports = router;
