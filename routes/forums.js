var express = require('express');
var router = express.Router();
const forumsCtrl = require('../controllers/forums')

/* GET home page. */
router.get('/',forumsCtrl.index )

module.exports = router