var express = require('express');
var router = express.Router();
const forumsCtrl = require('../controllers/forums')
const multer = require("multer")
const upload = multer({dest: 'uploads/'})

/* GET home page. */
router.get('/',forumsCtrl.index )
router.get('/new', forumsCtrl.new)
router.post('/',upload.single('img'), forumsCtrl.create)
router.get('/:id', forumsCtrl.show)

router.delete("/:id", forumsCtrl.delete)
module.exports = router