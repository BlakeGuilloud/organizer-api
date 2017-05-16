'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _project = require('../controllers/project.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _project.postProject);
router.get('/', _project.getProjects);
router.get('/:id', _project.getProject);
router.patch('/:id', _project.patchProject);

module.exports = router;