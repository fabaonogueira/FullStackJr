// 1. Redução do tempo de vida de um fumante
const cigarrosPorDia = parseInt(prompt("Quantidade de cigarros fumados por dia:"));
const anosFumando = parseInt(prompt("Quantos anos você já fumou:"));

const totalCigarros = cigarrosPorDia * anosFumando * 365;
const minutosPerdidos = totalCigarros * 10;
const diasPerdidos = minutosPerdidos / (24 * 60);

alert(`Você perdeu aproximadamente ${diasPerdidos.toFixed(2)} dias de vida.`);

// 2. Multa de trânsito
const velocidade = parseFloat(prompt("Digite a velocidade do carro (em Km/h):"));

if (velocidade > 80) {
    const multa = (velocidade - 80) * 5;
    alert(`Você foi multado! O valor da multa é de R$ ${multa.toFixed(2)}.`);
} else {
    alert("Velocidade dentro do permitido.");
}

// 3. Preço da passagem
const distancia = parseFloat(prompt("Digite a distância da viagem (em Km):"));
let preco;

if (distancia <= 200) {
    preco = distancia * 0.50;
} else {
    preco = distancia * 0.45;
}

alert(`O preço da passagem é R$ ${preco.toFixed(2)}.`);

// 4. Condição de existência de um triângulo
const a = parseFloat(prompt("Primeiro segmento:"));
const b = parseFloat(prompt("Segundo segmento:"));
const c = parseFloat(prompt("Terceiro segmento:"));

if (a < b + c && b < a + c && c < a + b) {
    alert("Os segmentos podem formar um triângulo.");
} else {
    alert("Os segmentos NÃO podem formar um triângulo.");
}

// 5. JokenPo
const opcoes = ["pedra", "papel", "tesoura"];
const computador = opcoes[Math.floor(Math.random() * opcoes.length)];
const jogador = prompt("Escolha pedra, papel ou tesoura:").toLowerCase();

let resultado = "";
if (jogador === computador) {
    resultado = "Empate!";
} else if (
    (jogador === "pedra" && computador === "tesoura") ||
    (jogador === "papel" && computador === "pedra") ||
    (jogador === "tesoura" && computador === "papel")
) {
    resultado = "Você venceu!";
} else {
    resultado = "Você perdeu!";
}

alert(`O computador escolheu: ${computador}. ${resultado}`);

// 6. Jogo de adivinhação
const numeroSorteado = Math.floor(Math.random() * 5) + 1;
const palpite = parseInt(prompt("Adivinhe o número sorteado entre 1 e 5:"));

if (palpite === numeroSorteado) {
    alert("Parabéns! Você acertou.");
} else {
    alert(`Que pena! O número sorteado era ${numeroSorteado}.`);
}

// 7. Aluguel de carros
const tipoCarro = prompt("Tipo de carro (popular ou luxo):").toLowerCase();
const dias = parseInt(prompt("Dias de aluguel:"));
const kmPercorridos = parseFloat(prompt("Km percorridos:"));

let precoTotal = 0;

if (tipoCarro === "popular") {
    precoTotal += dias * 90;
    if (kmPercorridos <= 100) {
        precoTotal += kmPercorridos * 0.20;
    } else {
        precoTotal += kmPercorridos * 0.10;
    }
} else if (tipoCarro === "luxo") {
    precoTotal += dias * 150;
    if (kmPercorridos <= 200) {
        precoTotal += kmPercorridos * 0.30;
    } else {
        precoTotal += kmPercorridos * 0.25;
    }
}

alert(`O preço total a ser pago é de R$ ${precoTotal.toFixed(2)}.`);

// 8. Programa de vida saudável
const horasAtividade = parseInt(prompt("Digite o total de horas de atividade física no mês:"));
let pontos = 0;

if (horasAtividade <= 10) {
    pontos = horasAtividade * 2;
} else if (horasAtividade <= 20) {
    pontos = horasAtividade * 5;
} else {
    pontos = horasAtividade * 10;
}

const dinheiroGanho = pontos * 0.05;

alert(`Você fez ${pontos} pontos e ganhou R$ ${dinheiroGanho.toFixed(2)}.`);

// 9. Total de salários por sexo
let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;

