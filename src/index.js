import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authetication from "./routes/autheticationRoute.js";
import urls from "./routes/urlsRoute.js";
import ranking from "./routes/rankingRoute.js";

dotenv.config();

const server = express();

server.use(express.json());
express.use(cors());

server.use(authetication);
server.use(urls);
server.use(ranking);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});