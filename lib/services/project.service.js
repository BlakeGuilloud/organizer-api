'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchProject = exports.getProject = exports.getProjects = exports.postProject = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var postProject = exports.postProject = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {
    var newProject;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newProject = void 0;
            _context.prev = 1;
            _context.next = 4;
            return _project2.default.create(data);

          case 4:
            newProject = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);
            return _context.abrupt('return', _promise2.default.reject(_context.t0));

          case 10:
            return _context.abrupt('return', _promise2.default.resolve(newProject));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));

  return function postProject(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getProjects = exports.getProjects = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var projects;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            projects = void 0;
            _context2.prev = 1;
            _context2.next = 4;
            return _project2.default.find().populate('tags');

          case 4:
            projects = _context2.sent;
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](1);
            return _context2.abrupt('return', _promise2.default.reject(_context2.t0));

          case 10:
            return _context2.abrupt('return', _promise2.default.resolve(projects));

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 7]]);
  }));

  return function getProjects() {
    return _ref2.apply(this, arguments);
  };
}();

var getProject = exports.getProject = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(projectId) {
    var project;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            project = void 0;
            _context3.prev = 1;
            _context3.next = 4;
            return _project2.default.findById(projectId);

          case 4:
            project = _context3.sent;
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](1);
            return _context3.abrupt('return', _project2.default.reject(_context3.t0));

          case 10:
            return _context3.abrupt('return', _promise2.default.resolve(project));

          case 11:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[1, 7]]);
  }));

  return function getProject(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var patchProject = exports.patchProject = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(projectId, data) {
    var project;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            project = void 0;
            _context4.prev = 1;
            _context4.next = 4;
            return _project2.default.findByIdAndUpdate(projectId, data);

          case 4:
            _context4.next = 6;
            return _project2.default.findById(projectId);

          case 6:
            project = _context4.sent;
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4['catch'](1);
            return _context4.abrupt('return', _promise2.default.reject(_context4.t0));

          case 12:
            return _context4.abrupt('return', _promise2.default.resolve(project));

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[1, 9]]);
  }));

  return function patchProject(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

var _project = require('../models/project.model');

var _project2 = _interopRequireDefault(_project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }