const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller')
const tweetsController = require('../controllers/tweets.controller')
const authMiddleware = require('../middlewares/auth.middleware')

module.exports = router;