function add(n1: number, n2: number): number {
  return n1 + n2;
}

//function type
let combineValue: (a:number, b:number) => number; //return type of Function
combineValue = add;

console.log(combineValue(8,8));


// //call back function
// function printResult (num : number): void {
//   console.log("Result: " + num);
// }

function addAndPrint(n1: number, n2: number, callback: (result: number) => void) {
  const result = n1 + n2;
  callback(result);
}

addAndPrint(10, 20, (result) => {
  console.log(result);
})


//UNKNOWN TYPE
let userInput: unknown; //unknow diff than any
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}


//NEVER TYPE -> never return anything
function generateError(message: string, code: number) : never{
  throw {message: message, errorCode: code};
}

const result = generateError('An error occurred!', 500);
console.log(result);