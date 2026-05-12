"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const {
  somarMultiplosAbaixoDoLimite,
} = require("../src/desafio3_soma_multiplos");

test("somarMultiplosAbaixoDoLimite calcula o caso do enunciado adaptado", () => {
  assert.equal(somarMultiplosAbaixoDoLimite(1000, [5, 7]), 156361);
});

test("somarMultiplosAbaixoDoLimite funciona com limites pequenos", () => {
  assert.equal(somarMultiplosAbaixoDoLimite(0, [5, 7]), 0);
  assert.equal(somarMultiplosAbaixoDoLimite(1, [5, 7]), 0);
  assert.equal(somarMultiplosAbaixoDoLimite(10, [5, 7]), 12);
});

test("somarMultiplosAbaixoDoLimite nao duplica multiplos em comum", () => {
  assert.equal(somarMultiplosAbaixoDoLimite(30, [3, 5]), 195);
  assert.equal(somarMultiplosAbaixoDoLimite(30, [3, 5, 3]), 195);
});

test("somarMultiplosAbaixoDoLimite rejeita limite invalido", () => {
  assert.throws(() => somarMultiplosAbaixoDoLimite(-1, [5, 7]), /maior ou igual/i);
  assert.throws(() => somarMultiplosAbaixoDoLimite(10.5, [5, 7]), /inteiro/i);
});

test("somarMultiplosAbaixoDoLimite rejeita divisores invalidos", () => {
  assert.throws(() => somarMultiplosAbaixoDoLimite(10, []), /nao vazio/i);
  assert.throws(() => somarMultiplosAbaixoDoLimite(10, [5, 0]), /maior que zero/i);
  assert.throws(() => somarMultiplosAbaixoDoLimite(10, [5, 2.5]), /inteiro/i);
});
