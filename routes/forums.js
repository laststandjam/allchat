var express = require('express');
var router = express.Router();
const forumsCtrl = require('../controllers/forums')

/* GET home page. */
router.get('/',forumsCtrl.index )
router.get('/new', forumsCtrl.new)
router.post('/', forumsCtrl.create)
router.get('/:id', forumsCtrl.show)

router.delete("/:id", forumsCtrl.delete)
module.exports = router