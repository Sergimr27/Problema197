// Creamos una función llamada 'transformarMensaje1' que toma un argumento llamado 'mensaje'
function transformarMensaje1(mensaje) {
    // Divide el 'mensaje' en un array de caracteres y lo almacena en 'mensajeArray'
    const mensajeArray = mensaje.split("");
    // Creamos dos arrays, 'final' y 'inicial', para almacenar los caracteres finales e iniciales respectivamente
    const final = [];
    const inicial = [];

    // Recorre cada caracter en 'mensajeArray'
    for (let i = 0; i < mensajeArray.length; i++) {
        // Si la posición actual 'i' es par (comienza en 0), agrega el caracter a 'inicial'
        if (i % 2 === 0) {
            inicial.push(mensajeArray[i]);
        } else {
            // Si la posición actual 'i' es impar, agrega el caracter a 'final'
            final.push(mensajeArray[i]);
        }
    }

    // Invierte el contenido de 'final' y lo almacena en 'finalBueno'
    const finalBueno = final.reverse();
    // Concatena los arrays 'inicial' y 'finalBueno' en un nuevo string 'mensaje1'
    const mensaje1 = inicial.join("") + finalBueno.join("");
    // Retorna 'mensaje1'
    return mensaje1;
}

//  'transformarMensaje2' que toma un argumento llamado 'mensaje'
function transformarMensaje2(mensaje) {
    // Divide el 'mensaje' en un array de caracteres y lo almacena en 'primeraEQ'
    const primeraEQ = mensaje.split("");
    // Agrega un punto al final del array 'primeraEQ'
    primeraEQ.push(".");
    // Define un array llamado 'vocales' que contiene vocales y un punto
    const vocales = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u", "."];

    // Inicializa contadores y arrays para el procesamiento
    let cont = 0;
    let original = [];
    let conso = [];

    // Recorre cada caracter en 'primeraEQ'
    for (let i = 0; i < primeraEQ.length; i++) {
        // Si el caracter actual está en 'vocales'
        if (vocales.includes(primeraEQ[i])) {
            // Si 'conso' no está vacío, invierte su contenido y agrega al 'original'
            if (conso.length > 0) {
                const consoBueno = conso.reverse();
                original.push(...consoBueno);
            }
            // Agrega el caracter actual al 'original'
            const valor = primeraEQ[i];
            original.push(valor);
            // Reinicia el contador de consonantes 'cont' y el array 'conso'
            cont = 0;
            conso = [];
        } else {
            // Si el caracter actual no es una vocal
            cont++;
            if (cont === 1) {
                // Si es la primera consonante de una cadena de consonantes, decide si agregarla a 'original' o 'conso'
                if (vocales.includes(primeraEQ[i + 1])) {
                    const valor = primeraEQ[i];
                    original.push(valor);
                } else {
                    const valor = primeraEQ[i];
                    conso.push(valor);
                }
            } else {
                // Si no es la primera consonante, agrega el caracter a 'conso'
                const valor = primeraEQ[i];
                conso.push(valor);
            }
        }
    }

    // Elimina el último elemento (el punto agregado) de 'original'
    original.pop();
    // Convierte 'original' en un string 'mensajeFinal' concatenando sus elementos
    const mensajeFinal = original.join("");
    // Retorna 'mensajeFinal'
    return mensajeFinal;
}

// Definimos un mensaje 
const mensaje1 = "Anuel es mejor que Feid";
// funciones de transformación 
const mensajeTransformado1 = transformarMensaje1(mensaje1);
const mensajeTransformado2 = transformarMensaje2(mensaje1);

// Muestra los resultados de las transformaciones 
alert("Mensaje transformado 1: " + mensajeTransformado1);
alert("Mensaje transformado 2: " + mensajeTransformado2);