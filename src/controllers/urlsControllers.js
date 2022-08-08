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

export async function getUrlById(req, res) {
    res.send(res.locals.urlData).status(200);
}

export async function directShortUrlToUrl(req, res) {
    const shortUrl = req.params.shortUrl;

    try {
        await urlRepository.increaseVisitCount(shortUrl);

        res.redirect(res.locals.urlData.url);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function deleteUrl(req, res) {
    const urlId = req.params.id;

    try {
        await urlRepository.deleteUrlById(urlId);

        res.sendStatus(204);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function selectAllUsersUrls(req, res) {
    const userId = res.locals.userData.id;

    const { rows: dbUrls } = await urlRepository.selectAllUsersUrls(userId);

    res.send(dbUrls[0]).status(200);
}