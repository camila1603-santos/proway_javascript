function somar(){
    let campoPrimeiroNumero = document.querySelector("#primeiroNumero");
    let primeiroNumero = parseInt(campoPrimeiroNumero.value);

    let campoSegundoNumero = document.querySelector("#segundoNumero");
    let segundoNumero = parseInt(campoSegundoNumero.value);

    let resultado =  primeiroNumero + segundoNumero;
 
    alert("O resultado da soma de " + primeiroNumero + " mais " + segundoNumero + " é: " + resultado);

}