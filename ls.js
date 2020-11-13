const fs = require("fs");

module.exports = function (cmd) {
 // 'files' will be an array of fileNames ['bash.js', 'pwd.js']
 switch (cmd) {
  case "ls":
   fs.readdir("./", "utf8", (err, files) => {
    if (err) {
     throw err;
    } else {
     //write logic here:
     process.stdout.write(files.join("\n"));
     process.stdout.write("\nprompt > ");
    }
   });
   break;
 }
};
