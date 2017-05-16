'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTags = exports.postTag = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var postTag = exports.postTag = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {
    var newTag;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newTag = void 0;
            _context.prev = 1;
            _context.next = 4;
            return _tag2.default.create(data);

          case 4:
            newTag = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);
            return _context.abrupt('return', _promise2.default.reject(_context.t0));

          case 10:
            return _context.abrupt('return', _promise2.default.resolve(newTag));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));

  return function postTag(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getTags = exports.getTags = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var tags;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            tags = void 0;
            _context2.prev = 1;
            _context2.next = 4;
            return _tag2.default.find();

          case 4:
            tags = _context2.sent;
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](1);
            return _context2.abrupt('return', _promise2.default.reject(_context2.t0));

          case 10:
            return _context2.abrupt('return', _promise2.default.resolve(tags));

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 7]]);
  }));

  return function getTags() {
    return _ref2.apply(this, arguments);
  };
}();

var _tag = require('../models/tag.model');

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }