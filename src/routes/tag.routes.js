import express from 'express';
import {
  postTag,
  getTags,
} from '../controllers/tag.controller';

const router = express.Router();

router.post('/', postTag);
router.get('/', getTags);

module.exports = router;