'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.postUser = postUser;
exports.getUsers = getUsers;

var _tael = require('tael');

var _user = require('../services/user.service');

var UserService = _interopRequireWildcard(_user);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function postUser(req, res) {
  return _promise2.default.resolve(req).then(function (data) {
    return UserService.postUser(data.body);
  }).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

function getUsers(req, res) {
  return _promise2.default.resolve(req).then(UserService.getUsers).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}