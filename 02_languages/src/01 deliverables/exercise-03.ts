console.log("************** DELIVERABLE 03 *********************");

// 3. Clone Merge

const source = {
  name: "Son Gokū",
  birth: "737",
  species: "Saiyano",
  origin: "Planeta Vegeta",
};

const target = {
  name: "Vegeta",
  birth: "732",
  gender: "male",
  species: "Saiyano",
  origin: "Planeta Vegeta",
};

// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las
// propiedades de source:

function clone(source) {
  const sourceClone = Object.assign(source);
  return sourceClone;
}

console.log("Exercise 3.1", clone(source)); //{name: 'Son Gokū', birth: '737', species: 'Saiyano', origin: 'Planeta Vegeta'}

// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas
// las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

function merge(source, target) {
  const finalObj = Object.assign(target, source);
  return finalObj;
}

console.log("Exercise 3.2", merge(source, target)); //{name: 'Son Gokū', birth: '737', gender: 'male', species: 'Saiyano', origin: 'Planeta Vegeta'}
