import * as LeilaoService from "../services/LeilaoService";
import {Request, Response } from "express"

export async function createLeilao(req: Request, res: Response){
    const { produto, preco, datalimite, dono } = req.body;
     const leilao = await LeilaoService.createLeilao(produto, preco, datalimite, dono);
     return res.status(200).json({leilao: leilao});
 }
 
 export async function listLeilao(req: Request, res: Response){
     const leiloes = await LeilaoService.listLancesLeilao();
     return res.status(200).json({leiloes: leiloes})
 }