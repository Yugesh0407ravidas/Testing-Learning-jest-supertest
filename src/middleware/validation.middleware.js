const {body, validationResult } = require("express-validator");


async function validate(req, res, next){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }
    next()
}


const registerUserValidationRules = [
    body("username")
    .isString()
    .withMessage("Username must be a string")
    .isLength({min:3, max:20})
    .withMessage("username must be between 3 and 20 characters"),

    body("email")
    .isEmail()
    .withMessage("Invalid email address"),

    body("password")
    .isLength({min:6})
    .withMessage("Password must be at least 6 character long"), 

  validate
]

module.exports = {registerUserValidationRules}