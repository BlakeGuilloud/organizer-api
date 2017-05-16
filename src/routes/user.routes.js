import express from 'express';
import {
  postUser,
  getUsers,
  getUser,
  patchUser,
} from '../controllers/user.controller';

const router = express.Router();

router.post('/', postUser);
router.get('/', getUsers);
router.get('/:id', getUser);
router.patch('/:id', patchUser);

module.exports = router;