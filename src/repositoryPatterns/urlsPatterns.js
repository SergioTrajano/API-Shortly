import connection from "../database.js";

async function insertShortUrl(url, shortUrl, id) {
    return connection.query(`
        INSERT INTO urls
        (url, "shortUrl", "userId")
        VALUES ($1, $2, $3)
    `, [url, shortUrl, id]);
}

async function selectUrlById(id) {
    return connection.query(`
        SELECT 
            id,
            url,
            "shortUrl"
        FROM urls
        WHERE id=$1
    `, [id]);
}

async function selectUrlByShortUrl(shortUrl) {
    return connection.query(`
        SELECT url
        FROM urls
        WHERE "shortUrl"=$1
    `, [shortUrl]);
}

async function increaseVisitCount(shortUrl) {
    return connection.query(`
        UPDATE urls 
        SET "visitCount" = "visitCount" + 1 
        WHERE "shortUrl"=$1
    `, [shortUrl]);
}

export const urlRepository = {
    insertShortUrl,
    selectUrlById,
    selectUrlByShortUrl,
    increaseVisitCount,
}