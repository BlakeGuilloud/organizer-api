import { SendSuccess, SendError } from 'tael';

import * as TagService from '../services/tag.service';

export function postTag(req, res) {
  return Promise.resolve(req)
    .then((data) => TagService.postTag(data.body))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function getTags(req, res) {
  return Promise.resolve(req)
    .then((data) => TagService.getTags(data.params.userId))
    .then(SendSuccess(res))
    .catch(SendError(res));
}