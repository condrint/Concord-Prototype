// ./express-server/routes/todo.server.route.js
const express = require('express');

//import controller file
const userController = require('../controllers/user_controller');
const messageController = require('../controllers/message_controller');

// get an instance of express router
const router = express();

router.post('/login', userController.loginUser);
router.post('/register', userController.registerUser);
router.post('/newFriend', userController.newFriend);
router.post('/getFriends', userController.getFriends);

router.post('/getMEssages', messageController.getMessages);

module.exports = router;

