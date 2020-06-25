'use strict';
var express = require('express');
var router = express.Router();

/* Simranjot kaur  200396815  COMP2068. This page will tell my contact details and ways to contact me. */
router.get('/', function (req, res) {
    res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
