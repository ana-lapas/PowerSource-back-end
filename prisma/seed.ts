import { connectDb, prisma } from './../src/config/database';
import { users } from '@prisma/client';

connectDb();

async function createDefaultUser() {
    console.log("Creating default user!");
    const user = await prisma.users.create({
        data: {
            name: "administrador teste",
            cpf: "0000001122",
            email: "admin@system.com.br",
            password: "admin"
        }
    });

    return user;
}

async function getDefaultUser() {
    const user = await prisma.users.findFirst({
        where: {
            email: "admin@system.com.br"
        }
    });

    return user;
}

async function checkOrCreateDefaultUser() {
    const user = await getDefaultUser();
    if (!user) await createDefaultUser();
    else console.log("Default user already created.");

    return user;
}

// execução
(async () => {
    console.log("executing system");
    await checkOrCreateDefaultUser();
})(); // IIFE