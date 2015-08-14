'use strict';

var express = require('express');
var controller = require('./delegate.controller');

var router = express.Router();

router.get('/:state', controller.index);

module.exports = router;