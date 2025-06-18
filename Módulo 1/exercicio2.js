// Seção 1: Estruturas de Controle Avançada

// 1. Validação de Datas
function ehDataValida(dia, mes, ano) {
  const mesesComDias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
    mesesComDias[1] = 29; // ano bissexto
  }
  return (
    mes >= 1 &&
    mes <= 12 &&
    dia >= 1 &&
    dia <= mesesComDias[mes - 1]
  );
}

// 2. Jogo de Adivinhação
function jogoDeAdivinhacao() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativa, tentativas = 0;
  const prompt = require('prompt-sync')(); // necessário para Node
  do {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 100: "));
    tentativas++;
    if (tentativa < numeroSecreto) console.log("Mais alto!");
    else if (tentativa > numeroSecreto) console.log("Mais baixo!");
  } while (tentativa !== numeroSecreto);
  console.log(`Acertou em ${tentativas} tentativas!`);
}

// 3. Palavras Únicas
function palavrasUnicas(str) {
  const palavras = str.split(" ");
  const unicas = [];
  for (let i = 0; i < palavras.length; i++) {
    if (!unicas.includes(palavras[i])) {
      unicas.push(palavras[i]);
    }
  }
  return unicas;
}

// Seção 2: Funções e Recursão

// 4. Fatorial Recursivo
function fatorial(n) {
  if (n < 0) throw new Error("Fatorial não definido para números negativos.");
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

// 5. Debounce
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 6. Memoization
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Seção 3: Arrays e Objetos Complexos

// 7. Mapeamento e Ordenação
function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}

// 8. Agrupamento por Propriedade
function agruparPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    if (!acumulador[venda.cliente]) {
      acumulador[venda.cliente] = 0;
    }
    acumulador[venda.cliente] += venda.total;
    return acumulador;
  }, {});
}

// 9. Conversão Entre Formatos
function paresParaObjeto(pares) {
  const obj = {};
  for (let [chave, valor] of pares) {
    obj[chave] = valor;
  }
  return obj;
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}
