function suma(a, b) {
    return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) {
            reject("Operación innecesaria");
        } else {
            const result = a + b;
            if (result < 0) {
                reject("La calculadora sólo debe devolver valores positivos");
            } else {
                resolve(result);
            }
        }
    });
}

suma(3, 4)
    .then(resultado => {
        console.log("El resultado de la suma es:", resultado);
    })
    .catch(error => {
        console.error("Error:", error);
    });

function resta(minuendo, sustraendo) {
    return new Promise((resolve, reject) => {
        if (minuendo === 0 || sustraendo === 0) {
            reject("Operación inválida");
        } else {
            const resultado = minuendo - sustraendo;
            if (resultado < 0) {
                reject("La calculadora sólo puede devolver valores positivos");
            } else {
                resolve(resultado);
            }
        }
    });
}


function multiplicación(factor1, factor2) {
    return new Promise((resolve, reject) => {
        if (factor1 >= 0 && factor2 >= 0) {
            const producto = factor1 * factor2;
            if (producto >= 0) {
                resolve(producto);
            } else {
                reject("La calculadora sólo puede devolver valores positivos");
            }
        } else {
            reject("Ambos factores deben ser no negativos");
        }
    });
}

function división(dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor !== 0) {
            const cociente = dividendo / divisor;
            resolve(cociente);
        } else {
            reject("La división entre cero no está definida");
        }
    });
}

async function cálculos() {
    try {
        const resultadoMultiplicación = await multiplicación(5, 4);
        console.log("Resultado de la multiplicación:", resultadoMultiplicación);

        const resultadoDivisión = await división(10, 2);
        console.log("Resultado de la división:", resultadoDivisión);

        const resultadoMultiplicaciónNegativa = await multiplicación(5, -4);
        console.log("Resultado de la multiplicación negativa:", resultadoMultiplicaciónNegativa);
    } catch (error) {
        console.error("Error:", error);
    }
}

cálculos();
