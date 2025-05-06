import { obterUsuarios, salvarUsuarios } from "./storage.js";

export function criarUsuarios(nome, email) {
    const usuarios = obterUsuarios();
    const novoUsuario = {
        id: Date.now(),
        nome,
        email
    };

    usuarios.push(novoUsuario);
    salvarUsuarios(usuarios);
}

export function listarUsuarios(callbackRender) {
    const usuarios = obterUsuarios();
    callbackRender(usuarios);
}

export function editarUsuarios(id, novoNome, novoEmail) {
    const usuarios = obterUsuarios();
    const usuario = usuarios.find(u => u.id === id); // u de unidade/unitario

    if (usuario) {
        usuario.nome = novoNome;
        usuario.email = novoEmail;
        salvarUsuarios(usuarios);
    }
}

export function deletarUsuario(id) {
    let usuarios = obterUsuarios();
    usuarios = usuarios.filter(u => u.id !== id);
    salvarUsuarios(usuarios);
}
