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

async function selectUrlByIdFromUserId(userId, urlId) {
    return connection.query(`
        SELECT *
        FROM urls
        WHERE 
            urls.id=$1 AND
            urls."userId"=$2
    `, [urlId, userId]);
}

async function deleteUrlById(urlId) {
    return connection.query(`
        DELETE FROM urls
        WHERE id=$1
    `, [urlId]);
}

export const urlRepository = {
    insertShortUrl,
    selectUrlById,
    selectUrlByShortUrl,
    increaseVisitCount,
    selectUrlByIdFromUserId,
    deleteUrlById,
}