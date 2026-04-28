// ============================================
// CONTROLLER DE AUTENTICAÇÃO (LOGIN E REGISTRO)
// Aqui ficam as funções que recebem as requisições
// e devolvem as respostas para o frontend.
// ============================================

import { usuarios, gerarIdUsuario } from '../data/mock.js';

// ---- REGISTRO (Criar conta) ----
export function registrar(req, res) {
    const { nome, email, senha } = req.body;

    // Verificar se todos os campos foram preenchidos
    if (!nome || !email || !senha) {
        return res.status(400).json({
            erro: 'Todos os campos são obrigatórios (nome, email, senha)'
        });
    }

    // Verificar se o email já está cadastrado
    const emailJaExiste = usuarios.find(u => u.email === email);

    if (emailJaExiste) {
        return res.status(409).json({
            erro: 'Este email já está cadastrado'
        });
    }

    // Criar o novo usuário
    const novoUsuario = {
        id: gerarIdUsuario(),
        nome: nome,
        email: email,
        senha: senha // Em um projeto real, a senha seria criptografada!
    };

    // Adicionar na lista (simula salvar no banco)
    usuarios.push(novoUsuario);

    // Retornar o usuário criado (sem a senha por segurança)
    return res.status(201).json({
        mensagem: 'Conta criada com sucesso!',
        usuario: {
            id: novoUsuario.id,
            nome: novoUsuario.nome,
            email: novoUsuario.email
        }
    });
}

// ---- LOGIN (Entrar na conta) ----
export function login(req, res) {
    const { email, senha } = req.body;

    // Verificar se todos os campos foram preenchidos
    if (!email || !senha) {
        return res.status(400).json({
            erro: 'Email e senha são obrigatórios'
        });
    }

    // Procurar o usuário pelo email
    const usuario = usuarios.find(u => u.email === email);

    // Se não encontrou o email
    if (!usuario) {
        return res.status(401).json({
            erro: 'Email ou senha incorretos'
        });
    }

    // Se a senha está errada
    if (usuario.senha !== senha) {
        return res.status(401).json({
            erro: 'Email ou senha incorretos'
        });
    }

    // Login deu certo! Retornar dados do usuário (sem a senha)
    return res.status(200).json({
        mensagem: 'Login realizado com sucesso!',
        usuario: {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }
    });
}