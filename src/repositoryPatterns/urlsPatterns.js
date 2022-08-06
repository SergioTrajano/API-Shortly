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

async function selectUserById(userId) {
    return connection.query(`
        SELECT * 
        FROM users
        WHERE id=$1
    `, [userId]);
}

async function selectAllUsersUrls(userId) {
    return connection.query(`
        SELECT 
            users.id as id,
            users.name as name,
            SUM("visitCount") as "visitCount",
            json_agg(json_build_object(
                'id', urls.id, 
				'url', urls.url, 
				'shortUrl', urls."shortUrl", 
				'visitCount', urls."visitCount")) as "shortenedUrls"
        FROM users
        JOIN urls
        ON users.id = urls."userId"
        WHERE users.id = $1
        GROUP BY users.id
    `, [userId]);
}

export const urlRepository = {
    insertShortUrl,
    selectUrlById,
    selectUrlByShortUrl,
    increaseVisitCount,
    selectUrlByIdFromUserId,
    deleteUrlById,
    selectUserById,
    selectAllUsersUrls,
}