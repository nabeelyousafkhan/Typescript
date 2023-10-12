let names:string[] = ["Ahmad","Rashid","Zuhaib","Amir"];

let index = names.indexOf("Zuhaib");
names.splice(index,1);
names.splice(index,0,"Ahsan").join();
names.unshift("Junaid");
names.splice(names.length / 2,0,"Adeel").join();
names.push("Waqas"); 

console.log("Sorry to say that, I can invite only two people for dinner.\n");


for(let i=names.length; i > 2;i--)
{
    
    console.log(names.pop() + " I am sorry, I can’t invite you to dinner");
}

for(let i=0; i < names.length;i++)
{
    console.log("Hi, " + names[i] + " You are still invited for dinner at my home");
}

while(names.length > 0)
{
    console.log(names.pop() + " I am sorry, I can’t invite you to dinner");
}
if(names.length == 0)
    console.log("\nNow I have an empty list");

export{};
