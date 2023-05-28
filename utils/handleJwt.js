const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Debes de pasar el objeto del usuario
 * @param {*} user 
 */
const tokenSign = async (user) => {
    const sign = await jwt.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: "2h",
        }
    );

    return sign
};

/**
 * Debes pasar el  token de session JWT
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) => {
    try{
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch(e){
        return null
    }
}

module.exports = { tokenSign, verifyToken }