"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { calcularMDC } = require("../src/mdc");

test("calcularMDC retorna o MDC de dois inteiros positivos", () => {
  assert.equal(calcularMDC(54, 24), 6);
  assert.equal(calcularMDC(48, 18), 6);
});

test("calcularMDC funciona com ordem invertida dos parametros", () => {
  assert.equal(calcularMDC(24, 54), 6);
});

test("calcularMDC funciona quando um dos valores e zero", () => {
  assert.equal(calcularMDC(0, 10), 10);
  assert.equal(calcularMDC(10, 0), 10);
});

test("calcularMDC aceita valores negativos e usa valor absoluto", () => {
  assert.equal(calcularMDC(-54, 24), 6);
  assert.equal(calcularMDC(54, -24), 6);
});

test("calcularMDC rejeita caso ambos sejam zero", () => {
  assert.throws(() => calcularMDC(0, 0), /MDC indefinido/i);
});

test("calcularMDC rejeita entradas nao inteiras", () => {
  assert.throws(() => calcularMDC(10.5, 2), /inteiro/i);
  assert.throws(() => calcularMDC("10", 2), /inteiro/i);
});
