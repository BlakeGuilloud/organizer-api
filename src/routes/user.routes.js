import express from 'express';
import {
  postUser
} from '../controllers/user.controller';

const router = express.Router();

router.post('/', postUser);

module.exports = router;