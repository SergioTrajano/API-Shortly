import { rankingRepository } from "../repositoryPatterns/rankingsPatterns.js";

export async function getTop10Users(req, res) {
    const { rows: dbTop10Users } = await rankingRepository.selectTop10Users();
    
    res.send(dbTop10Users).status(200);
}