// ============================================
// SERVIÇO DE DENÚNCIA (VERSÃO MOCK)
// Simula as operações de banco de dados usando
// o array de denúncias na memória.
// ============================================

import { denuncias, gerarIdDenuncia } from '../data/mock.js';

// Criar uma nova denúncia
export async function create(dados) {
    const novaDenuncia = {
        id: gerarIdDenuncia(),
        tipo: dados.tipo,
        descricao: dados.descricao,
        local: dados.local,
        nome: dados.nome || '',
        email: dados.email || '',
        anonimo: dados.anonimo || false,
        criadoEm: new Date().toISOString()
    };

    denuncias.push(novaDenuncia);
    return novaDenuncia;
}

// Buscar denúncia por ID
export async function getById(id) {
    const denuncia = denuncias.find(d => d.id === Number(id));
    return denuncia || null;
}

// Buscar todas as denúncias
export async function getAll() {
    return denuncias;
}

// Atualizar uma denúncia
export async function update(dados, id) {
    const index = denuncias.findIndex(d => d.id === Number(id));

    if (index === -1) return null;

    // Atualiza apenas os campos que foram enviados
    if (dados.tipo) denuncias[index].tipo = dados.tipo;
    if (dados.descricao) denuncias[index].descricao = dados.descricao;
    if (dados.local) denuncias[index].local = dados.local;
    if (dados.nome !== undefined) denuncias[index].nome = dados.nome;
    if (dados.email !== undefined) denuncias[index].email = dados.email;
    if (dados.anonimo !== undefined) denuncias[index].anonimo = dados.anonimo;

    return denuncias[index];
}

// Deletar uma denúncia
export async function remove(id) {
    const index = denuncias.findIndex(d => d.id === Number(id));

    if (index === -1) return null;

    const deletada = denuncias.splice(index, 1);
    return deletada[0];
}
