import { compareSync } from "bcrypt";

import { signUpSchema, signInSchema } from "../schemas/authorizationSchemas.js";
import { authorizationRepository } from "../repositoryPatterns/authorizationPatterns.js";

export async function validateSignUpBody(req, res, next) {
    const newUser = req.body;
    const { error } = signUpSchema.validate(newUser, {abortEarly: false});

    if (error) {
        res.status(422).send(error.details.map( c => c.message));
        return;
    }

    next();
}

export async function verifySignUpEmail(req, res, next) {
    const newUser = req.body;
    const { rows: emailInDb } = await authorizationRepository.verifyExistingEmail(newUser);

    if (emailInDb.length) {
        res.sendStatus(409);
        return;
    }

    next();
}

export async function validateSignInBody(req, res,next) {
    const user = req.body;
    const { error } = signInSchema.validate(user, {abortEarly: false});

    if (error) {
        res.status(422).send(error.details.map(c => c.message));
        return;
    }

    next();
}

export async function validateSignInCredentials(req, res, next) {
    const user = req.body;
    const { rows: dbUser} = await authorizationRepository.verifySignIpData(user.email);

    if (dbUser.length === 0 || !compareSync(user.password, dbUser[0].password)) {
        res.sendStatus(401);
        return;
    }

    next();
}