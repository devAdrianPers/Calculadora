
 function inserir(num) {

    //pegando o valor que esta no visor
    let numero = document.getElementById('visor').innerHTML;

    //adicionando um caracter junto ao que ja tinha no visor
    document.getElementById('visor').innerHTML = numero + num;
}

function limpar(){
    //limpando o visvor ao defini-lo como vazio
    let numero = document.getElementById('visor').innerHTML = null;
}

function apagar() {
    //pegando o valor que esta no visor
    let resultado = document.getElementById('visor').innerHTML;

    /* usando metodo SUBSTRING para pegar apenas uma parte do está sendo no visor : 
    usando o LENGTH como parametro para conseguir a quantidade de caracter da string e
    subtraindo 1, assim retornar o a string sem o ultimo caracter digitado */
    document.getElementById('visor').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    let resultado = document.getElementById('visor').innerHTML;
    if (resultado) {
        document.getElementById('visor').innerHTML = eval(resultado);
    }
}