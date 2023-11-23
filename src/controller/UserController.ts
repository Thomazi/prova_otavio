import * as UserService from "../services/UserService"
import {Request, Response } from "express"

export async function createUser(req: Request, res: Response){
    const { nome, email } = req.body;
     const usuario = await UserService.createUser(nome, email);
     return res.status(200).json({usuario: usuario});
 }
 
 export async function listUser(req: Request, res: Response){
     const usuarios = await UserService.listUser();
     return res.status(200).json({usuarios: usuarios})
 }