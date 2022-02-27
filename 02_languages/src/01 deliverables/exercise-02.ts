console.log("************** DELIVERABLE 02 *********************");

// 2. Concat

const ninjaTurtlesNames = ["Leonardo", "Michelangelo", "Donatello", "Raphael"];
const ninjaTurtlesColors = ["blue", "orange", "purple", "red"];
const ninjaTurtlesPowers = [
  "enhanced strength",
  "speed",
  "agility",
  "reflexes",
];

// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos.
// Utiliza rest / spread operators.
const concat = (a, b) => {
  const concatArrays = [...a, ...b];
  return concatArrays;
};

console.log("Exercise 2.1", concat(ninjaTurtlesNames, ninjaTurtlesColors));
//['Leonardo', 'Michelangelo', 'Donatello', 'Raphael', 'blue', 'orange', 'purple', 'red']

// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

const multiConcat = (...arrays) => {
  const finalArr = [];

  arrays.forEach((array) => {
    finalArr.push(...array);
  });
  return finalArr;
};

console.log("Exercise 2.2", multiConcat(ninjaTurtlesNames, ninjaTurtlesColors, ninjaTurtlesPowers));
//['Leonardo', 'Michelangelo', 'Donatello', 'Raphael', 'blue', 'orange', 'purple', 'red', 'enhanced strength', 'speed', 'agility', 'reflexes']
