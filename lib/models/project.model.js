'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var ProjectSchema = new Schema({
  name: String,
  description: String,
  tags: [{ type: String, ref: 'Tag' }]
});

module.exports = _mongoose2.default.model('Project', ProjectSchema);