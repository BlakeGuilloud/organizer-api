import { SendSuccess, SendError } from 'tael';

import * as ProjectService from '../services/project.service';

export function postProject(req, res) {
  return Promise.resolve(req)
    .then((data) => ProjectService.postProject(data.body))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function getProjects(req, res) {
  return Promise.resolve(req)
    .then((data) => ProjectService.getProjects(data.params.userId))
    .then(SendSuccess(res))
    .catch(SendError(res));
}