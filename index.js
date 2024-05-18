import readline from "readline";
import fs from "fs";

let incl = [];
const words = JSON.parse(fs.readFileSync("words.json", "utf8"));

const question = (question) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      return resolve(answer);
    });
  });
};

(async () => {
  let letters = (await question("[+] harfleri birlesik bir bicimde giriniz (ornek: abc): ")).split("");
  let blacklisted = (await question("[+] yasakli harfleri birlesik bir bicimde giriniz (ornek: abc): ")).split("");

  for (let i = 0; i < words.length; i++) {
    if (
      letters.every((letter) => words[i].includes(letter)) &&
      !blacklisted.some((blacklist) => words[i].includes(blacklist))
    ) {
      incl.push(words[i]);
    }
  }

  console.log(`[+] ${incl.length} kelime bulundu.`);
  console.log(`[~] kelimeler: ${incl.join(", ")}`);
})();
