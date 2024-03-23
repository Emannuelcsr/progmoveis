// Foi usado o parseFloat para a conversão da String em numéro.

// Foi usado a verificação se os campos foram ambos preenchidos, retornando um erro para o usuario caso contrario.

// Função principal que realiza a operação matemática
function calcularOperacao(operacao) {
  var num1 = parseFloat(document.getElementById("primeiroNumero").value);
  var num2 = parseFloat(document.getElementById("segundoNumero").value);

  // Verifica se os campos foram preenchidos
  // Verifica se algum dos valores não é um número
  // Adiciona a classe "error-text" à div de resultado para estilizar o texto de erro
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("resultado").classList.add("error-text");
    document.getElementById("resultado").innerText =
      "Por favor, preencha ambos os campos antes de executar.";
    return;
  } else {
    // Remove a classe de texto de erro se os campos estiverem preenchidos
    document.getElementById("resultado").classList.remove("error-text");
  }

  // Executa a operação selecionada
  var resultado = operacao(num1, num2); // Chama a função de operação (soma, subtração, multiplicação, divisão)
  document.getElementById("resultado").innerText = "Resultado: " + resultado; // Define o resultado na div de resultado
}
// Funções de operação matemática

// Função de soma
function soma(num1, num2) {
  return num1 + num2;
}

// Função de subtração
function subtracao(num1, num2) {
  return num1 - num2;
}

// Função de multiplicação
function multiplicacao(num1, num2) {
  return num1 * num2;
}

// Função de divisão
function divisao(num1, num2) {
  if (num2 === 0) {
    return "Impossível dividir por zero.";
  } else {
    return num1 / num2;
  }
}
