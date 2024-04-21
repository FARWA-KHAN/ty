#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//colorfull display message
console.log(chalk.bold.cyanBright("\n \t\t Word-counter-by-Hamza"));
console.log("=".repeat(60));
//prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
// trimming the sentence and spliting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
// analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
