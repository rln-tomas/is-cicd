var express = require('express');
var router = express.Router();
const ftest = require('../utils/firstTest')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/test', function(req, res){
  const r = ftest()
  res.send({
    test: r 
  })
})

module.exports = router;
