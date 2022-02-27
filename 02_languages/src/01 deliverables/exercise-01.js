console.log("************** DELIVERABLE 01 *********************");

// 1. Array operations

const fruits = [
  "strawberry",
  "peach",
  "apple",
  "banana",
  "lemon",
  "grape",
  "raspberry",
];

// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento.
// Utiliza destructuring.

const head = ([firstElement]) => firstElement;

console.log("Exercise 1.1", head(fruits)); //strawberry

// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelva todos menos el primer elemento.
// Utiliza rest operator.

const tail = ([, ...allElementsExceptFirst]) => allElementsExceptFirst;

console.log("Exercise 1.2", tail(fruits)); //['peach', 'apple', 'banana', 'lemon', 'grape', 'raspberry']

// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último.
// Utiliza los métodos que ofrece Array.prototype.

const init = (arr) => {
  const allElementsExceptLast = arr.slice(0, -1);
  return allElementsExceptLast;
};

console.log("Exercise 1.3", init(fruits)); //['strawberry', 'peach', 'apple', 'banana', 'lemon', 'grape']

// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (arr) => {
  const lastElement = arr.pop();
  return lastElement;
};

console.log("Exercise 1.4", last(fruits)); //raspberry
