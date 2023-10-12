let magicians = ["Adeel", "Junaid", "Amir", "Ahmad", "Fahad"];
let magicians2 = [];
function make_great(name, secondArray) {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
    console.log("<================================>");
    for (let i = 0; i < secondArray.length; i++) {
        console.log("Greate " + name[i]);
    }
}
function show_magicians(funName) {
    magicians.forEach(val => magicians2.push(Object.assign({}, val)));
    funName(magicians, magicians2);
}
show_magicians(make_great);
export {};
