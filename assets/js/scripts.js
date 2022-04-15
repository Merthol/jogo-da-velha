var jogador = null;
var vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
const button = document.getElementsByTagName('button');

button[0].addEventListener('click', reiniciar);

mudarJogador();

const elementos = document.getElementsByClassName("quadrado");

// Adicionando a função que escolhe o símbolo do quadrado ao clicar
for (let i = 0; i < elementos.length; i++) {
    elementos.item(i).addEventListener('click', escolherQuadrado);
}

function escolherQuadrado(id) {
    // Função responsável por escolher qual símbolo será inserido no quadrado ao clicar

    if (vencedor !== null) {
        // Se já houver um vencedor, não realiza mais nenhuma mudança no click
        return;
    }

    quadrado = this;
    if (quadrado.innerHTML !== '-') {
        return;
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
    mudarJogador();
    checarVencedor();
}

function mudarJogador() {
    // Função responsável por mudar qual será o jogador da vez.
    if (jogador === 'X') {
        // Se o jogador atual for o X, altera para o O
        jogador = 'O';
    } else {
        // Se o jogador atual for o O ou qualquer outro valor (como null), altera para o X
        jogador = 'X';
    }
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor() {
    // Função responsável por verificar se existe alguma sequência vencedora, ou seja, alguma sequência com os três
    // valores iguais

    if (checarSequencia(elementos.item(0), elementos.item(1), elementos.item(2))) {
        mudarVencedor(elementos.item(0));
        return;
    }
    if (checarSequencia(elementos.item(3), elementos.item(4), elementos.item(5))) {
        mudarVencedor(elementos.item(3));
        return;
    }
    if (checarSequencia(elementos.item(6), elementos.item(7), elementos.item(8))) {
        mudarVencedor(elementos.item(6));
        return;
    }
    if (checarSequencia(elementos.item(0), elementos.item(3), elementos.item(6))) {
        mudarVencedor(elementos.item(0));
        return;
    }
    if (checarSequencia(elementos.item(1), elementos.item(4), elementos.item(7))) {
        mudarVencedor(elementos.item(1));
        return;
    }
    if (checarSequencia(elementos.item(2), elementos.item(5), elementos.item(8))) {
        mudarVencedor(elementos.item(2));
        return;
    }
    if (checarSequencia(elementos.item(0), elementos.item(4), elementos.item(8))) {
        mudarVencedor(elementos.item(0));
        return;
    }
    if (checarSequencia(elementos.item(2), elementos.item(4), elementos.item(6))) {
        mudarVencedor(elementos.item(2));
    }
}

function checarSequencia(quadrado1, quadrado2, quadrado3) {
    // Função responsável por verificar se a sequência enviada como parâmetro é vencedora, se os valores são iguais
    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        // Caso os valores sejam iguais, já altera as cores dos quadrados.
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        return true;
    }
    return false;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
    // Função responsável por alterar as cores dos quadrados para indicar uma sequência vencedora

    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function mudarVencedor(quadrado) {
    // Função responsável por exibir o vencedor no campo Vencedor
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function reiniciar() {
    // Função responsável por reiniciar o jogo, alterando todos os valores e cores para os mesmos iniciais
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (let i = 0; i < elementos.length; i++) {
        // Percorrendo os quadrados e reiniciando cada um deles
        elementos.item(i).style.background = '#eee';
        elementos.item(i).style.color = '#eee';
        elementos.item(i).innerHTML = '-';
    }
    jogador = null;
    mudarJogador();
}