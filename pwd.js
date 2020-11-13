//const cmd = require("./bash.js");

module.exports = function (cmd) {
  //console.log("pwd is running");
  switch (cmd) {
    case "pwd":
      process.stdout.write("Current directory is:" + process.cwd());
      process.stdout.write("\nprompt >");

    //   if (cmd === "pwd") {
    //     process.stdout.write("Current directory is:" + process.cwd());
    //   }
  }
};
