let users = ["nabeel", "ahmad", "admin", "zuhaib", "amir"];
for (let i = 0; i < users.length; i++) {
    if (users[i].toLocaleLowerCase() == "admin")
        console.log(`Hello ${users[i]}, would you like to see a status report?`);
    else
        console.log(`Hello ${users[i]}, thank you for logging in again.`);
}
export {};
