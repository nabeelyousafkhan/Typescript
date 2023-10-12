type myObject = {
    manufacturer:string,
    model:string,
    color?:string,
    tracker?:string
}

function Cars(obj:myObject)
{
    console.log(obj);       
}

let carObj:myObject = {
        manufacturer : "Honda",
        model : "City 2023"
}

let carObj2:myObject = {
    manufacturer : "Honda",
    model : "City 2022",
    color: "Black"
}

let carObj3:myObject = {
    manufacturer : "Honda",
    model : "Civic",
    color: "White",
    tracker: "Yes"
}

Cars(carObj);
Cars(carObj2);
Cars(carObj3);
