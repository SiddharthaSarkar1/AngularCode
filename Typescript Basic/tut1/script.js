console.log("Hello World");
var country = 'India';
console.log('I Love ' + country);
var age = 35;
console.log(age);
// age = "Nantu"; //here we will be getting an error
age = 24;
var player;
player = "Sourav";
player = 50;
console.log(player);
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 8));
var mixedArr = ['Apple', 34, true, {}];
mixedArr.push('Banana');
mixedArr.push(25);
mixedArr.push({
    name: "nanababy"
});
console.log(mixedArr);
var person = {
    name: "Sourav",
    age: 55,
    isCaptain: true,
    country: "INDIA"
};
//Explicit Type Declaration
var myname;
var myAge;
myname = "Siddhartha";
myAge = 26;
var bie;
//array
var listOne = [1, 3, 5, 7.9];
var listTwo = [2, 4, 6, 8];
var namesArr = []; //Union Type for array need brackets
namesArr.push('Cutepie');
var anyObj;
anyObj = {
    name: "Montu"
};
//Dynamic Type
var dvar;
var anyArr = [];
//How to use function
var myfunc = function (a, b, c) {
    if (c === void 0) { c = "Saheb"; }
    console.log("Hello " + a + " " + c);
};
myfunc('TuTu');
var func2 = function (a, b) {
    return a + b;
};
console.log(func2(4, 8));
var UserDetails = function (id, user) {
    console.log("User id is " + id + ", name is " + user.name + " and age is " + user.age);
};
var userOne = { name: "Sidd", age: 25 };
UserDetails(1, userOne);
