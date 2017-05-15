'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.postProject = postProject;
exports.getProjects = getProjects;

var _tael = require('tael');

var _project = require('../services/project.service');

var ProjectService = _interopRequireWildcard(_project);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function postProject(req, res) {
  return _promise2.default.resolve(req).then(function (data) {
    return ProjectService.postProject(data.body);
  }).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

function getProjects(req, res) {
  return _promise2.default.resolve(req).then(function (data) {
    return ProjectService.getProjects(data.params.userId);
  }).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}