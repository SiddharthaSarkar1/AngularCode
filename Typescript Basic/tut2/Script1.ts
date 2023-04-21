interface Person1{
    fname: string;
    lname: string;
    age: number;
}

//function showPersonDetails(pPerson : Person1){
   // console.log(`First name is ${pPerson.fname}, last name is ${pPerson.lname} and age is ${pPerson.age}`)
//}

const showPersonDetails : Function = (pPerson : Person1) => {
    console.log(`First name is ${pPerson.fname}, last name is ${pPerson.lname} and age is ${pPerson.age}.`)
}

const MyPerson = {
    fname : 'Sid',
    lname : 'Sarkar',
    age : 25
}

showPersonDetails(MyPerson);
