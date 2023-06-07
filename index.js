import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        message: "Enter your Url: ",
        name: "Url",
    },
  ])
  .then((answers) => {
    const Url = answers.Url; 
    var qr_svg = qr.image(Url);
    qr_svg.pipe(fs.createWriteStream('qr_output.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Check your Url");
    } else {
      logError(error);
    }
  });