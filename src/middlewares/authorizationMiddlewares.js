import { signUpSchema } from "../schemas/authorizationSchemas.js";
import {authorizationRepository} from "../repositoryPatterns/authorizationPatterns.js";

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