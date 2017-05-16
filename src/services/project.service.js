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

export async function getProjects() {
  let projects;

  try {
    projects = await Project.find().populate('tags');
  } catch(err) {
    return Promise.reject(err);
  }

  return Promise.resolve(projects);
}

export async function getProject(projectId) {
  let project;

  try {
    project = await Project.findById(projectId);
  } catch(err) {
    return Project.reject(err);
  }

  return Promise.resolve(project);
}

export async function patchProject(projectId, data) {
  let project;

  try {
    await Project.findByIdAndUpdate(projectId, data);
    
    project = await Project.findById(projectId);
  } catch(err) {
    return Promise.reject(err);
  }

  return Promise.resolve(project);
}
