/**
 * Created by Chandan on 6/21/2017.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../app.js'));
});

module.exports = router;

