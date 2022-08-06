import joi from "joi";

export const shortUrlSchema = joi.object({
    url: joi.string().uri().required(),
});