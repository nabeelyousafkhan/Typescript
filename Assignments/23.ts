let car = 'Subaru';

if(car.toLocaleLowerCase() == "Honda")
    console.log("I predict True.")
else
    console.log("I predict false.")

if(car.toLocaleLowerCase() == "subaru")
    console.log("I predict True.")
else
    console.log("I predict false.")
if(car.toLocaleLowerCase() == "Subaru")
    console.log("I predict True.")
else
    console.log("I predict false.")
if(car.toLocaleLowerCase() == "subaru")
    console.log("I predict True.")
else
    console.log("I predict false.")
if(car.toLocaleLowerCase() == "ALTO")
    console.log("I predict True.")
else
    console.log("I predict false.")
if(car.toLocaleLowerCase() == "subaru")
    console.log("I predict True.")
else
    console.log("I predict false.")
if(car.toLocaleLowerCase() != "subaru")
    console.log("I predict True.")
else
    console.log("I predict false.")
if(car.toLocaleLowerCase() == "subaru")
    console.log("I predict True.")
else
    console.log("I predict false.")
if(car.toLocaleLowerCase() != "subaru")
    console.log("I predict True.")
else
    console.log("I predict false.")
if(car.toLocaleLowerCase() == "subaru")
    console.log("I predict True.")
else
    console.log("I predict false.")

let num1 = 5;
let num2 = 3;
let num3 = 3;

if(num1 > num2)
    console.log(`${num1} is greater than ${num2}`);
if(num2 < num1)
    console.log(`${num2} is less than ${num1}`);
if(num2 == num3)
    console.log(`${num2} is equal ${num3}`);
if(num2 != num1)
    console.log(`${num2} is not equal ${num1}`);
if(num2 == num3 && num1 > num2)
    console.log(`True`);
if(num2 == num1 || num1 > num2)
    console.log(`True`);

let array:number[] = [1,2,3,4,5];

if(array.includes(3))
    console.log(`This value exits in array`);
else
    console.log(`This value not exits in array`);

if(array.includes(8))
    console.log(`This value exits in array`);
else
    console.log(`This value not exits in array`);
