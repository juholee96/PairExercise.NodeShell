const request = require("request");

module.exports = function (cmdName, fileName) {
 switch (cmdName) {
  case "curl":
   request(`${fileName}`, (err, body) => {
    if (err) throw err;
    process.stdout.write(body);
    process.stdout.write("\nprompt > ");
   });
   break;
 }
};
