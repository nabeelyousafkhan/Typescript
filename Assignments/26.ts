import chalk from "chalk";

let alien_color = "Yellow";


if(alien_color == "Red")
    chalk.red(alien_color);
if(alien_color == "Green")
    chalk.green(alien_color);
if(alien_color == "Yellow")
    chalk.yellow(alien_color);

if(alien_color == "Green")
    console.log(chalk.green("Player just earn 5 points for shooting the alien."));
else if(alien_color == "Yellow")
    console.log(chalk.red("Player just earn 10 points."));
else if(alien_color == "Red")
    console.log(chalk.red("Player just earn 15 points."));