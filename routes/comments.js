var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments')

/* GET home page. */
router.post('/forums/:id/comments', commentsCtrl.create);


module.exports = router
