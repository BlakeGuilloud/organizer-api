'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchUser = exports.getUser = exports.getUsers = exports.postUser = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var postUser = exports.postUser = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {
    var newUser;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newUser = void 0;
            _context.prev = 1;
            _context.next = 4;
            return _user2.default.create(data);

          case 4:
            newUser = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);
            return _context.abrupt('return', _promise2.default.reject(_context.t0));

          case 10:
            return _context.abrupt('return', _promise2.default.resolve(newUser));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));

  return function postUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getUsers = exports.getUsers = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var users;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            users = void 0;
            _context2.prev = 1;
            _context2.next = 4;
            return _user2.default.find().populate('projects');

          case 4:
            users = _context2.sent;
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](1);
            return _context2.abrupt('return', _promise2.default.reject(_context2.t0));

          case 10:
            return _context2.abrupt('return', _promise2.default.resolve(users));

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 7]]);
  }));

  return function getUsers() {
    return _ref2.apply(this, arguments);
  };
}();

var getUser = exports.getUser = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(userId) {
    var user;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            user = void 0;
            _context3.prev = 1;
            _context3.next = 4;
            return _user2.default.findById(userId);

          case 4:
            user = _context3.sent;
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](1);
            return _context3.abrupt('return', _promise2.default.reject(_context3.t0));

          case 10:
            return _context3.abrupt('return', _promise2.default.resolve(user));

          case 11:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[1, 7]]);
  }));

  return function getUser(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var patchUser = exports.patchUser = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(userId, data) {
    var user;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            user = void 0;
            _context4.prev = 1;
            _context4.next = 4;
            return _user2.default.findByIdAndUpdate(userId, data);

          case 4:
            _context4.next = 6;
            return _user2.default.findById(userId);

          case 6:
            user = _context4.sent;
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4['catch'](1);
            return _context4.abrupt('return', _promise2.default.reject(_context4.t0));

          case 12:
            return _context4.abrupt('return', _promise2.default.resolve(user));

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[1, 9]]);
  }));

  return function patchUser(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }