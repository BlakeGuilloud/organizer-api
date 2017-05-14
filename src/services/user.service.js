import User from '../models/user.model';

export async function postUser(data) {
  let newUser;

  try {
    newUser = await User.create(data);
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve(newUser);
}

export async function getUsers() {
  let users;
  try {
    users = await User.find();
  } catch(err) {
    return Promise.reject(err);
  }

  return Promise.resolve(users);
}
