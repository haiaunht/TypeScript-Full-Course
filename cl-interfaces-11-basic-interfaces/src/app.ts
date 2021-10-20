//not a blue print just a custom type, and cannot initialize properties
// interface Greetable {
//   name: string;
//   //age: number;

//   greet(phrase: string): void;
// }
// => can create Greetable extends Named

interface Named {
  readonly name: string;
  outputName?: string; //? is OPTIONAL
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  //age: 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }

}

let user1: Greetable;

// user1 = {
//   name: 'Max',
//   //age: 30,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// };

user1 = new Person('Max');

user1.greet('Hi there - I am');