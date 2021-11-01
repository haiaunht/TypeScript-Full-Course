// Code goes here!
type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

//combine 2 types
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Au',
  privileges: ['create-server'],
  startDate: new Date()
};

//// TYPE GUARDS
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// FUNCTION overload
// function overload need to be above main function
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}



//another example 
type UnknowEmployee = Employee | Admin;
function printInfo(emp: UnknowEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('start date: ' + emp.startDate);
  }
}

printInfo(e1);

console.log("Employee with only Employee type")
printInfo({name: 'Test', startDate: new Date()});


//another example
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ' + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle : Vehicle) {
  vehicle.drive();
  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
console.log("-------")
useVehicle(v2);


// Discriminated Unions
interface Bird {
  type: 'bird'; //literal type
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'
  runningSpeed: number;
}

type Animal = Bird | Horse;

//because interface i cannot use instanceof 
function moveAnimal(animal : Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse' :
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 30});


/// -- TYPE CASTING
//const userInput = <HTMLInputElement>document.getElementById('user-input')!; //! : not null
// or
const userInput = document.getElementById('user-input')! as HTMLInputElement;

userInput.value = 'Hi there!'


// INDEX properties
interface ErrorContainer {
  //ex: properties in this must is a string prop and type tring
  [prop: string] : string; 
}

const errorBag : ErrorContainer = {
  email: 'Not a valid email',
  userName: 'Must start with a capital charcter!'
}


// Optional Chaining '?'
const fetchedUserData = {
  id: 'u1',
  name: 'Au',
  job: {title: 'CEO', description: 'My own company'}
}
console.log(fetchedUserData?.job?.title); //if fetch has data, execute job and if job is not null access title


// NUllish Coalescing
const userInputNull = null;
const store = userInputNull ?? 'DEFAULT'; // if null or UNdefine use 'DEFAULT
console.log(store)

const userInputEmpty = '';
const storeX = userInputEmpty ?? 'DEFAULT'; // this will have '' value output
console.log(storeX)

