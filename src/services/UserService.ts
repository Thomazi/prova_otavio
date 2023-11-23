import { PrismaClient } from "@prisma/client"

const Prisma = new PrismaClient();

export async function createUser(nome: string, email: string) {
    try {
        return await Prisma.usuario.create({
            data: {
                nome: nome,
                email: email
            }
        });
    } catch (error) {
        throw new Error("Erro ao criar usuário");
    }
}

export async function listUser() {
    try {
        return await Prisma.usuario.findMany();
    } catch (error) {
        throw new Error("Erro ao listar usuários");
    }
}