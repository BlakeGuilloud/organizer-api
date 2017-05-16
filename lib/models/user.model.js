'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  projects: [{ type: String, ref: 'Project' }]
});

module.exports = _mongoose2.default.model('User', UserSchema);