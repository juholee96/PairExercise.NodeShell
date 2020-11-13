const fs = require("fs");

module.exports = function (cmdName, fileName) {
 //  console.log("CMD>>>", cmdName);
 switch (cmdName) {
  case "cat":
   console.log(2);
   fs.readFile(`./${fileName}`, (err, data) => {
    if (err) {
     throw err;
    } else {
     process.stdout.write(data.toString());
     process.stdout.write("\nprompt > ");
    }
   });
   break;
 }
};

// module.exports = function (cmd, fileName) {
//     console.log("CMD>>>", cmd);
//     switch (cmd) {
//      case "cat":
//       console.log(2);
//       fs.readFile(`./${fileName}`, (err, data) => {
//        if (err) {
//         throw err;
//        } else {
//         process.stdout.write(data.toString());
//         process.stdout.write("\nprompt > ");
//        }
//       });
//       break;
//     }
//    };
