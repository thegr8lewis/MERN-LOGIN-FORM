const express = require('express');
const bodyParser = require('body-parser');
const {
    getUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/usersControleler')


// instance of the router
const router = express.Router();

// Parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
router.use(bodyParser.json());





// get all users
router.get('/',getUsers);

// get a single user
router.get('/:id', getUser);

// post a new user
router.post('/', createUser);

// delete a user
router.delete('/:id', deleteUser);

// update a user
router.patch('/:id', updateUser);

// export router
module.exports = router;
