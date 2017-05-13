'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postUser = postUser;

var _tael = require('tael');

var _user = require('../services/user.service');

var UserService = _interopRequireWildcard(_user);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function postUser(req, res) {
  return Promise.resolve(req).then(function (data) {
    return UserService.postUser(data);
  }).then((0, _tael.SendSucces)(res)).catch((0, _tael.SendError)(res));
}