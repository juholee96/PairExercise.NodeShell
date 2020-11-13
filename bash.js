//output prompt
const pwd = require("./pwd.js");
const ls = require("./ls.js");
const cat = require("./cat.js");
const curl = require("./curl.js");

process.stdout.write("prompt > ");

//stdin 'data' event fires after user types in a line
process.stdin.on("data", (data) => {
 const cmd = data.toString().trim(); //removes the line
 const fileName = cmd.split(" ")[1];
 const cmdName = cmd.split(" ")[0];
 process.stdout.write("You typed:" + cmd + "\n");

 pwd(cmdName);
 ls(cmdName);
 cat(cmdName, fileName);
 curl(cmdName, fileName);
});
