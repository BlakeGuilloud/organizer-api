import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: String,
  user: { type: String, ref: 'User' },
});

module.exports = mongoose.model('Project', ProjectSchema);