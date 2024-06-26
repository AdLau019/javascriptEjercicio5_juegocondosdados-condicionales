/*  Si el uniforme es gris, pertenece al equipo 1.
    Si es negro, pertenece al equipo 2.
    Si es azul, pertenece al equipo 3.
    Cualquier otro color, no tienen equipo (no juega).*/

let playerTeam = (coloruniform) => {
  switch (coloruniform) {
    case "gris":
      return "Pertenece al equipo 1";
    case "negro":
      return "Pertenece al equipo 2";
    case "azul":
      return "Pertenece al equipo 3";
    default:
      return "No tiene equipo (no juega).";
  }
};

console.log(playerTeam("gris"));
console.log(playerTeam("negro"));
console.log(playerTeam("azul"));
console.log(playerTeam("rojo"));
