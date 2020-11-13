//output prompt
const pwd = require("./pwd.js");

process.stdout.write("prompt > ");

//stdin 'data' event fires after user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //removes the line
  //module.exports(cmd);

  process.stdout.write("You typed:" + cmd);
  process.stdout.write("\nprompt >");
  pwd(cmd);

  //   switch (cmd) {
  //     case "pwd":
  //       process.stdout.write("Current directory is:" + process.cwd());
  //   }

  //   if (cmd === "pwd") {
  //     process.stdout.write("Current directory is:" + process.cwd());
  //   }
});
