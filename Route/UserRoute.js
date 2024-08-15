const express = require('express');
const mongoose = require('mongoose');
const router= express.Router();
const User = require('../Model/User');
const userController = require('../Controllers/UserControl');

router.get('/', userController.getUsers);
router.post('/', userController.addUser);

module.exports = router;