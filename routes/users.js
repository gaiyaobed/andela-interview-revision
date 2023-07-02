const User = require('../models/user')
const express = require('express');
const {createUser, loginUser} = require("../controllers/userController");
const router = express.Router();

/* GET users listing. */
router.post('/', createUser);
router.post('/login', loginUser);


module.exports = router;
