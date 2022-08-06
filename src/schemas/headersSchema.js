import joi from "joi";

export const headersSchema = joi.object({
    Authorization: joi.string().required().pattern(/Bearer /)
});