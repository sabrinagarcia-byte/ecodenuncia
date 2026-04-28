import { usuarios, gerarIdUsuario } from '../data/mock.js'

// criar usuario novo
export async function create(dados) {
    const novo = {
        id: gerarIdUsuario(),
        nome: dados.name || dados.nome,
        email: dados.email,
        senha: dados.password || dados.senha,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    usuarios.push(novo)
    return novo
}

// buscar por id
export async function getById(id) {
    const usuario = usuarios.find(u => u.id === Number(id))
    return usuario || null
}

// buscar por email
export async function getByEmail(email) {
    const usuario = usuarios.find(u => u.email === email)
    return usuario || null
}

// buscar todos
export async function get() {
    return usuarios
}

// atualizar usuario
export async function update(dados, id) {
    const index = usuarios.findIndex(u => u.id === Number(id))
    if (index === -1) return null

    if (dados.nome) usuarios[index].nome = dados.nome
    if (dados.email) usuarios[index].email = dados.email
    if (dados.senha) usuarios[index].senha = dados.senha
    usuarios[index].updatedAt = new Date()

    return usuarios[index]
}

// deletar usuario
export async function remove(id) {
    const index = usuarios.findIndex(u => u.id === Number(id))
    if (index === -1) return null

    const deletado = usuarios.splice(index, 1)
    return deletado[0]
}