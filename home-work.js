// variable declaration 

var bangladesh = ["Tamim", "Liton", "Shakib", "Mushfiq", "Mahmudullah", "Afif", "Shamim", "Miraj", "Saifuddin", "Taskin", "Mustafiz"];

var squad = bangladesh;
// console.log(squad); 

var name = "Shakib Al Hasan";
var age = 33;
var bat = "Left Handed";
var bowl = "Left Handed";
// console.log(name); 

// loop 

for(var i = 1; i <= 100; i++){
    // console.log(i); 
}

var i = 1;
while(i <= 100){
    // console.log(i); 
    i++;
}

// odd

for(var i = 51; i <= 80; i+= 2){
    // console.log(i); 
}

var i = 51;
while(i <= 80){
    // console.log(i); 
    i = i+2;
}

// even 

for(var i = 50; i <= 80; i += 2){
    // console.log(i); 
}

var i = 50;
while(i <= 80){
    // console.log(i); 
    i = i + 2;
}


// function 

function addThreeNumbers(number1, number2, number3){
    var total = number1 + number2 + number3;
    return total;
}
var result = addThreeNumbers(10, 12, 14);
// console.log('total ', result); 

function multiplication(number1, number2, number3){
    var result = number1 * number2 * number3;
    return result;
}
var getResult = multiplication(2, 3, 5);
console.log('result is ', getResult);


