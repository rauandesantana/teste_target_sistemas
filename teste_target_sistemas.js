soma();
fibonacci(377);
stringReverso("Rauan");


/////////////////////////////////////////////////////////////////// (1) SOMA
function soma() {
  const tabelaResultado = [[" K ", " SOMA + K ", " SOMA "]];
  const indice = 13;
  let soma = 0;
  let k = 0;
  let textoResultado = "";

  // Somando os Valores Incrementados em Lope
  while (k < indice) {
    const linhaResultado = [];
    k++;
    linhaResultado.push(`${k}`);
    linhaResultado.push(`${soma} + ${k}`);
    soma += k;
    linhaResultado.push(`${soma}`);
    tabelaResultado.push(linhaResultado);
  }

  // Gerando o Texto para a Impressão em Tela
  for (let y = 0; y < tabelaResultado.length; y++) {
    const linha = tabelaResultado[y];

    // Formatando o Texto
    for (let x = 0; x < linha.length; x++) {
      const coluna = linha[x];
      const totalChars = tabelaResultado[0][x].length;
      const quantChars = coluna.length;
      const vezesEspacos = (totalChars - quantChars) / 2;

      // Alinhando os Caracteres
      for (let c = 0; c < Math.floor(vezesEspacos); c++) textoResultado += " ";

      textoResultado += coluna;

      // Alinhando os Caracteres
      for (let c = 0; c < Math.ceil(vezesEspacos); c++) textoResultado += " ";

      if (x >= 0 && x < linha.length - 1) textoResultado += " | "
    }

    textoResultado += "\n";

    // Inserindo a Linha Horizontal do Título
    if (y === 0) {
      let tamanhoLinha = textoResultado.indexOf("\n")
      for (let c = 0; c < tamanhoLinha; c++) textoResultado += "-";
      textoResultado += "\n";
    }
  }

  console.log(`1) O resultado final da soma é ${soma}.`);
  console.log(`Segue abaixo os cálculos realizados.\n`);
  console.log(textoResultado);
}

/////////////////////////////////////////////////////////////////// (2) FIBONACCI
function fibonacci(valor) {
  const resultados = [0, 1];
  let valorEncontrado = false;
  let textoResultado = "";
  let nItens = resultados.length;
  let checarValor = true;
  let checarGrade = true;

  // Calculando o Fibonacci
  do {
    const valorX = resultados[nItens - 2];
    const valorY = resultados[nItens - 1];
    resultados.push(valorX + valorY);
    nItens = resultados.length;
    checarValor = resultados[nItens - 1] <= (valor * 2);
    checarGrade = (nItens % 5) != 1;
    if (resultados[nItens - 1] === valor) valorEncontrado = true;
  } while (checarValor || checarGrade);

  // Organizando o Texto para a Impressão em Tela
  for (let i = 1; i < nItens; i++) {
    const valorAtual = resultados[i - 1];
    const totalChars = resultados[nItens - 1].toString().length;
    const quantChars = valorAtual.toString().length;
    const vezesEspacos = totalChars - quantChars;

    // Alinhando os Caracteres
    for (let c = 0; c < vezesEspacos; c++) textoResultado += " ";

    textoResultado += (valorAtual == valor) ? `( ${valorAtual} )` : `  ${valorAtual}  `;
    if ((i % 5) != 0) textoResultado += " | ";
    if ((i % 5) === 0) textoResultado += "  \n";
    if ((i % 5) === 0 && i != (nItens - 1)) {
      let tamanhoLinha = textoResultado.indexOf("\n")

      // Inserindo as Linhas Horizontais
      for (let c = 0; c < tamanhoLinha; c++) textoResultado += "-";

      textoResultado += "\n";
    }
  }

  console.log(`2) O número "${valor}" ${(valorEncontrado) ? "" : "NÂO"} pertence a sequência de Fibonacci.`);
  console.log(`Segue abaixo a tabela com a sequência.\n`);
  console.log(textoResultado);
}

/////////////////////////////////////////////////////////////////// (5) STRING REVERSO
function stringReverso(texto) {
  let textoResultado = "";

  for (let i = (texto.length - 1); i >= 0; i--) {
    const char = (i === texto.length - 1) ? texto[i].toUpperCase() : texto[i].toLowerCase();
    textoResultado += char;
  }

  console.log(`5) O texto ${texto} quando invertido resulta em ${textoResultado}.`);
}