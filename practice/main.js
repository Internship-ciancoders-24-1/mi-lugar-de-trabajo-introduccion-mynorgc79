

function calcular(valor) {
    let numero = 0;
    let digitosNumero = "";
    let operador = "+";
    let pila = [];

    if (valor.length > 20){
        throw new Error ( 'la Expresión excede los 20 caracteres ');
    }

    for (let i = 0; i < valor.length; i++) {
        const char = valor[i];

        if (!isNaN(char) || char === ".") {
            digitosNumero += char;
        } else if (char === "+" || char === "-" || char === "*" || char === "/") {

            if (digitosNumero !== "") {
                numero = parseFloat(digitosNumero);
                pila.push(operador === "+" ? numero : operador === "-" ? -numero : operador === "*" ? pila.pop() * numero : pila.pop() / numero);
            }
            operador = char;
            digitosNumero = "";
        }
    }

    if (digitosNumero !== "") {
        numero = parseFloat(digitosNumero);
        pila.push(operador === "+" ? numero : operador === "-" ? -numero : operador === "*" ? pila.pop() * numero : pila.pop() / numero);
    }

    let result = 0;
    while (pila.length > 0) {
        result += pila.pop();
    }

    return result;
}

const expression = '4-7+8+9/2*3*2*3';
const result = calcular(expression);
console.log(`El resultado es -->  ${result} `); // 18.5
