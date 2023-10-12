let names:string[] = ["Saudia","Dubai","New York","Canada", "Egypt"];
let SorteArray:string[] = names.map(item => item);

console.log("Orginal Order\n" + names);
console.log("Ascending Order\n" + SorteArray.sort());
console.log("Orginal Order\n" + names);
console.log("Descending  Order\n" + SorteArray.sort((one, two) => (one > two ? -1 : 1)));
console.log("Orginal Order\n" + names);
console.log("Reverse List\n" + names.reverse());
console.log("Reverse Again and it is in Orginal Order\n" + names.reverse());
console.log("Sort in Ascending Order\n" + names.sort());
console.log("Sort in Ascending Order\n" + names.sort((one, two) => (one > two ? -1 : 1)));


export{};
