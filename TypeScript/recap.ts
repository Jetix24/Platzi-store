// Constantes
const myName = 'Alice'; // string
const myAge = 30; // number
const suma = (a: number, b: number) => a + b; // function
const mySum = suma(2, 3); // number

// clase
class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {
    this.age = age;
    this.name = name;
  }
  getSummary() {
    return `My name is ${this.name} and I'm ${this.age} years old`;
  }
}

const alice = new Persona(myAge, myName);
console.log(alice.getSummary());
console.log(mySum);
