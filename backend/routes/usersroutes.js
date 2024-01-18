const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/usersModels');

// instance of the router
const router = express.Router();

// Parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
router.use(bodyParser.json());

// get all users
router.get('/', (req, res) => {
  res.json({ msg: 'Get all users' });
});

// get a single user
router.get('/:id', (req, res) => {
  res.json({ msg: 'Get a single user' });
});

// post a new user
router.post('/', async (req, res) => {
  const { name, location, age, id } = req.body;

  try {
    const user = await User.create({ name, location, age, id });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// delete a user
router.delete('/:id', (req, res) => {
  res.json({ msg: 'Delete a user' });
});

// update a user
router.patch('/:id', (req, res) => {
  res.json({ msg: 'Update a user' });
});

// export router
module.exports = router;
