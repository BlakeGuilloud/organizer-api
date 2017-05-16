import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: String,
  description: String,
  tags: [{ type: String, ref: 'Tag' }]
});

module.exports = mongoose.model('Project', ProjectSchema);