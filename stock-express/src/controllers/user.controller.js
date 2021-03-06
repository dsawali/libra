import User from '../models/user.model.js';

const controller = {};

controller.createUser = async (req, res) => {
  try {
    const users = await User.createUser(req.body);
    console.log(req.body);
    res.send(users);
  } catch (e) {
    res.send(`Error creating User: ${e}`);
  }
}

controller.getUser = async (req, res) => {
  try {
    const user = await User.getUser(req.params.id);
    console.log(req.params.id);
    console.log(user)
    res.send(user);
  } catch (e) {
    res.send(`Error getting user: ${e}`);
  }
}

export default controller;