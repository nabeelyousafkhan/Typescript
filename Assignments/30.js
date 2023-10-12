let users = ["nabeel", "ahmad", "admin", "zuhaib", "amir"];
for (let i = users.length; i >= 0; i--) {
    if (i > 0)
        users.pop();
    else
        console.log(`List is Empty we need to find some users!`);
}
export {};
