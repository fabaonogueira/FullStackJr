# Exercícios de POO em Java — 1 a 8

Conjunto de exercícios didáticos em **Java** cobrindo encapsulamento, validações, herança,
polimorfismo (interfaces), abstração, imutabilidade, *generics* e o padrão **Strategy** com *lambdas*.

> Recomendado **JDK 17+**. Os exemplos usam o **VS Code** e o terminal integrado.

---

## Sumário
- [Pré‑requisitos](#pré-requisitos)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Como compilar e executar](#como-compilar-e-executar)
- [Exercícios](#exercícios)
  - [1) Encapsulamento — Classe Produto](#1-encapsulamento--classe-produto)
  - [2) Regra de Desconto](#2-regra-de-desconto)
  - [3) Herança — Funcionários](#3-herança--funcionários)
  - [4) Interface e Polimorfismo — IMeioTransporte](#4-interface-e-polimorfismo--imeiotransporte)
  - [5) Abstração — Sistema de Pagamentos](#5-abstração--sistema-de-pagamentos)
  - [6) Imutabilidade — Carrinho de Compras](#6-imutabilidade--carrinho-de-compras)
  - [7) Generics — Repositório em Memória](#7-generics--repositório-em-memória)
  - [8) Strategy com Lambdas — Cálculo de Frete](#8-strategy-com-lambdas--cálculo-de-frete)
- [Solução de problemas](#solução-de-problemas)
- [Licença](#licença)

---

## Pré‑requisitos

- **JDK 17+** (Adoptium/Oracle/OpenJDK).
- **VS Code** com *Extension Pack for Java* (ou IDE equivalente).
- (Opcional) **Git** para versionamento.

Verificações rápidas:
```powershell
java -version
javac -version
git --version
```

---

## Estrutura de pastas

Recomendação para organizar os exercícios:

```
.
├─ exercicio1/
│   └─ src/         # classes do exercício 1
├─ exercicio2/
│   └─ src/
├─ ...
└─ exercicio8/
    └─ src/
```

Cada exercício possui um `Main.java` de demonstração.

---

## Como compilar e executar

Dentro da pasta de **cada** exercício (onde existe a subpasta `src`):

```powershell
# 1) Compilar para a pasta bin
mkdir bin
javac -encoding UTF-8 -d bin src\*.java

# 2) Executar (classe Main)
java -Dfile.encoding=UTF-8 -cp bin Main
```

> O `-encoding UTF-8` e `-Dfile.encoding=UTF-8` evitam problemas de acentuação no terminal.

**Linux/macOS** (mesmos comandos, trocando barras):  
`javac -encoding UTF-8 -d bin src/*.java` e `java -Dfile.encoding=UTF-8 -cp bin Main`.

---

## Exercícios

### 1) Encapsulamento — Classe Produto
- `Produto`: atributos privados (`nome`, `preco`, `quantidadeEmEstoque`), *getters* e *setters* com validação.
- Regras: `nome` não pode ser nulo/vazio; `preco`/`quantidade` não podem ser negativos.
- Lança `IllegalArgumentException` em entradas inválidas.
- `Main` demonstra criações, alterações válidas e tentativas inválidas.

### 2) Regra de Desconto
- Método `aplicarDesconto(double porcentagem)` em `Produto`.
- Aceita **0% a 50%** (inclusive); acima/abaixo lança `DescontoInvalidoException` (ou `IllegalArgumentException`).
- Demonstração: preço **antes/depois** e reações a entradas inválidas.

### 3) Herança — Funcionários
- Base abstrata `Funcionario` (`nome`, `salario: BigDecimal`).
- Subclasses: `Gerente` (bônus **20%**), `Desenvolvedor` (**10%**).
- Validação: salário **positivo**.
- Uso: `List<Funcionario>` iterando e exibindo bônus (polimorfismo).

### 4) Interface e Polimorfismo — IMeioTransporte
- Interface `IMeioTransporte { acelerar(); frear(); getVelocidade(); }`.
- Implementações: `Carro`, `Bicicleta`, `Trem` com limites e validações próprias.
- Demonstra polimorfismo percorrendo `List<IMeioTransporte>` e tratando exceções.

### 5) Abstração — Sistema de Pagamentos
- Abstração `FormaPagamento` com `validarPagamento()` e `processarPagamento(BigDecimal)`.
- Implementações: `CartaoCredito` (Luhn, CVV e validade), `Boleto` (47/48 dígitos), `Pix` (e‑mail/telefone/CPF/CNPJ/UUID).
- Exceção específica `PagamentoInvalidoException` para erros de validação.
- `Main` simula pagamentos válidos/invalidos e mensagens de erro.

### 6) Imutabilidade — Carrinho de Compras
- Objeto de valor **imutável** `Dinheiro` (`BigDecimal` + `Moeda`) com arredondamento bancário (`HALF_EVEN`, 2 casas).
- `Produto`, `ItemCarrinho` e `Carrinho` imutáveis.
- Operações `adicionar`, `remover`, `aplicarCupom` retornam **novo carrinho**.
- Cupom limitado a **30%**. Quantidades devem ser `> 0` e sem valores negativos.

### 7) Generics — Repositório em Memória
- `Identificavel<ID>` + `IRepository<T extends Identificavel<ID>, ID>`.
- `InMemoryRepository<T, ID>` com `Map<ID, T>`; `listarTodos()` retorna **cópia imutável**.
- `remover(ID)` lança `EntidadeNaoEncontradaException` quando o ID não existe.
- Exemplos com entidades `Produto` e `Funcionario`.

### 8) Strategy com Lambdas — Cálculo de Frete
- `FreteStrategy` (funcional) + `CalculadoraFrete`.
- Estratégias: `Sedex`, `Pac`, `RetiradaNaLoja`.
- Promo via **lambda**: `Fretes.gratisSeAcimaDe(limite, base)` → frete grátis acima de *X*.
- Validação de CEP (8 dígitos) com `CepInvalidoException` e demonstração de **troca de estratégia em runtime**.

---

## Solução de problemas

### `UnsupportedClassVersionError`
Runtime (`java -version`) diferente do compilador (`javac -version`).  
Alinhe o **JAVA_HOME/PATH** ou compile para versão antiga:
```powershell
javac --release 8 -d bin src\*.java
```

### Acentuação exibindo �
Compile/execute em UTF‑8:
```powershell
javac -encoding UTF-8 -d bin src\*.java
java -Dfile.encoding=UTF-8 -cp bin Main
```

### VS Code não mostra botão Run
Abra a *Command Palette* → **Java: Configure Classpath** e selecione `src`.

---

## 🧾 Licença
Este projeto é de uso acadêmico e livre para fins educacionais.

---

<!-- Início da seção "Contato" -->
<h2>🌐 Contate-me: </h2>
<div>
  <p>Developed by <b>Fábio Nogueira</b></p>
</div>
<p>
<a href="https://www.linkedin.com/in/faanogueira/" target="_blank"><img style="padding-right: 10px;" src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" target="_blank" width="80"></a>
<a href="https://github.com/faanogueira" target="_blank"><img style="padding-right: 10px;" src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" target="_blank" width="80"></a>
<a href="https://api.whatsapp.com/send?phone=5571983937557" target="_blank"><img style="padding-right: 10px;" src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" target="_blank" width="80"></a>
<a href="mailto:faanogueira@gmail.com"><img style="padding-right: 10px;" src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" target="_blank" width="80"></a> 
</p>
<!-- Fim da seção "Contato" -->