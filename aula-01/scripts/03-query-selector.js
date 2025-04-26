function processarCliente(){
    let campoNome = document.querySelector("#nome");
    let nome = campoNome.value;

    let campoTipo = document.querySelector("#tipo");
    let tipo = campoTipo.value;

    let campoCpf = document.querySelector("#cpf");
    let cpf = campoCpf.value;

    let campoCnpj = document.querySelector("#cnpj");
    let cnpj = campoCnpj.value;

    gerar_CSV(nome, tipo, cpf, cnpj);

    alert("Nome do cliente: " + nome + "\nTipo: " + tipo + "\nCPF: " + cpf + "\nCNPJ: " + cnpj)
}

function apresentarPf(){
    alert("PF");
}

function apresentarPj(){
    let divPessoaJuridica = document.querySelector("#pessoa-juridica-cnpj");
    divPessoaJuridica.style.display = "block";
}

    let divPessoaFisica = document.querySelector("#pessoa-fisica-cpf");
    divPessoaFisica.style.display = "none";

function apresentarPf(){
    let divPessoaFisica = document.querySelector("#pessoa-fisica-cpf");
    divPessoaFisica.style.display = "block";

    let divPessoaJuridica = document.querySelector("#pessoa-juridica-cnpj");
    divPessoaJuridica.style.display = "none";
}
    

function apresentarCampoTipoPessoa(){
    let campoTipo = document.querySelector("#tipo");
    let tipoSelecionado = campoTipo.value;

    if (tipoSelecionado == "pj"){
        apresentarPj();
    } else {
        apresentarPf();
    }
}

function gerar_CSV(nome, tipo, cpf, cnpj){
    //Criando um vetor vazio
    let dados = []
    if (tipo === "pf"){
        dados.push(nome, tipo, cpf);
    } else {
        dados.push(nome, tipo, cnpj);
    }

let cabecalho = ["Nome", "Tipo", "CPF_CNPJ"];

let csvConteudo = [];

csvConteudo.push(cabecalho.join(";"));
csvConteudo.push(dados.join(";"));

let csvConteudoString = csvConteudo.join("\n\r");

let blob = new Blob([csvConteudoString], {type: "text/csv;charset=utf-8;"});
let url = URL.createObjectURL(blob);

let linkParaDownload = document.createElement("a");
linkParaDownload.setAttribute("href", url);
linkParaDownload.setAttribute("download", "cliente.csv");
linkParaDownload.style.visibility = "false";

document.body.appendChild(linkParaDownload);
linkParaDownload.click();
document.body.removeChild(linkParaDownload);
}   