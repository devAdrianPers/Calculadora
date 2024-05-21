
function inserir(num) {

    //pegando o valor que esta no visor
    let numero = document.getElementById('visor').innerHTML;

    //adicionando um caracter junto ao que ja tinha no visor
    document.getElementById('visor').innerHTML = numero + num;
}


function somar() {

    //pegando o valor que esta no visor
    let n1 = document.getElementById('visor').innerHTML;

    document.getElementById('visor').innerHTML = n1 + "+";

    let n1Ope = document.getElementById('visor').innerHTML;
}

let contVisor = n1Ope.length;

function calcular() {

    let conta = document.getElementById('visor').innerHTML;

    let contConta = conta.length;
    
    let n2 = conta.substring( 3, contConta);

    document.getElementById('visor').innerHTML = n2;
}