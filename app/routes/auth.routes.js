// routes/auth.routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/signup', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/profile/:userId', userController.getUserProfile);
router.put('/profile/:userId', userController.updateUserProfile);

module.exports = router;
