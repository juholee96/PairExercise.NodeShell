//const cmd = require("./bash.js");

module.exports = function (cmdName) {
 //console.log("pwd is running");
 switch (cmdName) {
  case "pwd":
   process.stdout.write(process.cwd());
   process.stdout.write("\nprompt >");
   break;
  //   if (cmd === "pwd") {
  //     process.stdout.write("Current directory is:" + process.cwd());
  //   }
 }
};
