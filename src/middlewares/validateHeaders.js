import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { headersSchema } from "../schemas/headersSchema.js";

dotenv.config();

export async function validateHeader(req, res,next) {
    const header = {Authorization: req.headers.authorization};
    const { error } = headersSchema.validate(header);

    if (error) {
        res.sendStatus(401);
        return;
    }

    res.locals.userData = jwt.verify(header.Authorization.replace("Bearer ", ""), process.env.JWT_SECRETKEY);
    
    next();
}