import { PrismaClient, Usuario } from "@prisma/client"

const Prisma = new PrismaClient();

export async function createLeilao(produto: string, preco: number, datalimite: Date, dono: Usuario) {
    try {
        return await Prisma.leilao.create({
            data: {
                produto: produto,
                preco: preco,
                datalimite: datalimite,
                dono: { connect: { id: dono.id } }
            }
        });
    } catch (error) {
        throw new Error("Erro ao criar leilão");
    }
}

export async function listLancesLeilao() {
    try {
        return await Prisma.leilao.findMany();
    } catch (error) {
        throw new Error("Erro ao listar leilões");
    }
}