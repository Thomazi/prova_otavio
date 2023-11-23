import express from "express";
import * as UserController from "../controller/UserController";

const router = express.Router();
router.post("/usuarios", UserController.createUser);
router.get("/usuarios", UserController.listUser);

export default router;