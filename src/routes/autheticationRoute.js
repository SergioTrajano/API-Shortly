import { Router } from "express";

import { validateSignUpBody, verifySignUpEmail, validateSignInBody, validateSignInCredentials } from "../middlewares/authorizationMiddlewares.js";
import { signUp, signIn } from "../controllers/autheticationControllers.js";

const router = Router();

router.post("/signup", validateSignUpBody, verifySignUpEmail, signUp);
router.post("/signin", validateSignInBody, validateSignInCredentials, signIn);

export default router;