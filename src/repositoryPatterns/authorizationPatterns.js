import connection from "../database.js";

async function verifyExistingEmail(newUser) {
    return connection.query(`
    SELECT * 
    FROM users
    WHERE email=$1
`, [newUser.email]);
}

async function signUpNewUser(newUser) {
    return connection.query(`
        INSERT INTO users (name, email, password) VALUES ($1, $2, $3)
    `, [newUser.name, newUser.email, newUser.password]);
}

async function verifySignIpData(email) {
    return connection.query(`
        SELECT *
        FROM users
        WHERE email=$1
    `, [email]);
}

export const authorizationRepository = {
    verifyExistingEmail,
    signUpNewUser,
    verifySignIpData,
}