//function showPersonDetails(pPerson : Person1){
// console.log(`First name is ${pPerson.fname}, last name is ${pPerson.lname} and age is ${pPerson.age}`)
//}
var showPersonDetails = function (pPerson) {
    console.log("First name is " + pPerson.fname + ", last name is " + pPerson.lname + " and age is " + pPerson.age);
};
var MyPerson = {
    fname: 'Sid',
    lname: 'Sarkar',
    age: 25
};
showPersonDetails(MyPerson);
