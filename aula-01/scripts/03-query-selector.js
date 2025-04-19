function processarCliente(){
    let campoNome = document.querySelector("#nome");
    let nome = campoNome.value;

    let campoTpo = document.querySelector("#tipo");
    let tipo = campoTpo.value;

    alert("Nome do cliente: " + nome + "\nTipo: " + tipo)
    
}