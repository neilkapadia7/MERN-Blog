const express = require('express')
const router = express.Router()
const Validation = require('@validation/userValidation')
const Responder = require('@service/response')
const {addUser, login} = require('@controllers/Auth')
const Auth = require('@middleware/Auth')

router.post('/addUser',
    Auth,
    Validation.signUp(),
    Responder.validate.bind(Responder),
    addUser
);
router.post('/login',
    Validation.login(),
    Responder.validate.bind(Responder),
    login
);
// router.post('/login-otp',
//     Validation.OTPLogin(),
//     Responder.validate.bind(Responder),
// );

module.exports = router