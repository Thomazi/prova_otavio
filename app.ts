import express from "express";
import UserRoute from "./routes/UserRoute";
import LeilaoRoute from "./routes/LeilaoRoute";
import LanceRoute from "./routes/LanceRoute";
import * as UserController from "./controller/UserController"; // Importe o UserController

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(UserRoute);
app.use(LeilaoRoute);
app.use(LanceRoute);
app.listen(3000);
