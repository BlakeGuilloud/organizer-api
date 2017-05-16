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
    .then((data) => ProjectService.getProjects())
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function getProject(req, res) {
  return Promise.resolve(req)
    .then((data) => ProjectService.getProject(data.params.id))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function patchProject(req, res) {
  return Promise.resolve(req)
    .then((data) => ProjectService.patchProject(data.params.id, data.body))
    .then(SendSuccess(res))
    .catch(SendError(res));
}