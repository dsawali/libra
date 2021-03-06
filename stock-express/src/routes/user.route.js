import express from 'express';

import userController from '../controllers/user.controller.js';

const router = express.Router();

router.post('/create', (req, res) => {
  userController.createUser(req, res);
});

router.get('/:id', (req, res) => {
  userController.getUser(req, res);
});

export default router;