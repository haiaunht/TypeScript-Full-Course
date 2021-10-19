// before go here, do npm install, npm start and on another window tsc -w (watch)
// Code goes here!
const userName = 'Max';

//cannot change userName
// userName = 'Hai-Au'; will have error

let ageExample = 40;
ageExample = 29;

// arrow function
const add = (a: number, b: number) => {
  return a + b;
}

//or can do like this if only 1 expression:  const add = (a:number, b:number) => a+b;

console.log(add(2,5));

const printOutput = (output: string | number) => console.log(output);

const button = document.querySelector('button');
if (button) {
  button.addEventListener('click', event => console.log(event));
}

// spread operator
const hobbies = ['sports', 'cooking'];
const activeHobbies = ['hiking'];

// I can do
activeHobbies.push(...hobbies);
console.log(activeHobbies)

//or const activeHobbies = ['hiking', ...hobbies]


const person = {
  firstName : 'max',
  age: 30
}
const copiedPerson = {...person};

// REST param
const addR = (...numbers: number[]) => { //...numbers is a list of number
  return numbers.reduce((currResult, currValue) => {
    return currResult + currValue;
  }, 0)
}

const addNumbers = addR (5,10,12,3.7);
console.log(addNumbers)


// ==== ARRAY and OBJECT ====
const [hobby1, hobby2, ...reamainingHobbies] = hobbies; 
//destructure, go through hobbies and assign 1st eleme to hobby1 and so on

const {firstName, age} = person; //pull name and age from person

//alias rename
//const {firstName: userName, age} = person;
//console.log(userName, age);

