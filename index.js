import readline from "readline-sync";
import fs from "fs";

let incl = [];
let letters = readline.question("[+] harfleri birlesik bir bicimde giriniz (ornek: abc): ").split("");
let blacklisted = readline.question("[+] yasakli harfleri birlesik bir bicimde giriniz (ornek: abc): ").split("");
const words = JSON.parse(fs.readFileSync("words.json", "utf8"));

for (let i = 0; i < words.length; i++) {
  if (
    letters.every((letter) => words[i].includes(letter)) &&
    !blacklisted.some((blacklist) => words[i].normalize("NFD").includes(blacklist.normalize("NFD")))
  ) {
    incl.push(words[i]);
  }
}

console.log(`[+] ${incl.length} kelime bulundu.`);
console.log(`[~] kelimeler: ${incl.join(", ")}`);
