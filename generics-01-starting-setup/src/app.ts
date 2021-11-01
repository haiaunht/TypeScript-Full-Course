// Code goes here!
// const names: Array<string> = []; //this make sure array of string

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve("This is done1");
//   }, 2000);
// }) 

// promise.then(data => {
//   data.split(' ');
// })

//GENERIC
function merge<T extends Object, U> (objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({name: 'Max', hobbies: ['Sport']}, {age: 30});
console.log(mergeObj);

//another generic function
interface Lengthy {
  length: number;
}
function countAndDescription<T extends Lengthy> (element: T): [T, string] {
  let desc = 'Got no value. ';

  if (element.length > 0) {
    desc = 'Got ' + element.length + ' elements';
  }
  return [element, desc];
}
console.log(countAndDescription('Hi there!'));
console.log(countAndDescription(['Sports', 'Cooking']));


// keyof contraint
function extractAndConvert<T extends object, U extends keyof T> (obj: T, key: U) {
  return 'Value ' + obj[key];
}
console.log(extractAndConvert({name: 'Max'}, 'name'));


// GENERIC Class
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

//generic of string
const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Nam');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

//generic class of number
const numberStorage = new DataStorage<number>();

//object
//cannot do an object here cause generic type extends primitive type
// ex: cannot do this -> const objectStorage = new DataStorage<object>();


// Generic Utility Types, only in TS world
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

//Partial 
function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}



