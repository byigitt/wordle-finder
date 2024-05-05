import readline from "readline-sync";
import fs from "fs";

let incl = [];
let letters = readline.question("Enter the letters: ").split("");
let blacklisted = readline.question("Enter the blacklisted letters: ").split("");
const words = JSON.parse(fs.readFileSync("words.json", "utf8"));

for (let i = 0; i < words.length; i++) {
  if (
    letters.every((letter) => words[i].includes(letter)) &&
    !blacklisted.some((blacklist) => words[i].includes(blacklist))
  )
    incl.push(words[i]);
}

console.log(incl);
