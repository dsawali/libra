import express from 'express';
import User from '../models/user.model.js';
import { STATUS_CODE } from '../constants/constants.js';

const router = express.Router();

router.post('/create', async (req, res) => {
  const userExists = await User.getUser(req.body.userId);
  if(userExists) {
    return res.status(STATUS_CODE.CONFLICT).send({err: 'Error: User already exists'});
  }

  const newUserData = req.body;
  try {
    const response = await User.createNewUser(newUserData);
    return res.status(STATUS_CODE.CREATED).send(response);
  } catch (e) {
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send(`Error creating User: ${e}`);
  }
});

router.get('/:id', async (req, res) => {
  let response;

  try {
    response = await User.getUser(req.params.id);
    if (!response) {
      return res.status(STATUS_CODE.BAD_REQUEST).send(`Not Found`);
    }
  } catch (e) {
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send(`Error getting user: ${e}`);
  }

  return res.status(STATUS_CODE.OKAY).send(response);
});

export default router;
