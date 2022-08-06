import { Router } from "express";

import { getTop10Users } from "../controllers/rankingControllers.js";

const router = Router();

router.get("/ranking", getTop10Users);

export default router;