import { hashSync } from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import {authorizationRepository} from "../repositoryPatterns/authorizationPatterns.js";

dotenv.config();

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

export async function signIn(req, res) {
    const secretKey = process.env.JWT_SECRETKEY;

    const token = jwt.sign(res.locals.userData, secretKey);

    res.send(token).status(200);
}