'use strict';
var express = require('express');
var router = express.Router();

/* Simranjot kaur  200396815  COMP2068. This page will tell about the labs and assignments websites made by me in class and for fun. */
router.get('/', function (req, res) {
    res.render('projects', { title: 'Projects' });
});

module.exports = router;
