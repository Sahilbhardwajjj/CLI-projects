const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
  .name("Counter")
  .description("Counts the number of letters")
  .version("0.8.0");

program
  .command("count_letters")
  .description("counts the number of letters")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(`There is ${err} in the file`);
      } else {
        let count = data.replace(/\s+/g, "").length;
        console.log(`Number of Letters in the file is ${count}`);
      }
    });
  });

program
  .command("count_words")
  .description("counts the words")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(`There is ${err} in the file`);
      } else {
        let count = data.trim().split(/\s+/).length;
        console.log(`Number of words in the file is ${count}`);
      }
    });
  });

program
  .command("count_lines")
  .description("counts the lines")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(`There is ${err} in the file`);
      } else {
        let count = data.split("\n").length;
        console.log(`Number of lines in the file is ${count}`);
      }
    });
  });

program.parse();
