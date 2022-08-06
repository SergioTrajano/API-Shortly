import { Router } from "express";

import { validateHeader } from "../middlewares/validateHeaders.js";
import { validateShortenBody, verifyShortUrl, verifyUrlId } from "../middlewares/urlsMiddlewares.js";
import { directShortUrlToUrl, getUrlById, urlShorten } from "../controllers/urlsControllers.js";
const router = Router();

router.get("/urls/:id", verifyUrlId, getUrlById);
router.get("/urls/open/:shortUrl", verifyShortUrl, directShortUrlToUrl);
router.get("/users/me", );
router.post("/urls/shorten", validateHeader, validateShortenBody, urlShorten);
router.delete("/urls/:id", );

export default router;