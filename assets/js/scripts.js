var jogador = null;
var vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
const button = document.getElementsByTagName('button');

button[0].addEventListener('click', reiniciar);

mudarJogador();

const elementos = document.getElementsByClassName("quadrado");

for (let i = 0; i < elementos.length; i++) {
    elementos.item(i).addEventListener('click', escolherQuadrado);
    // var quadrado = document.getElementById(i);
    // quadrado.addEventListener('click', escolherQuadrado);
}

function escolherQuadrado(id) {

    if (vencedor !== null) {
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
    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor() {
    if (checarSequencia(elementos.item(0), elementos.item(1), elementos.item(2))) {
        mudarVencedor(elementos.item(0));
        return true;
    }
    if (checarSequencia(elementos.item(3), elementos.item(4), elementos.item(5))) {
        mudarVencedor(elementos.item(3));
        return true;
    }
    if (checarSequencia(elementos.item(6), elementos.item(7), elementos.item(8))) {
        mudarVencedor(elementos.item(6));
        return true;
    }
    if (checarSequencia(elementos.item(0), elementos.item(3), elementos.item(6))) {
        mudarVencedor(elementos.item(0));
        return true;
    }
    if (checarSequencia(elementos.item(1), elementos.item(4), elementos.item(7))) {
        mudarVencedor(elementos.item(1));
        return true;
    }
    if (checarSequencia(elementos.item(2), elementos.item(5), elementos.item(8))) {
        mudarVencedor(elementos.item(2));
        return true;
    }
    if (checarSequencia(elementos.item(0), elementos.item(4), elementos.item(8))) {
        mudarVencedor(elementos.item(0));
        return true;
    }
    if (checarSequencia(elementos.item(2), elementos.item(4), elementos.item(6))) {
        mudarVencedor(elementos.item(2));
        return true;
    }
    return false;
}

function checarSequencia(quadrado1, quadrado2, quadrado3) {
    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        return true;
    }
    return false;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (let i = 0; i < elementos.length; i++) {
        elementos.item(i).style.background = '#eee';
        elementos.item(i).style.color = '#eee';
        elementos.item(i).innerHTML = '-';
    }
    jogador = null;
    mudarJogador();
}