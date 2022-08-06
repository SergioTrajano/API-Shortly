import { Router } from "express";

import { validateSignUpBody, verifySignUpEmail } from "../middlewares/authorizationMiddlewares.js";
import { signUp } from "../controllers/autheticationControllers.js";

const router = Router();

router.post("/signup", validateSignUpBody, verifySignUpEmail, signUp);
router.post("/signin");

export default router;