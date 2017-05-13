import { SendSucces, SendError } from 'tael';

import * as UserService from '../services/user.service';

export function postUser(req, res) {
  return Promise.resolve(req)
    .then((data) => UserService.postUser(data))
    .then(SendSucces(res))
    .catch(SendError(res));
}