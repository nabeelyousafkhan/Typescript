let names:string[] = ["Ahmad","Rashid","Zuhaib","Amir"];
// console.log("Hi, " + names[0] + " I am inviting to you for dinner at my home");
// console.log("Hi, " + names[1] + " I am inviting to you for dinner at my home");
// console.log("Hi, " + names[2] + " I am inviting to you for dinner at my home");
// console.log("Hi, " + names[3] + " I am inviting to you for dinner at my home");

console.log(`\nNoted: ${names[2]} is not comming for dinner he is bussy.\n`);

let index = names.indexOf("Zuhaib");
names.splice(index,1);
names.splice(index,0,"Ahsan");

for(let i=0; i < names.length;i++)
{
    console.log("Hi, " + names[i] + " I am inviting to you for dinner at my home");
}

export{};
