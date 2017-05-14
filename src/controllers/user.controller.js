import { SendSuccess, SendError } from 'tael';

import * as UserService from '../services/user.service';

export function postUser(req, res) {
  return Promise.resolve(req)
    .then((data) => UserService.postUser(data.body))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function getUsers(req, res) {
  return Promise.resolve(req)
    .then(UserService.getUsers)
    .then(SendSuccess(res))
    .catch(SendError(res));
}