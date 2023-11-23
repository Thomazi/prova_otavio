import express from "express";
import * as LeilaoController from "../controller/LeilaoController";

const router = express.Router();
router.post("/leiloes", LeilaoController.createLeilao);
router.get("/leiloes", LeilaoController.listLeilao);

export default router;
