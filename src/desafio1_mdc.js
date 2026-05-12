"use strict";

function validarInteiro(valor, nomeParametro) {
  if (!Number.isInteger(valor)) {
    throw new TypeError(`${nomeParametro} deve ser um numero inteiro.`);
  }
}

function calcularMDC(a, b) {
  validarInteiro(a, "a");
  validarInteiro(b, "b");

  let x = Math.abs(a);
  let y = Math.abs(b);

  if (x === 0 && y === 0) {
    throw new RangeError("MDC indefinido para a = 0 e b = 0.");
  }

  while (y !== 0) {
    const resto = x % y;
    x = y;
    y = resto;
  }

  return x;
}

module.exports = { calcularMDC };

if (require.main === module) {
  const a = 54;
  const b = 24;
  console.log(`MDC(${a}, ${b}) = ${calcularMDC(a, b)}`);
}
