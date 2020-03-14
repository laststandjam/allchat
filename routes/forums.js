var express = require('express');
var router = express.Router();
const forumsCtrl = require('../controllers/forums')
const multer = require("multer")
const cb = require('cb')

const storage= multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/')
    },
    filename:function(req, file, cb){
        cb(null, new Date().toISOString()+ file.originalname)}
})
const upload = multer({storage: storage, limits:{
    fileSize: 1024 * 1024 *5
}})

/* GET home page. */
router.get('/',forumsCtrl.index )
router.get('/new', forumsCtrl.new)
router.post('/',upload.single('img'), forumsCtrl.create)
router.get('/:id', forumsCtrl.show)

router.delete("/:id", forumsCtrl.delete)
module.exports = router