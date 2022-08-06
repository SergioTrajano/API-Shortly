import connection from "../database.js";

async function insertShortUrl(url, shortUrl, id) {
    return connection.query(`
        INSERT INTO urls
        (url, "shortUrl", "userId")
        VALUES ($1, $2, $3)
    `, [url, shortUrl, id]);
}

async function verifyUrlId(id) {
    return connection.query(`
        SELECT 
            id,
            url,
            "shortUrl"
        FROM urls
        WHERE id=$1
    `, [id]);
}

export const urlRepository = {
    insertShortUrl,
    verifyUrlId,
}