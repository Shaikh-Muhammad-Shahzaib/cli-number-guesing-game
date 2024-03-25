#! /user/bin/env node
import inquirer from "inquirer";
console.log("\n\tWellcome to CodeWithShahzaib -CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessingNumber",
        type: "number",
        message: "Enter Your Guess Number (Number limit from 1 to 5)",
    },
]);
if (answer.userGuessingNumber === randomNumber) {
    console.log("Congratulation ! You Guess a Correct Number.");
}
else {
    console.log("Sorry You Guess a Wrong Number");
}
