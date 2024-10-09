const container = document.querySelector('.container');

// Array com os dados dos jogos (nome e imagem)
const jogos = [
    { nome: 'Pac-Man', imagem: 'pac.gif' },
    { nome: 'Mario Bros', imagem: 'mario.jpeg' },
    { nome: 'Sonic', imagem: 'sonic.jpeg' },
    { nome: 'Enduro', imagem: 'duro.jpeg' },
    { nome: 'Donkey Kong', imagem: 'kong.jpg' },
    { nome: 'Galaxy', imagem: 'celular.jpeg' },
    { nome: 'Tennis', imagem: 'tenis.jpeg' },   
    // ... adicione os demais jogos aqui ...
];

// Função para criar um elemento da grade
function criarGameBox(jogo) {
    const gameBox = document.createElement('div');
    gameBox.classList.add('game-box');
    gameBox.innerHTML = `<img src="${jogo.imagem}" alt="${jogo.nome}"><h2>${jogo.nome}</h2>`;
    return gameBox;
}

// Preenchendo a grade
jogos.forEach(jogo => {
    container.appendChild(criarGameBox(jogo));
});