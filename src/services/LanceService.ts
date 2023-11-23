import { PrismaClient, Leilao, Usuario } from "@prisma/client"
const Prisma = new PrismaClient();

export async function createLances(comprador: Usuario, leilao: Leilao, valor: number) {
    try {
        return await Prisma.lances.create({
            data: {
                comprador: { connect: { id: comprador.id } },
                leilao: { connect: { id: leilao.id } },
                valor: valor
            }
        });
    } catch (error) {
        throw new Error("Erro ao criar lance");
    }
}

export async function listLances() {
    try {
        return await Prisma.lances.findMany();
    } catch (error) {
        throw new Error("Erro ao listar lances");
    }
}