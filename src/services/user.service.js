import User from '../models/user.model';

export async function postUser(data) {
  let newUser;

  try {
    newUser = await User
      .create(data);
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve(newUser);
}

export async function getUsers() {
  let users;

  try {
    users = await User
      .find()
      .populate('projects');
  } catch(err) {
    return Promise.reject(err);
  }

  return Promise.resolve(users);
}

export async function getUser(userId) {
  let user;

  try {
    user = await User
      .findById(userId);
  } catch(err) {
    return Promise.reject(err);
  }

  return Promise.resolve(user);
}

export async function patchUser(userId, data) {
  let user;

  try {
    await User
      .findByIdAndUpdate(userId, data);

    user = await User
      .findById(userId);
  } catch(err) {
    return Promise.reject(err);
  }

  return Promise.resolve(user);
}
