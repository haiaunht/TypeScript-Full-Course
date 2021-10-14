// const person = {
//   name: 'Maximilian',
//   age: 30
// };

// same as 
// const person: {name: string, age: number} = {
//   name: 'Maximilian',
//   age: 30
// };

//better just this
// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string] //tuple
// } = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['reading', "walking"],
//   role: [2, 'author'] //tuple -> exact 2 elements
// };

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby)
// }

// for (const r of person.role) {
//   console.log(r)
// }

//ENUM
enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['reading', "walking"],
  role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
  console.log("is admin")
  console.log(Role.ADMIN)
}

//UNION TYPES
function combine (input1 : number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAge = combine(10, 12);
console.log(combineAge)

const combineName = combine("Hai-Au ", 'Bui');
console.log(combineName)
