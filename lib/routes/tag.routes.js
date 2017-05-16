'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _tag = require('../controllers/tag.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _tag.postTag);
router.get('/', _tag.getTags);

module.exports = router;