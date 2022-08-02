import { Router } from "express";

const router = Router();

router.get("/urls/:id");
router.get("/urls/open/:shortUrl");
router.get("/users/me");
router.post("/urls/shorten");
router.delete("/urls/:id");

export default router;