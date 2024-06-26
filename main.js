/*TENEMOS UN JUEGO EN EL QUE SE USAN DOS DADOS, Y LAS REGLAS SON LAS SIGUIENTES:

El juego se gana si se obtiene alguno de los siguientes puntajes:7, 11, 3.
Se obtiene una tirada extra con las siguientes condiciones: 
*Obteniendo dos números iguales.
*Obteniendo un número divisible entre 3, pero que no sea 3.*/

let evaluateGame = (d1, d2) => {
  let addnumbers = d1 + d2;
  if (addnumbers === 7 || addnumbers === 11 || addnumbers === 3) {
    return "Ganaste el juego :)";
  }
  if (d1 === d2 || (addnumbers % 3 === 0 && addnumbers !== 3)) {
    return "Obtuviste una tirada extra :)";
  }
};

console.log(evaluateGame(4, 3));
console.log(evaluateGame(6, 5));
console.log(evaluateGame(2, 1));
console.log(evaluateGame(6, 6));
