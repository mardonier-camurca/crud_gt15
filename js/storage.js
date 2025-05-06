export function obterUsuarios() {
    const dados = localStorage.getItem('usuarios');
    return dados ? JSON.parse(dados) : [];
}

export function salvarUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}