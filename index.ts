#!/usr/bin/env node

import inquirer from "inquirer";
let mybalance = 10000; //Dollar
const mypin = 1234;

const pinAswer = await inquirer.prompt([
  { name: "pin", message: "enter your pin code", type: "number" },
]);
if (pinAswer.pin === mypin) {
  console.log("correct pin code!");

  const operationAnswer1 = await inquirer.prompt([
    {
      name: "operation",
      message: "please select one option",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);

  if (operationAnswer1.operation === "withdraw") {
    const withdrawlAmount = await inquirer.prompt([
      {
        name: "amount",
        message: "please select one option",
        type: "list",
        choices: [2000, 4000, 6000, 8000, "enter your desire amount"],
      },
    ]);
    if (withdrawlAmount.amount === 2000) {
      console.log((mybalance -= 2000));
    } else if (withdrawlAmount.amount === 4000) {
      console.log((mybalance -= 4000));
    } else if (withdrawlAmount.amount === 6000) {
      console.log((mybalance -= 6000));
    } else if (withdrawlAmount.amount === 8000) {
      console.log((mybalance -= 8000));
    }
    if (withdrawlAmount.amount === "enter your desire amount") {
      const operationAnswer2 = await inquirer.prompt([
        {
          name: "operation",
          message: "enter yes",
          type: "input",
        },
      ]);
    }
    const withdrawlAmount2 = await inquirer.prompt([
      {
        name: "amount",
        message: " enter your desire amount",
        type: "number",
      },
    ]);
    if (withdrawlAmount2.amount > mybalance) {
      console.log("insufficient balance");
    } else {
      mybalance -= withdrawlAmount2.amount;
      console.log(
        `Withdrawn $${withdrawlAmount2.amount}. remaining amount: $${mybalance}`
      );
    }
    console.log(`remaning amount: $${mybalance}`);
   } else if (operationAnswer1.operation === "check balance") {
    console.log("Your current balance is", +mybalance);
   }
} else {
  console.log("incorrect pin code");
}
