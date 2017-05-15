import Project from '../models/project.model';

export async function postProject(data) {
  let newProject;

  try {
    newProject = await Project.create(data);
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve(newProject);
}

export async function getProjects(user) {
  let projects;

  try {
    projects = await Project.find();
  } catch(err) {
    return Promise.reject(err);
  }

  return Promise.resolve(projects);
}
