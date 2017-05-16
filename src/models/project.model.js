import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: String,
  description: String,
  userId: { type: String, ref: 'User' },
  tags: [{ type: String, ref: 'Tag' }]
});

module.exports = mongoose.model('Project', ProjectSchema);