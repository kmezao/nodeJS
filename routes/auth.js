const express = require("express");
const { matchedData } = require("express-validator");
const { tokenSign } = require("../utils/handleJwt");
const { encrypt, compare } = require("../utils/handlePassword");
const { usersModel } = require("../models")
const router = express.Router();
const {validatorRegister, validatorLogin} = require("../validators/auth");
const { loginCtrl } = require("../controllers/auth");

/**
 * Crear un registro
 */
//TODO http:localhost:3001/api/auth/login
//TODO http:localhost:3001/api/auth/register
router.post("/register", validatorRegister, loginCtrl);

module.exports = router;