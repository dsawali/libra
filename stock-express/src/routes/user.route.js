import express from 'express';

import User from '../models/user.model.js';

const router = express.Router();

router.post('/create', async (req, res) => {
  // TODO: add validation before user creation and more scenarios
  const newUserData = req.body;
  try {
    const response = await User.createNewUser(newUserData);
    res.send(response);
  } catch (e) {
    res.status();
    res.send(`Error creating User: ${e}`);
  }
});

router.get('/:id', async (req, res) => {
  let response;

  try {
    response = await User.getUser(req.params.id);
    if (!response) {
      return res.status(400).send(`Not Found`);
    }
  } catch (e) {
    return res.status(500).send(`Error getting user: ${e}`);
  }

  return res.status(200).send(response);
});

export default router;
