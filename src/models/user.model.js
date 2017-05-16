import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  projects: [{ type: String, ref: 'Project' }],
});

module.exports = mongoose.model('User', UserSchema);