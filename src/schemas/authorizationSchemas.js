import joi from "joi";

export const signUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email({tlds: { allow: false}}).required(),
    password: joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,16}$/),
    confirmPassword: joi.string().valid(joi.ref('password')).required(),
});

export const signInSchema = joi.object({
    email: joi.string().email({tlds: { allow: false}}).required(),
    password: joi.string().required(),
});