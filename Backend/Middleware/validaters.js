import {body, validationResult} from 'express-validator';

export const validateSignUp = [
body('username').notEmpty()
.withMessage('Username is required')
.isLength({min:3})
.withMessage('Username must be at least three characters long'),

body('email')
.notEmpty()
.withMessage('Email is required'),

body('password')
.notEmpty()
.withMessage('Passwordis required')
.isLength({min:12}).withMessage('Username must be at least 12 characters long'),

(req,res,next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors: error.array})
    }
    next();
}
]

export const validateLogin = [
body('email')
.notEmpty().withMessage('Email is required')
.isEmail().withMessage('Enter a valid email'),

body('password')
.notEmpty()
.withMessage('Passwordis required')
.isLength({min:12}).withMessage('Username must be at least 12 characters long'),

(req,res,next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors: error.array})
    }
    next();
}
]
