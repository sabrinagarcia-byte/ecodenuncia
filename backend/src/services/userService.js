import prisma from "../config/database.js";

export async function create(userData) {
    const user = await prisma.user.create({
        data: userData
    })

    return user
}

export async function getById(id) {
        const user = await prisma.user.findUnique({
            where: { id: Number(id) }
        })

        return user
}

export async function getByEmail(email) {
    const user = await prisma.user.findUnique({
        where: { email }
    })

    return user
}

export async function get() {
    const users = await prisma.user.findMany()

    return users
}

export async function update(userData, id) {
    const update = await prisma.user.update({
        where: { id: Number(id) },
        data: userData
    })

    return update
}

export async function remove(id) {
    const delUser = await prisma.user.delete({
        where: { id: Number(id) }
    })

    return delUser
}