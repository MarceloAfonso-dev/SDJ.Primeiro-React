function sumNumber(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

// console.log(sumNumber(10, 20));

const person = {
    name: 'Lyan',
    age: 18,
    gender: "male"
}

// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);

const {name, age, gender} = person;

console.log(name);
console.log(age);
console.log(gender);