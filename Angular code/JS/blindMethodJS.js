const plname = {
    firstname : "Sourav",
    lastname : "Gangully"
}

let printFullName = function(hometown, state){
    console.log(this.firstname+" "+this.lastname+", "+hometown+", "+state);
}
printFullName("Kolkata", "West Bengal");
//bind method

let printMyName = printFullName.bind(plname, "Kolkata", "West Bengal");
console.log(printMyName);
printMyName();