# Exercicios de Qualidade de Software (JavaScript)

Projeto com a solucao de 3 desafios propostos em aula, com foco em boas praticas:

- funcoes com responsabilidade unica;
- validacao explicita de entrada;
- mensagens de erro claras;
- testes automatizados com cobertura de cenarios validos e invalidos.

## Estrutura

```text
.
|-- src
|   |-- desafio1_mdc.js
|   |-- desafio2_indices.js
|   `-- desafio3_soma_multiplos.js
`-- tests
    |-- desafio1_mdc.test.js
    |-- desafio2_indices.test.js
    `-- desafio3_soma_multiplos.test.js
```

## Desafios e APIs

1. MDC entre dois numeros inteiros
- Arquivo: `src/desafio1_mdc.js`
- API: `calcularMDC(a, b): number`
- Decisao tecnica: algoritmo de Euclides, com suporte a inteiros negativos (via valor absoluto).

2. Indice do maior e do menor valor em array sem repeticao
- Arquivo: `src/desafio2_indices.js`
- API: `obterIndicesMaiorEMenor(array): { indiceMaior, indiceMenor }`
- Decisao tecnica: varredura unica do array com controle de repeticao por `Set`.

3. Soma de multiplos abaixo de um limite
- Arquivo: `src/desafio3_soma_multiplos.js`
- API: `somarMultiplosAbaixoDoLimite(limite, divisores): number`
- Decisao tecnica: iteracao de `1` ate `limite - 1` e verificacao por lista de divisores unicos, evitando soma duplicada.

## Como executar

Requisitos:

- Node.js 18+ (testado com Node 22)

Comandos:

```bash
npm install
npm run desafios
```

Ou execute cada desafio:

```bash
npm run desafio1
npm run desafio2
npm run desafio3
```

## Como testar

```bash
npm test
```

Os testes usam o runner nativo do Node (`node:test`) com `assert/strict`.
