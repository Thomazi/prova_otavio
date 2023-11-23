import * as LanceService from "../services/LanceService";
import {Request, Response } from "express"

export async function createLances(req: Request, res: Response){
    const { comprador, leilao, valor } = req.body;
     const lance = await LanceService.createLances(comprador, leilao, valor);
     return res.status(200).json({lance: lance});
 }
 
 export async function listLances(req: Request, res: Response){
     const lancess = await LanceService.listLances();
     return res.status(200).json({lances: lancess})
 }