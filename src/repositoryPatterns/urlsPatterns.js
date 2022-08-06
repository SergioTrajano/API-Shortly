import connection from "../database.js";

async function insertShortUrl(url, shortUrl, id) {
    return connection.query(`
        INSERT INTO urls
        (url, "shortUrl", "userId")
        VALUES ($1, $2, $3)
    `, [url, shortUrl, id]);
}

export const urlRepository = {
    insertShortUrl,
}