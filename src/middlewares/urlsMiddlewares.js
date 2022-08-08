import { shortUrlSchema } from "../schemas/urlsSchema.js";
import { urlRepository } from "../repositoryPatterns/urlsPatterns.js";

export async function validateShortenBody(req, res, next) {
    const url = req.body;
    const { error } = shortUrlSchema.validate(url);

    if (error) {
        res.status(422).send(error.details.map( c => c.message));
        return;
    }

    next();
}

export async function verifyUrlId(req, res, next) {
    const id = parseInt(req.params.id);
    const { rows: dbUrls } = await urlRepository.selectUrlById(id);

    if (!dbUrls.length) {
        res.sendStatus(404);
        return;
    }

    res.locals.urlData = dbUrls[0];

    next();
}

export async function verifyShortUrl(req, res, next) {
    const shortUrl = req.params.shortUrl;

    const { rows: dbUrls } = await urlRepository.selectUrlByShortUrl(shortUrl);

    if (!dbUrls.length) {
        res.sendStatus(404);
        return;
    }

    res.locals.urlData = dbUrls[0];

    next();
}

export async function verifyIfUrlBelongsToUser(req, res, next) {
    const userId = res.locals.userData.id;
    const urlId = req.params.id;

    const { rows: dbUrls } = await urlRepository.selectUrlByIdFromUserId(userId, urlId);

    if (!dbUrls.length) {
        res.sendStatus(401);
        return;
    }

    next();
}

export async function verifyUserExistence(req, res, next) {
    const userId = res.locals.userData.id;
    const { rows: dbUsers } = await urlRepository.selectUserById(userId);

    if (!dbUsers.length) {
        res.sendStatus(404);
        return;
    }

    next();
}