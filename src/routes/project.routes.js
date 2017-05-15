import express from 'express';
import {
  postProject,
  getProjects,
} from '../controllers/project.controller';

const router = express.Router();

router.post('/', postProject);
router.get('/:userId', getProjects);

module.exports = router;