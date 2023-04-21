console.log("Hello World");

const country = 'India';
console.log('I Love '+country);

let age = 35;
console.log(age);
// age = "Nantu"; //here we will be getting an error
age = 24;

let player;
player = "Sourav";
player = 50;
console.log(player);

function multiply(a: number,b: number){
    return a * b;
}
console.log(multiply(5,8));

let mixedArr = ['Apple', 34, true, {}];

mixedArr.push('Banana');
mixedArr.push(25);
mixedArr.push({
    name: "nanababy"
});

console.log(mixedArr);

let person = {
    name : "Sourav",
    age : 55,
    isCaptain : true,
    country : "INDIA"
}

//Explicit Type Declaration

let myname: string;
let myAge: number;

myname = "Siddhartha";
myAge = 26;

let bie: string | number;

//array
let listOne : number[] = [1,3,5,7.9];

let listTwo : Array<number> = [2,4,6,8];

let namesArr: (string | number)[] = []; //Union Type for array need brackets

namesArr.push('Cutepie');

let anyObj: object;

anyObj = {
    name: "Montu"
}

//Dynamic Type

let dvar: any;

let anyArr: any[] = [];

//How to use function

const myfunc: Function = (a: string, b?: string, c: string = "Saheb") => {
    console.log(`Hello ${a} ${c}`);
}

myfunc('TuTaI');

const func2 = (a: number, b: number): number => {
    return a+b;
}
console.log(func2(4, 8));

//Optional Parameter
const addnum1 : Function = (num1: number, num2?: number ) : number => {
    if(num2)
    return num1+num2;
    else
    return num1
}
console.log(addnum1(10,10));
console.log(addnum1(10));


//Default Parameter
const addnum2 : Function = (num1: number, num2: number = 10 ) : number => {
    return num1+num2; 
}

console.log(addnum2(10));
console.log(addnum2(10,20));


//Type Alias

type stringOrNumber = string | number;
type userType = {name: string, age: number};

const UserDetails = ( id: stringOrNumber, user: userType) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
}

let userOne : userType = {name:"Sidd", age:25};

UserDetails(1, userOne);

