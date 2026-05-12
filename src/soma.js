"use strict";

function validarLimite(limite) {
  if (!Number.isInteger(limite)) {
    throw new TypeError("limite deve ser um numero inteiro.");
  }

  if (limite < 0) {
    throw new RangeError("limite deve ser maior ou igual a zero.");
  }
}

function validarDivisores(divisores) {
  if (!Array.isArray(divisores) || divisores.length === 0) {
    throw new TypeError("divisores deve ser um array nao vazio.");
  }

  for (const divisor of divisores) {
    if (!Number.isInteger(divisor)) {
      throw new TypeError("cada divisor deve ser um numero inteiro.");
    }

    if (divisor <= 0) {
      throw new RangeError("cada divisor deve ser maior que zero.");
    }
  }
}

function somarMultiplosAbaixoDoLimite(limite, divisores) {
  validarLimite(limite);
  validarDivisores(divisores);

  const divisoresUnicos = [...new Set(divisores)];
  let soma = 0;

  for (let numero = 1; numero < limite; numero += 1) {
    if (divisoresUnicos.some((divisor) => numero % divisor === 0)) {
      soma += numero;
    }
  }

  return soma;
}

module.exports = { somarMultiplosAbaixoDoLimite };

if (require.main === module) {
  const limite = 1000;
  const divisores = [5, 7];
  const resultado = somarMultiplosAbaixoDoLimite(limite, divisores);
  console.log(
    `Soma dos multiplos de ${divisores.join(" ou ")} abaixo de ${limite}: ${resultado}`
  );
}
