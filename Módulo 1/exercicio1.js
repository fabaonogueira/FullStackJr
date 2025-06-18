
// 1. Verifica se um número é par ou ímpar
function parOuImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}

// 2. Classifica a idade
function classificarIdade(idade) {
  if (idade < 12) return "Criança";
  else if (idade < 18) return "Adolescente";
  else if (idade < 60) return "Adulto";
  else return "Idoso";
}

// 3. Classificação por nota
function classificarNota(nota) {
  if (nota >= 7) return "Aprovado";
  else if (nota >= 5) return "Recuperação";
  else return "Reprovado";
}

// 4. Menu interativo
function menu(opcao) {
  switch (opcao) {
    case 1:
      return "Você escolheu opção 1";
    case 2:
      return "Você escolheu opção 2";
    case 3:
      return "Você escolheu opção 3";
    default:
      return "Opção inválida";
  }
}

// 5. Calcula IMC
function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  if (imc < 18.5) return "Baixo peso";
  else if (imc < 25) return "Peso normal";
  else if (imc < 30) return "Sobrepeso";
  else return "Obesidade";
}

// 6. Verifica tipo de triângulo
function tipoTriangulo(a, b, c) {
  if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) return "Equilátero";
    else if (a === b || a === c || b === c) return "Isósceles";
    else return "Escaleno";
  } else {
    return "Não forma triângulo";
  }
}

// 7. Valor total da compra de maçãs
function valorMacas(quantidade) {
  const preco = quantidade >= 12 ? 0.25 : 0.30;
  return quantidade * preco;
}

// 8. Ordena dois valores
function ordenarValores(a, b) {
  return a < b ? [a, b] : [b, a];
}

// 9. Contagem regressiva
function contagemRegressiva() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

// 10. Escreve um número 10 vezes
function repetirNumero(numero) {
  for (let i = 0; i < 10; i++) {
    console.log(numero);
  }
}

// 11. Soma de 5 números
function somarCincoNumeros(numeros) {
  let soma = 0;
  for (let i = 0; i < 5; i++) {
    soma += numeros[i];
  }
  return soma;
}

// 12. Tabuada
function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// 13. Média de decimais até digitar 0
function mediaNumeros(lista) {
  let soma = 0;
  let contador = 0;
  for (let num of lista) {
    if (num === 0) break;
    soma += num;
    contador++;
  }
  return contador === 0 ? 0 : soma / contador;
}

// 14. Fatorial
function fatorial(n) {
  let fat = 1;
  for (let i = 2; i <= n; i++) {
    fat *= i;
  }
  return fat;
}

// 15. Sequência de Fibonacci (10 primeiros)
function fibonacci() {
  let a = 0, b = 1;
  console.log(a);
  console.log(b);
  for (let i = 2; i < 10; i++) {
    const next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
}
