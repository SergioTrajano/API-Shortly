import { nanoid } from "nanoid";

import { urlRepository } from "../repositoryPatterns/urlsPatterns.js";

export async function urlShorten(req, res) {
    const shortenUrl = nanoid(6);

    try {
        await urlRepository.insertShortUrl(req.body.url, shortenUrl, res.locals.userData.id);

        res.send({shortenUrl}).status(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}