'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.postTag = postTag;
exports.getTags = getTags;

var _tael = require('tael');

var _tag = require('../services/tag.service');

var TagService = _interopRequireWildcard(_tag);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function postTag(req, res) {
  return _promise2.default.resolve(req).then(function (data) {
    return TagService.postTag(data.body);
  }).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

function getTags(req, res) {
  return _promise2.default.resolve(req).then(function (data) {
    return TagService.getTags(data.params.userId);
  }).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}