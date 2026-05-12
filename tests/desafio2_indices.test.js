"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { obterIndicesMaiorEMenor } = require("../src/desafio2_indices");

test("obterIndicesMaiorEMenor retorna os indices corretos", () => {
  const array = [12, 4, 18, 7, -3, 15];
  assert.deepEqual(obterIndicesMaiorEMenor(array), {
    indiceMaior: 2,
    indiceMenor: 4,
  });
});

test("obterIndicesMaiorEMenor funciona com array de um elemento", () => {
  assert.deepEqual(obterIndicesMaiorEMenor([99]), {
    indiceMaior: 0,
    indiceMenor: 0,
  });
});

test("obterIndicesMaiorEMenor rejeita array vazio", () => {
  assert.throws(() => obterIndicesMaiorEMenor([]), /vazio/i);
});

test("obterIndicesMaiorEMenor rejeita argumento que nao e array", () => {
  assert.throws(() => obterIndicesMaiorEMenor("1,2,3"), /array/i);
});

test("obterIndicesMaiorEMenor rejeita valores repetidos", () => {
  assert.throws(() => obterIndicesMaiorEMenor([1, 3, 2, 3]), /repetidos/i);
});

test("obterIndicesMaiorEMenor rejeita valores nao numericos", () => {
  assert.throws(() => obterIndicesMaiorEMenor([1, "2", 3]), /numeros finitos/i);
});
