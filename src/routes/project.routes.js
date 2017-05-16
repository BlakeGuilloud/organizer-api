import express from 'express';
import {
  postProject,
  getProjects,
  getProject,
  patchProject,
} from '../controllers/project.controller';

const router = express.Router();

router.post('/', postProject);
router.get('/', getProjects);
router.get('/:id', getProject);
router.patch('/:id', patchProject);

module.exports = router;