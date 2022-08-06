import { shortUrlSchema } from "../schemas/urlsSchema.js";
import { urlRepository } from "../repositoryPatterns/urlsPatterns.js";

export async function validateShortenBody(req, res, next) {
    const url = req.body;
    const { error } = shortUrlSchema.validate(url);

    if (error) {
        res.sendStatus(422);
        return;
    }

    next();
}

export async function verifyUrlId(req, res, next) {
    const id = parseInt(req.params.id);
    const { rows: dbUrls } = await urlRepository.verifyUrlId(id);

    if (!dbUrls.length) {
        res.sendStatus(404);
        return;
    }

    res.locals.urlData = dbUrls[0];

    next();
}