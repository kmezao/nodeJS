const express = require("express");
const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { usersModel } = require("../models")
const router = express.Router();
const {validatorRegister, validatorLogin} = require("../validators/auth");

/**
 * Crear un registro
 */
//TODO http:localhost:3001/api/auth/login
//TODO http:localhost:3001/api/auth/register
router.post("/register", validatorRegister, async (req, res) => {
    req = matchedData(req);
    const passwordHash = await encrypt(req.password);
    const body = {...req, password:passwordHash}
    const data = await usersModel.create(body)
    data.set('password', undefined, {strict:false})
    res.send({data})
});

module.exports = router;