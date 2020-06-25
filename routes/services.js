'use strict';
var express = require('express');
var router = express.Router();

/* Simranjot kaur  200396815  COMP2068. This page will tell about my career history and job life in canada. */
router.get('/', function (req, res) {
    res.render('services', { title: 'Experiences' });
});

module.exports = router;
