let users = ["nabeel", "ahmad", "admin", "ZUHAIB", "amir"];
let current_users = ["Adeel", "Ahmad", "Waqas", "zuhaib", "Awais"];
for (let i = 0; i < current_users.length; i++) {
    const index = users.findIndex(a => { return a.toLocaleLowerCase() == current_users[i].toLocaleLowerCase(); });
    if (index != -1)
        console.log(`Person will need to enter a new username.`);
    else
        console.log(`username is available.`);
}
export {};
