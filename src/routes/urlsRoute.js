import { Router } from "express";

import { validateHeader } from "../middlewares/validateHeaders.js";
import { validateShortenBody, verifyIfUrlBelongsToUser, verifyShortUrl, verifyUrlId } from "../middlewares/urlsMiddlewares.js";
import { deleteUrl, directShortUrlToUrl, getUrlById, urlShorten } from "../controllers/urlsControllers.js";
const router = Router();

router.get("/urls/:id", verifyUrlId, getUrlById);
router.get("/urls/open/:shortUrl", verifyShortUrl, directShortUrlToUrl);
router.get("/users/me", );
router.post("/urls/shorten", validateHeader, validateShortenBody, urlShorten);
router.delete("/urls/:id", validateHeader, verifyUrlId, verifyIfUrlBelongsToUser, deleteUrl);

export default router;