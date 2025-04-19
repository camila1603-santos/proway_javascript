function exemploApresentar(){
    let nome = "Vanish"; //string
    let preco = 13.00; //int
    let quantidade = 30; //float


let total = preco * quantidade;


console.log("Nome: " + nome);
console.log("Quantidade: " + quantidade);
console.log("Preço: " + preco);
console.log("Total: " + total)

}

// exemploApresentar();

//--------------------------------------

function exemploComDesconto() {
    let jogo = "RD2";
    let categoria = "Open World";
    let preco = 0;

    // Se a categoria for igual a "Open World"
    if(categoria == "Open World"){
        preco = 150.00;
    } else if (categoria == "RPG"){
        preco = 30.00;
}

console.log("Jogo: " + jogo);
console.log("Categoria: " + categoria);
console.log("Preço: " + preco);
}

// exemploComDesconto();

//--------------------------------------

function exercicioCalcularDataNascimento() {

    let nome = "Maria";
    let anoNascimento = 1925;
    let idade = (2025 - anoNascimento);
    

    console.log("Meu nome é " + nome, "meu ano de nascimento é " + anoNascimento, "e minha idade é " +idade)
    
}

// exercicioCalcularDataNascimento();

//--------------------------------------//

function exemploSolicitarDados(){
    // Entrada de dados
    let nome = prompt("Digite o seu nome");
    let sobrenome = prompt("Digite o seu sobrenome");

    // Processamento
    let nomeCompleto = nome + " " + sobrenome;

    // Saída de dados
    alert("Nome completo: " + nomeCompleto);
}

// exemploSolicitarDados();

//--------------------------------------//

function exemploConversaoTipos(){
    // O que o usuário digitar vem como texto, convertemos para o devido tipo
    // Converter de string para int
    let numero = parseInt("2");

    // Converter de string para float
    let valor = parseFloat("2013.29");

    console.log("Número: " + numero);
    console.log("Valor: " + valor);
}

//--------------------------------------//

function exemploSolicitarDadosComConversao(){
 let curso = prompt("Digite o nome do curso: ");
 let categoria = prompt ("Digite a categoria: ");
 let totalCurso = parseFloat(prompt("Digite o total que será pago: "))

let desconto;
if (categoria == "Tecnologia"){
    desconto = 1999.90;
}else if (categoria == "Informática Básica"){
    desconto = 150.00;
}else{

    desconto = 75.90;
}

let totalCursoComDesconto = totalCurso - desconto;

alert("O curso " + curso + " tem um desconto de " + desconto + ", você pagará somente: " + totalCursoComDesconto);

}

//--------------------------------------//

function exemploNumero(){
    let numero = parseInt(prompt("Digite um número"));

    if (numero > 0){
        console.log("Número positivo");
    } else if (numero < 0){
        console.log("Número negativo");
    } else {
        console.log("Número neutro");
    }

    if (numero % 2 == 0){
        console.log("Número par");
    } else{
        console.log("Número ímpar");
    }

    if (numero >= 1000){
        console.log("Número maior ou igual a 1000");
    }

    if (numero < 200){
        console.log("Número menor ou igual a 200");
    }

    // Símbolo de diferente é !=
    if (numero != 14){
        console.log("Número não é o 14");
    } else {
        console.log("Número é o 14");
    }
}

function exercicioDadosArCondicionado(){
    let modelo = prompt("Digite o modelo: ");
    let qtdeBtus = parseInt(prompt("Digite a quantidade de btus: "));
    let preco = parseFloat(prompt("Digite o preço: "));
    let classificacao = prompt("Digite a classificação (A, B, C, D, E ou F): ");

    console.log("O modelo do ar condicionado é: " + modelo, "a quantidade de btus é: " + qtdeBtus, "o preço é: " + preco, "e a classificação é: " + classificacao)
}

//--------------------------------------//

function exercicioMedia(){
    let aluno = prompt("Digite o nome do aluno: ");
    let nota1 = parseFloat(prompt("Digite a primeira nota: "));
    let nota2 = parseFloat(prompt("Digite a segunda nota: "));
    let nota3 = parseFloat(prompt("Digite a terceira nota: "));
    let media = (nota1 + nota2 + nota3) / 3;

    console.log("O aluno " +aluno, "teve a média igual a " + media)

    if (media >= 7){
        console.log("O aluno " + aluno + " foi aprovado com a média " + media);
    } else if (media >= 5){
        console.log("O aluno " + aluno + " está em exame com a média " + media);
    } else {
        console.log("O aluno " + aluno + " foi reprovado com a média " + media);
    }
}

//--------------------------------------//