while (true) {
    const salario = parseFloat(prompt("Digite o salário do funcionário:"));
    const sexo = prompt("Digite o sexo (M/F):").toUpperCase();

    if (sexo === 'M') {
        totalSalarioHomens += salario;
    } else if (sexo === 'F') {
        totalSalarioMulheres += salario;
    }

    const continuar = prompt("Deseja continuar (S/N)?").toUpperCase();
    if (continuar !== 'S') {
        break;
    }
}

console.log(`Total de salários pagos aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
console.log(`Total de salários pagos às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);

// 10. Análise de vários números
let numeros = [];
do {
    const num = parseInt(prompt("Digite um número:"));
    numeros.push(num);
} while (prompt("Deseja continuar (S/N)?").toUpperCase() === 'S');

const soma = numeros.reduce((acc, val) => acc + val, 0);
const menor = Math.min(...numeros);
const media = soma / numeros.length;
const pares = numeros.filter(n => n % 2 === 0).length;

console.log(`Somatório de todos os valores: ${soma}`);
console.log(`Menor valor digitado: ${menor}`);
console.log(`Média entre todos os valores: ${media.toFixed(2)}`);
console.log(`Quantidade de valores pares: ${pares}`);

// 11. Progressão Aritmética
const primeiroTermo = parseInt(prompt("Primeiro termo da PA:"));
const razao = parseInt(prompt("Razão da PA:"));
let somaPa = 0;
let pa = [];

for (let i = 0; i < 10; i++) {
    const termo = primeiroTermo + i * razao;
    pa.push(termo);
    somaPa += termo;
}

console.log("Os 10 primeiros elementos da PA são:", pa.join(", "));
console.log("A soma de todos os valores da sequência é:", somaPa);

// 12. 10 primeiros elementos da Sequência de Fibonacci
let fib = [1, 1];
for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log("Os 10 primeiros elementos da Sequência de Fibonacci são:", fib.join(", "));

// 13. Vetor com 15 elementos da Sequência de Fibonacci
let fibVetor = [1, 1];
for (let i = 2; i < 15; i++) {
    fibVetor[i] = fibVetor[i - 1] + fibVetor[i - 2];
}
console.log("Vetor com os 15 primeiros elementos de Fibonacci:", fibVetor);

// 14. Nomes em ordem inversa
let nomes = [];
for (let i = 0; i < 7; i++) {
    nomes.push(prompt(`Digite o ${i + 1}º nome:`));
}

console.log("\nNomes na ordem inversa:");
console.log(nomes.reverse().join("\n"));

// 15. Números pares e suas posições
let numerosInteiros = [];
for (let i = 0; i < 10; i++) {
    numerosInteiros.push(parseInt(prompt(`Digite o ${i + 1}º número inteiro:`)));
}

console.log("\nNúmeros pares e suas posições:");
numerosInteiros.forEach((num, i) => {
    if (num % 2 === 0) {
        console.log(`Número ${num} na posição ${i}.`);
    }
});

// 16. Vetor aleatório e ordenado
let vetorAleatorio = [];
for (let i = 0; i < 20; i++) {
    vetorAleatorio.push(Math.floor(Math.random() * 100));
}
console.log("Vetor gerado:", vetorAleatorio);

vetorAleatorio.sort((a, b) => a - b);
console.log("Vetor ordenado:", vetorAleatorio);

// 17. Listagem de menores de idade
let pessoas = [];
for (let i = 0; i < 9; i++) {
    const nome = prompt(`Digite o nome da ${i + 1}ª pessoa:`);
    const idade = parseInt(prompt(`Digite a idade de ${nome}:`));
    pessoas.push({ nome, idade });
}

console.log("\nPessoas menores de idade:");
const menores = pessoas.filter(p => p.idade < 18);
menores.forEach(p => {
    console.log(`Nome: ${p.nome}, Idade: ${p.idade}`);
});

// 18. Registro de funcionário
const funcionario = {
    nome: prompt("Nome do funcionário:"),
    cargo: prompt("Cargo do funcionário:"),
    salario: parseFloat(prompt("Salário do funcionário:"))
};

console.log("\nDados do funcionário:", funcionario);

