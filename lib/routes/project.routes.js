'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _project = require('../controllers/project.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _project.postProject);
router.get('/:userId', _project.getProjects);

module.exports = router;