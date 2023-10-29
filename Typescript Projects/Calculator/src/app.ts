#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';

const prompt = inquirer.createPromptModule();

function validateNumber(input: string): boolean | string 
{ if (isNaN(parseFloat(input)))
    {
        return "Please enter a valid number"
    }
return true;
}

function validateOperator(input: string): boolean | string
{ if (input == "+" || input == "-" || input == "*" || input == "/")
    {
        
    }
    else
    {
    return "Please enter a valid operator example (+, -, *, /)"
    }
return true;
}

let result:unknown;
let num1:number
let num2:number;
let Operator:string;
let i = false;
function arithmeticOperation()
{
    if (Operator == "+") 
    {
        if(result == null || result == "")
            result = num1 + num2;
        else
        result = result as number + num2;
        console.log(chalk.white.bgGreenBright(`Answer is : ${result}`));
    } else if (Operator == "-") 
    {
        if(result == null || result == "")
            result = num1 - num2;
        else
            result = result as number - num2;
        console.log(chalk.white.bgRedBright(`Answer is : ${result}`));
        
    } else if (Operator == "*") 
    {
        if(result == null || result == "")
            result = num1 * num2;
        else
            result = result as number * num2;
        console.log(chalk.blue.bgWhiteBright(`Answer is : ${result}`));
    }

    else if (Operator == "/") 
    {
        if(result == null || result == "")
            result = num1 / num2;
        else
            result = result as number / num2;
        console.log(chalk.yellow.bgBlack(`Answer is : ${result}`));
    }
}

async function cliCalculator() {
console.log(chalk.yellow(`Welcome to CLI Calculator you can perform bisc arithmetic operation contineously.
if you want to exit type 'n' and press enter`));
    
result = null;

do
{
    if(i == false)
    {
        const firstinput = await prompt(
            {
                type: "input",
                name: "num1",
                message: "Enter Firts number:",
                validate: validateNumber
            }
        )
        num1 = parseFloat(firstinput.num1);
    }

const secondInput = await prompt([
    {
        type: "input",
        name: "operator",
        message: "Enter an operator like (+, -, *, /):",
        validate: validateOperator
    },
    {
        type: "input",
        name: "num2",
        message: "Please enter the second number:",
        validate: validateNumber,

    }  
])

    num2 = parseFloat(secondInput.num2);
    Operator = secondInput.operator; 
        
    arithmeticOperation();

    let confirmation = await prompt(
        {
            type: "confirm",
            name: "is_finished",
            message: "Do you want to continue?",
        }
    )

    i = confirmation.is_finished;
    
}while(i == true)
    
}
export default cliCalculator;
cliCalculator()