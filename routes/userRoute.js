const express = require('express');
const { loginControllers, registerControllers } = require('../controllers/userControllers');

// Router Object : To preform routing
const router = express.Router();

// Routers :

// POST || LOGIN USER
router.post('/login', loginControllers);

// POST || REGISTER USER
router.post('/register', registerControllers);

// Export:
module.exports = router;