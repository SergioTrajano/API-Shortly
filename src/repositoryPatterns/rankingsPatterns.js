import connection from "../database.js";

async function selectTop10Users() {
    return connection.query(`
        SELECT 
            users.id as id,
            users.name as name,
            COUNT(urls."userId") as "linksCount",
            COALESCE(SUM(urls."visitCount"), 0) as "visitCount"
        FROM users 
        LEFT JOIN urls
        ON urls."userId" = users.id
        GROUP BY users.id
        ORDER BY "visitCount" DESC
        LIMIT 10;
    `);
}

export const rankingRepository = {
    selectTop10Users,
}