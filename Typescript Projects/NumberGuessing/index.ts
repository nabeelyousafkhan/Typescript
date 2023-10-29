#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep=()=>new Promise ((res,rej)=> setTimeout(res,2000));
 
async function welcome() {
    const chalkTitle=chalkAnimation.rainbow("Lets Start the Game.:");
    await sleep();
    chalkTitle.stop();  
}
 
let PlayerLife= 3;
let PlayerScore = 0;

async function askQuestion(){
    let randomNumber:number=Math.floor(Math.random()*10+1);
   
    do{       
        console.log(`Player life left ${PlayerLife}  ${chalk.green(`(Player Score is ${PlayerScore})`)}`);        
        var que = await inquirer
        .prompt([
            {
                type:"number",
                name:"user_name",
                message:"Select any number between 1-10",
            }
        ]);
 
        if(que.user_name===randomNumber){
            console.log(chalk.yellow(`Congratulations! you guess the right number ${randomNumber}`));
            randomNumber=Math.floor(Math.random()*10+1);
            PlayerScore++;
        }
else if(que.user_name< randomNumber){
            console.log(chalk.red(`your number ${que.user_name} is less than guess number`));
            PlayerLife--;
        }else if(que.user_name> randomNumber){
            console.log(chalk.red(`your number ${que.user_name} is greater than guess number`));
            PlayerLife--;
        }
 
    }while(PlayerLife > 0 );
    if(PlayerLife==0 && randomNumber !== que.user_name){
        console.log(chalk.redBright("Your Game is Over!"))
    }
}
 
async function startAgain() {
 
   do{
    console.clear();
    await welcome();
    PlayerLife=3;
    await askQuestion();
 
    var restart= await inquirer .prompt([
        {
            type: "input",
            name: "start_again",
            message: "Do You want to start the Game again? press Y or N"
        }
 
    ])
   }while(restart.start_again==='y' || restart.start_again==='Y');
   
}
export default startAgain
startAgain();