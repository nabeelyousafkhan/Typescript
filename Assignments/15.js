let names = ["Ahmad", "Rashid", "Zuhaib", "Amir"];
let index = names.indexOf("Zuhaib");
names.splice(index, 1);
names.splice(index, 0, "Ahsan");
names.unshift("Junaid");
names.splice(names.length / 2, 0, "Adeel");
names.push("Waqas");
for (let i = 0; i < names.length; i++) {
    console.log("Hi, " + names[i] + " I am inviting to you for dinner at my home");
}
console.log("\nI found a bigger dinner table. So, I am inviting more guest..!");
export {};
