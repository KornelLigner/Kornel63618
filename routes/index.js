var express = require('Express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '' });
});

module.exports = router;
