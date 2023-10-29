#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

let mytodos: string[] = [];
let loop = true;

const sleep=()=>new Promise ((res,rej)=> setTimeout(res,2000));
 
async function welcome() {
    const chalkTitle=chalkAnimation.rainbow("Enter Your task in this Todo List.");
    await sleep();
    chalkTitle.stop();  
}

async function main() {
    console.clear();
    await welcome();

    while(loop){
        const answers : {
            TODO: string,
            addmore: boolean
        }= await inquirer.prompt([
            {
                type: "input",
                name: "TODO",
                message: "Plase enter task in todo list:"
            },
            {
                type: "confirm",
                name: "addmore",
                message: "Do you want to add more task? ",
                default: false
            }
        ])
        const {TODO, addmore} = answers;
        console.log(answers)
         loop = addmore
        if(TODO) {
            mytodos.push(TODO)
        } else {
            console.log("Kindly add valid input")
        }
    }
    
    if(mytodos.length > 0){
        console.log("Your Todo List:")
        mytodos.forEach(todo => {
            console.log(todo)
        });
    } else {
        console.log(chalk.red("No record found!"))
    }
     
}

export default main
main();