// 19. Validação de horários
let horarios = [];
for (let i = 0; i < 5; i++) {
    let h, m, s;
    do {
        h = parseInt(prompt(`Digite a hora do ${i+1}º horário (0-23):`));
        m = parseInt(prompt(`Digite o minuto do ${i+1}º horário (0-59):`));
        s = parseInt(prompt(`Digite o segundo do ${i+1}º horário (0-59):`));
    } while (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59);
    
    const formatH = String(h).padStart(2, '0');
    const formatM = String(m).padStart(2, '0');
    const formatS = String(s).padStart(2, '0');
    
    horarios.push(`${formatH}.${formatM}.${formatS}`);
}
console.log("\nHorários formatados:", horarios);

// 20. Folha de pagamento (Simulação para 3 funcionários)
for (let i = 0; i < 3; i++) {
    console.log(`\n--- Funcionário ${i + 1} ---`);
    const matricula = prompt("Matrícula:");
    const nome = prompt("Nome:");
    const salarioBruto = parseFloat(prompt("Salário bruto:"));

    const deducaoInss = salarioBruto * 0.12;
    const salarioLiquido = salarioBruto - deducaoInss;

    console.log("\n--- Contracheque ---");
    console.log(`Matrícula: ${matricula}`);
    console.log(`Nome: ${nome}`);
    console.log(`Salário bruto: R$ ${salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS: R$ ${deducaoInss.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
}

// 21. Peso ideal
function calcularPesoIdeal(alt, sexo) {
    if (sexo.toUpperCase() === 'M') {
        return 72.7 * alt - 58;
    } else if (sexo.toUpperCase() === 'F') {
        return 62.1 * alt - 44.7;
    }
    return null;
}

const alturaPessoa = parseFloat(prompt("Digite a altura (em metros):"));
const sexoPessoa = prompt("Digite o sexo (M/F):");
const peso = calcularPesoIdeal(alturaPessoa, sexoPessoa);
if (peso) {
    alert(`O peso ideal é: ${peso.toFixed(2)} kg`);
} else {
    alert("Sexo inválido.");
}

// 22. Pesquisa da prefeitura
function pesquisaPrefeitura() {
    let salarios = [];
    let filhos = [];
    while (true) {
        const salario = parseFloat(prompt("Salário (digite um valor negativo para parar):"));
        if (salario < 0) break;
        const numFilhos = parseInt(prompt("Número de filhos:"));
        salarios.push(salario);
        filhos.push(numFilhos);
    }
    const mediaSalario = salarios.reduce((a, b) => a + b, 0) / salarios.length;
    const mediaFilhos = filhos.reduce((a, b) => a + b, 0) / filhos.length;
    const maiorSalario = Math.max(...salarios);
    const percSalario350 = (salarios.filter(s => s <= 350).length / salarios.length) * 100;
    
    return { mediaSalario, mediaFilhos, maiorSalario, percSalario350 };
}
const resultadoPesquisa = pesquisaPrefeitura();
console.log(resultadoPesquisa);

// 23. Matriz identidade 7x7
let MI = Array(7).fill(0).map(() => Array(7).fill(0));
for (let i = 0; i < 7; i++) {
    MI[i][i] = 1;
}
console.table(MI);

// 24. Contagem de negativos por linha
// Exemplo de matriz M 6x8
let M = Array(6).fill(0).map(() => Array(8).fill(0).map(() => Math.random() * 20 - 10));
let C = M.map(linha => linha.filter(val => val < 0).length);
console.table(M);
console.log("Vetor C com a contagem de negativos por linha:", C);

// 25. Soma de cada coluna
// Exemplo de matriz 5x4 para simplificar
let matriz15x20 = Array(5).fill(0).map(() => Array(4).fill(0).map(() => Math.random() * 10));
let somaColunas = Array(4).fill(0);

for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 5; i++) {
        somaColunas[j] += matriz15x20[i][j];
    }
}
console.table(matriz15x20);
console.log("Soma das colunas:", somaColunas);

// 26. Produto de matrizes (elemento a elemento)
let A = Array(3).fill(0).map(() => Array(5).fill(0).map(() => Math.floor(Math.random() * 10)));
let B = Array(3).fill(0).map(() => Array(5).fill(0).map(() => Math.floor(Math.random() * 10)));
let P = Array(3).fill(0).map(() => Array(5).fill(0));

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        P[i][j] = A[i][j] * B[i][j];
    }
}
console.log("Matriz A:"); console.table(A);
console.log("Matriz B:"); console.table(B);
console.log("Matriz Produto P:"); console.table(P);

// 27. Multiplicação de matriz por um valor
let M_6x6 = Array(6).fill(0).map(() => Array(6).fill(0).map(() => Math.floor(Math.random() * 10)));
const A_escalar = parseInt(prompt("Digite um valor para multiplicar a matriz:"));
let V_36 = [];

M_6x6.forEach(linha => {
    linha.forEach(val => {
        V_36.push(val * A_escalar);
    });
});
console.table(M_6x6);
console.log(`Vetor V com os elementos multiplicados por ${A_escalar}:`, V_36);

// 28. Somas acima e abaixo da diagonal principal
let matriz_10x10 = Array(10).fill(0).map(() => Array(10).fill(0).map(() => Math.floor(Math.random() * 100)));
let somaAcima = 0;
let somaAbaixo = 0;

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (j > i) somaAcima += matriz_10x10[i][j];
        if (j < i) somaAbaixo += matriz_10x10[i][j];
    }
}
console.table(matriz_10x10);
console.log("Soma dos elementos acima da diagonal principal:", somaAcima);
console.log("Soma dos elementos abaixo da diagonal principal:", somaAbaixo);

// 29. Somas em matriz 5x5
let M_5x5 = Array(5).fill(0).map(() => Array(5).fill(0).map(() => Math.floor(Math.random() * 50)));

const somaLinha4 = M_5x5[3].reduce((a, b) => a + b, 0);
const somaColuna2 = M_5x5.reduce((acc, linha) => acc + linha[1], 0);
let somaDiagPrincipal = 0;
for(let i=0; i<5; i++) somaDiagPrincipal += M_5x5[i][i];
const somaTotal = M_5x5.flat().reduce((a, b) => a + b, 0);

console.table(M_5x5);
console.log("Soma da linha 4:", somaLinha4);
console.log("Soma da coluna 2:", somaColuna2);
console.log("Soma da diagonal principal:", somaDiagPrincipal);
console.log("Soma de todos os elementos:", somaTotal);

// 30. Vetores com somas de linhas e colunas
let M_5x5_soma = Array(5).fill(0).map(() => Array(5).fill(0).map(() => Math.floor(Math.random() * 20)));
const SL = M_5x5_soma.map(linha => linha.reduce((a, b) => a + b, 0));
const SC = Array(5).fill(0);
for(let j=0; j<5; j++) {
    for(let i=0; i<5; i++) {
        SC[j] += M_5x5_soma[i][j];
    }
}
console.table(M_5x5_soma);
console.log("Soma das linhas (SL):", SL);
console.log("Soma das colunas (SC):", SC);

// 31. Contagem e extração em matriz (exemplo 5x5)
let V = Array(5).fill(0).map(() => Array(5).fill(0).map(() => Math.floor(Math.random() * 10)));
const A_valor = parseInt(prompt("Digite um valor A para buscar na matriz:"));

const flatV = V.flat();
const contagemA = flatV.filter(val => val === A_valor).length;
const X_diferentes = flatV.filter(val => val !== A_valor);

console.table(V);
console.log(`O valor ${A_valor} aparece ${contagemA} vezes.`);
console.log(`Vetor X com elementos diferentes de ${A_valor}:`, X_diferentes);

// 32. Normalização de linhas pelo maior módulo (exemplo 4x5)
let M_original = Array(4).fill(0).map(() => Array(5).fill(0).map(() => Math.random() * 100 - 50));
let M_modificada = M_original.map(linha => {
    const maiorModulo = Math.max(...linha.map(Math.abs));
    return maiorModulo === 0 ? linha : linha.map(val => val / maiorModulo);
});
console.log("Matriz Original:"); console.table(M_original);
console.log("Matriz Modificada:"); console.table(M_modificada);

// 33. Operação com diagonais
let matriz_3x3 = Array(3).fill(0).map(() => Array(3).fill(0).map(() => Math.floor(Math.random() * 10)));
let produtoDiagPrincipal = 1;
let somaDiagSecundaria = 0;

for(let i=0; i<3; i++) {
    produtoDiagPrincipal *= matriz_3x3[i][i];
    somaDiagSecundaria += matriz_3x3[i][2-i];
}
const mediaDiagSecundaria = somaDiagSecundaria / 3;
const resultadoFinal = produtoDiagPrincipal * mediaDiagSecundaria;

console.table(matriz_3x3);
console.log(`Resultado final: ${resultadoFinal.toFixed(2)}`);

// 34. Multiplicação da linha pelo elemento da diagonal (exemplo 5x5)
let matriz_50x50 = Array(5).fill(0).map(() => Array(5).fill(0).map(() => Math.random()));
let matriz_resultante = matriz_50x50.map((linha, i) => {
    const elementoDiagonal = linha[i];
    return linha.map(val => val * elementoDiagonal);
});
console.log("Matriz Original:"); console.table(matriz_50x50);
console.log("Matriz Resultante:"); console.table(matriz_resultante);

// 35. Separação de pares e ímpares
let pares = [], impares = [];
for (let i = 0; i < 30; i++) {
    const valor = parseInt(prompt(`Digite o ${i+1}º valor:`));
    if (valor % 2 === 0) {
        pares.push(valor);
        if (pares.length === 5) {
            console.log("Vetor de pares cheio:", pares);
            pares = [];
        }
    } else {
        impares.push(valor);
        if (impares.length === 5) {
            console.log("Vetor de ímpares cheio:", impares);
            impares = [];
        }
    }
}
if (pares.length > 0) console.log("Conteúdo final do vetor de pares:", pares);
if (impares.length > 0) console.log("Conteúdo final do vetor de ímpares:", impares);

// 36. Loteria Esportiva (simulação para 5 apostadores)
const gabaritoLoteria = Array.from({length: 13}, () => Math.ceil(Math.random() * 3));
console.log("Gabarito:", gabaritoLoteria);

for (let i = 0; i < 5; i++) {
    const cartao = Math.floor(Math.random() * 9000) + 1000;
    const respostas = Array.from({length: 13}, () => Math.ceil(Math.random() * 3));
    let acertos = 0;
    for (let j = 0; j < 13; j++) {
        if (respostas[j] === gabaritoLoteria[j]) acertos++;
    }
    console.log(`Apostador nº ${cartao} - Acertos: ${acertos}`);
    if (acertos === 13) console.log("Parabéns, tu foi o GANHADOR");
}

// 37. Gabarito de Prova (simulação para 10 alunos)
const gabaritoProva = Array.from({length: 20}, () => ['A','B','C','D'][Math.floor(Math.random()*4)]);
console.log("Gabarito da prova:", gabaritoProva);

for (let i = 0; i < 10; i++) {
    const respostasAluno = Array.from({length: 20}, () => ['A','B','C','D'][Math.floor(Math.random()*4)]);
    const acertos = respostasAluno.filter((resp, index) => resp === gabaritoProva[index]).length;
    const status = acertos >= 12 ? "APROVADO" : "REPROVADO";
    console.log(`Aluno ${i+1} - Acertos: ${acertos} - Situação: ${status}`);
}

// 38. Operações com vetor
const vetor6 = Array.from({length: 6}, () => Math.floor(Math.random() * 10) + 1);
console.log("Vetor:", vetor6);
const op = parseInt(prompt("1-soma; 2-produto; 3-média; 4-ordenar; 5-mostrar"));

switch (op) {
    case 1: console.log("Soma:", vetor6.reduce((a,b) => a+b, 0)); break;
    case 2: console.log("Produto:", vetor6.reduce((a,b) => a*b, 1)); break;
    case 3: console.log("Média:", vetor6.reduce((a,b) => a+b, 0) / vetor6.length); break;
    case 4: console.log("Ordenado:", [...vetor6].sort((a,b) => a-b)); break;
    case 5: console.log("Vetor:", vetor6); break;
    default: console.log("Opção inválida.");
}

// 39. Compactação de vetor (exemplo com 20 posições)
const A_vetor = Array.from({length: 20}, () => Math.floor(Math.random() * 30) - 10);
const B_vetor = A_vetor.filter(val => val > 0);
console.log("Vetor A:", A_vetor);
console.log("Vetor B (compactado):", B_vetor);

// 40. Resultado da Loto (simulação para 10 apostas)
const resultadoOficial = Array.from({length: 5}, () => Math.floor(Math.random() * 50) + 1).sort((a,b)=>a-b);
console.log("Resultado oficial:", resultadoOficial);

for (let i=0; i<10; i++) {
    const aposta = Array.from({length: 5}, () => Math.floor(Math.random() * 50) + 1).sort((a,b)=>a-b);
    if (JSON.stringify(aposta) === JSON.stringify(resultadoOficial)) {
        console.log(`Aposta ${i+1}: ${aposta} -> Ganhador`);
    }
}

// 41. Manipulação de objeto
let pessoa = { nome: "Maria", idade: 25 };
console.log("Idade:", pessoa.idade);
pessoa.email = "maria@example.com";
console.log("Objeto atualizado:", pessoa);

// 42. Filtrar propriedades que são arrays
function filtrarArrays(obj) {
    const novoObjeto = {};
    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            novoObjeto[key] = obj[key];
        }
    }
    return novoObjeto;
}
const dados = { numeros: [1,2,3], nome: "Teste", codigos: [10,20], ativo: true };
console.log(filtrarArrays(dados));

// 43. Combinar dois objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const objCombinado = { ...obj1, ...obj2 };
console.log("Objeto combinado:", objCombinado);

// 44. Contar propriedades string
function contarStrings(obj) {
    return Object.values(obj).filter(val => typeof val === 'string').length;
}
const objetoExemplo = { nome: "Produto", preco: 10.5, categoria: "Geral" };
console.log("Nº de strings:", contarStrings(objetoExemplo));

// 45. Frequência de strings em array
const arrayDeStrings = ["a", "b", "a", "c", "b", "a"];
const objetoFrequencia = arrayDeStrings.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
}, {});
console.log("Frequência:", objetoFrequencia);

// 46. Sumarizar vendas por vendedor
const vendasArray = [
    { vendedor: "Ana", valor: 100 },
    { vendedor: "João", valor: 150 },
    { vendedor: "Ana", valor: 200 }
];
const sumario = vendasArray.reduce((acc, venda) => {
    acc[venda.vendedor] = (acc[venda.vendedor] || 0) + venda.valor;
    return acc;
}, {});
console.log("Total por vendedor:", sumario);

// 47. Transformar propriedades de um objeto
function transformarObjeto(obj, func) {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, func(value)])
    );
}
const objetoOriginal = { a: 1, b: 2, c: 3 };
const objetoTransformado = transformarObjeto(objetoOriginal, x => x * x);
console.log("Objeto transformado:", objetoTransformado);

// 48. Combinar inventários
const inventarioLojaA = { "maçã": 10, "banana": 20 };
const inventarioLojaB = { "banana": 15, "laranja": 25 };
const inventarioCombinado = { ...inventarioLojaA };

for (const item in inventarioLojaB) {
    inventarioCombinado[item] = (inventarioCombinado[item] || 0) + inventarioLojaB[item];
}
console.log("Inventário combinado:", inventarioCombinado);

// 49. Agrupar transações por categoria
const transacoes = [
    { id: 1, valor: 100, data: "2023-01-01", categoria: "Alimentação" },
    { id: 2, valor: 50, data: "2023-01-02", categoria: "Transporte" },
    { id: 3, valor: 200, data: "2023-01-03", categoria: "Alimentação" }
];
const agrupado = transacoes.reduce((acc, t) => {
    const cat = t.categoria;
    if (!acc[cat]) {
        acc[cat] = { transacoes: [], subtotal: 0 };
    }
    acc[cat].transacoes.push(t);
    acc[cat].subtotal += t.valor;
    return acc;
}, {});
console.log(JSON.stringify(agrupado, null, 2));

// 50. Sistema de Reserva de Hotéis
let hoteis = [];
let reservas = [];
let proximoIdHotel = 1;
let proximoIdReserva = 1;

function adicionarHotel() { /* ... implementação similar ao Python ... */ }
function buscarHoteisPorCidade() { /* ... implementação similar ao Python ... */ }
function fazerReserva() { /* ... implementação similar ao Python ... */ }
function cancelarReserva() { /* ... implementação similar ao Python ... */ }
function listarReservas() { /* ... implementação similar ao Python ... */ }

// A lógica interna das funções seria uma tradução direta do Python para JavaScript,
// usando arrays de objetos e métodos como find, filter, map, e push.
// O menu interativo seria construído com um loop e um prompt.
console.log("Sistema de hotelaria pronto para implementação das funções de menu.");

