import express from 'express';
import UserController from '../controllers/user.controller.js';

const router = express.Router();

router.post('/create', UserController.createUser);

router.get('/:id', UserController.findUser);

router.post('/buy/:id', UserController.buyStock);

export default router;
