function Cars(obj) {
    console.log(obj);
}
let carObj = {
    manufacturer: "Honda",
    model: "City 2023"
};
let carObj2 = {
    manufacturer: "Honda",
    model: "City 2022",
    color: "Black"
};
let carObj3 = {
    manufacturer: "Honda",
    model: "Civic",
    color: "White",
    tracker: "Yes"
};
Cars(carObj);
Cars(carObj2);
Cars(carObj3);
export {};
