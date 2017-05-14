import express from 'express';
import {
  postUser,
  getUsers,
} from '../controllers/user.controller';

const router = express.Router();

router.post('/', postUser);
router.get('/', getUsers);

module.exports = router;