var express = require('express');
var router = express.Router();

const fourmCtrl = require('../controllers/fourm')

/* GET home page. */
router.get('/',indexCtrl.index )
