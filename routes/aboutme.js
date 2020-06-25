'use strict';
var express = require('express');
var router = express.Router();

/* Simranjot kaur  200396815  COMP2068. This page will tell about me and my study life. */
router.get('/', function (req, res) {
    res.render('aboutme', { title: 'About Me' });
});

module.exports = router;
