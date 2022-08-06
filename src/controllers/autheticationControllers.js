import { hashSync } from "bcrypt";

import {authorizationRepository} from "../repositoryPatterns/authorizationPatterns.js";

export async function signUp(req, res) {
    const newUser = req.body;
    newUser.password = hashSync(newUser.password, 13);

    try {
        authorizationRepository.signUpNewUser(newUser);

        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}