import Tag from '../models/tag.model';

export async function postTag(data) {
  let newTag;

  try {
    newTag = await Tag.create(data);
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve(newTag);
}

export async function getTags() {
  let tags;

  try {
    tags = await Tag.find();
  } catch(err) {
    return Promise.reject(err);
  }

  return Promise.resolve(tags);
}
