import express from "express";
import * as LanceController from "../controller/LanceController";

const router = express.Router();
router.post("/lances", LanceController.createLances);
router.get("/lances", LanceController.listLances);

export default router;