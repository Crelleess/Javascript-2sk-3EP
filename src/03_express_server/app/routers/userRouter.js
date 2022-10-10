const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');

// EN URL
router.get('/signup', controller.signupForm);
router.post('/signup', controller.signup);
router.get('/signin', controller.signinForm);
router.post('/signin', controller.signin);
router.get('/signout', controller.signout);
router.get('/profile', controller.profile);

// CZ URL
router.get('/registrovat', controller.signupForm);
router.post('/registrovat', controller.signup);
router.get('/prihlasit', controller.signinForm);
router.post('/prihlasit', controller.signin);
router.get('/odhlasit', controller.signout);
router.get('/profil', controller.profile);

module.exports = router;
