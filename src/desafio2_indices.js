"use strict";

function obterIndicesMaiorEMenor(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("array deve ser um array de numeros.");
  }

  if (array.length === 0) {
    throw new RangeError("array nao pode ser vazio.");
  }

  const vistos = new Set();
  let indiceMaior = 0;
  let indiceMenor = 0;

  for (let i = 0; i < array.length; i += 1) {
    const valor = array[i];

    if (!Number.isFinite(valor)) {
      throw new TypeError("array deve conter apenas numeros finitos.");
    }

    if (vistos.has(valor)) {
      throw new RangeError("array nao pode conter valores repetidos.");
    }
    vistos.add(valor);

    if (valor > array[indiceMaior]) {
      indiceMaior = i;
    }

    if (valor < array[indiceMenor]) {
      indiceMenor = i;
    }
  }

  return { indiceMaior, indiceMenor };
}

module.exports = { obterIndicesMaiorEMenor };

if (require.main === module) {
  const valores = [12, 4, 18, 7, -3, 15];
  const resultado = obterIndicesMaiorEMenor(valores);
  console.log("Array:", valores);
  console.log("Resultado:", resultado);
}
