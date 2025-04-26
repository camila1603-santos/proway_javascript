function botaoApresentarTank() {
  let campoNomePersonagem = document.querySelector("#nomePersonagem");
  let nomePersonagem = campoNomePersonagem.value;

  let campoPosicaoPersonagem = document.querySelector("#posicaoPersonagem");
  let posicaoPersonagem = campoPosicaoPersonagem.value;

  let campoNivelPersonagem = document.querySelector("#nivelPersonagem");
  let nivelPersonagem = campoNivelPersonagem.value;

  let campoAtaqueTank = document.querySelector("#ataqueTank");
  let ataqueTank = campoAtaqueTank.value;

  alert()
  gerar_CSV(nomePersonagem, posicaoPersonagem, nivelPersonagem, ataqueTank);

}

function botaoApresentarCurandeiro() {
  let campoNomePersonagem = document.querySelector("#nomePersonagem");
  let nomePersonagem = campoNomePersonagem.value;

  let campoPosicaoPersonagem = document.querySelector("#posicaoPersonagem");
  let posicaoPersonagem = campoPosicaoPersonagem.value;

  let campoNivelPersonagem = document.querySelector("#nivelPersonagem");
  let nivelPersonagem = campoNivelPersonagem.value;

  let campoPessoasCuradas = document.querySelector("#pessoasCuradas");
  let pessoasCuradas = campoPessoasCuradas.value;

  gerar_CSV(nomePersonagem, posicaoPersonagem, nivelPersonagem, pessoasCuradas)
}

function botaoApresentarSuporte() {
  let campoNomePersonagem = document.querySelector("#nomePersonagem");
  let nomePersonagem = campoNomePersonagem.value;

  let campoPosicaoPersonagem = document.querySelector("#posicaoPersonagem");
  let posicaoPersonagem = campoPosicaoPersonagem.value;

  let campoNivelPersonagem = document.querySelector("#nivelPersonagem");
  let nivelPersonagem = campoNivelPersonagem.value;

  let campoQtmortes = document.querySelector("#qtMortes");
  let qtMortes = campoQtmortes.value;

  gerar_CSV(nomePersonagem, posicaoPersonagem, nivelPersonagem, qtMortes);
}

function apresentarPosicaoPersonagem() {
  let campoPosicaoPersonagem = document.querySelector("#posicaoPersonagem");
  let posicaoPersonagem = campoPosicaoPersonagem.value;

  if (posicaoPersonagem === "tank") {
    apresentarTank();
  } else if (posicaoPersonagem === "curandeiro") {
    apresentarCurandeiro();
  } else {
    apresentarSuporte();
  }
}

function apresentarTank() {
  let divTank = document.querySelector("#poder-ataque-tank");
  divTank.style.display = "block";

  let divCurandeiro = document.querySelector("#qtde-pessoas-curadas");
  divCurandeiro.style.display = "none";

  let divSuporte = document.querySelector("#qtde-mortes");
  divSuporte.style.display = "none";

  let divBotaoApresentarTank = document.querySelector("#botao-apresentar-tank");
  divBotaoApresentarTank.style.display = "block";

  let divBotaoApresensarCurandeiro = document.querySelector(
    "#botao-apresentar-curandeiro"
  );
  divBotaoApresensarCurandeiro.style.display = "none";

  let divBotaoApresentarSuporte = document.querySelector(
    "#botao-apresentar-suporte"
  );
  divBotaoApresentarSuporte.style.display = "none";
}

function apresentarCurandeiro() {
  let divTank = document.querySelector("#poder-ataque-tank");
  divTank.style.display = "none";

  let divCurandeiro = document.querySelector("#qtde-pessoas-curadas");
  divCurandeiro.style.display = "block";

  let divSuporte = document.querySelector("#qtde-mortes");
  divSuporte.style.display = "none";

  let divBotaoApresentarTank = document.querySelector("#botao-apresentar-tank");
  divBotaoApresentarTank.style.display = "none";

  let divBotaoApresensarCurandeiro = document.querySelector(
    "#botao-apresentar-curandeiro"
  );
  divBotaoApresensarCurandeiro.style.display = "block";

  let divBotaoApresentarSuporte = document.querySelector(
    "#botao-apresentar-suporte"
  );
  divBotaoApresentarSuporte.style.display = "none";
}

function apresentarSuporte() {
  let divTank = document.querySelector("#poder-ataque-tank");
  divTank.style.display = "none";

  let divCurandeiro = document.querySelector("#qtde-pessoas-curadas");
  divCurandeiro.style.display = "none";

  let divSuporte = document.querySelector("#qtde-mortes");
  divSuporte.style.display = "block";

  let divBotaoApresentarTank = document.querySelector("#botao-apresentar-tank");
  divBotaoApresentarTank.style.display = "none";

  let divBotaoApresensarCurandeiro = document.querySelector(
    "#botao-apresentar-curandeiro"
  );
  divBotaoApresensarCurandeiro.style.display = "none";

  let divBotaoApresentarSuporte = document.querySelector(
    "#botao-apresentar-suporte"
  );
  divBotaoApresentarSuporte.style.display = "block";
}

function gerar_CSV(
  nomePersonagem,
  posicaoPersonagem,
  nivelPersonagem,
  ataqueTank
) {
  //Criando um vetor vazio
  let dados = [];
  if (posicaoPersonagem === "tank") {
    dados.push(
        nomePersonagem, 
        posicaoPersonagem, 
        nivelPersonagem, 
        ataqueTank
    );
  } else if (posicaoPersonagem === "curandeiro") {
    dados.push(
      nomePersonagem,
      posicaoPersonagem,
      nivelPersonagem,
      pessoasCuradas
    );
  } else {
    dados.push(
      nomePersonagem, 
      posicaoPersonagem, 
      nivelPersonagem,
      qtMortes
    );
  }

  let cabecalho = ["Nome do Personagem", "Posição do Personagem", "Nível do Personagem", "Ataque do Tank_Pessoas Curadas_Mortes"];

  let csvConteudo = [];

  csvConteudo.push(cabecalho.join(";"));
  csvConteudo.push(dados.join(";"));

  let csvConteudoString = csvConteudo.join("\n\r");

  let blob = new Blob([csvConteudoString], { type: "text/csv;charset=utf-8;" });
  let url = URL.createObjectURL(blob);

  let linkParaDownload = document.createElement("a");
  linkParaDownload.setAttribute("href", url);
  linkParaDownload.setAttribute("download", "game.csv");
  linkParaDownload.style.visibility = "false";

  document.body.appendChild(linkParaDownload);
  linkParaDownload.click();
  document.body.removeChild(linkParaDownload);
}
