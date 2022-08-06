import { shortUrlSchema } from "../schemas/urlsSchema.js";

export async function validateShortenBody(req, res, next) {
    const url = req.body;
    const { error } = shortUrlSchema.validate(url);

    if (error) {
        res.sendStatus(422);
        return;
    }

    next();
}