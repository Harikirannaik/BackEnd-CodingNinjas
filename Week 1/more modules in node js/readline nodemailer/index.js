const nodemailer = require("nodemailer");
const readline = require("readline");

const iface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "codingninjas2k16@gmail.com",
    pass: "slwvvlczduktvhdj",
  },
});

iface.question("Enter your email address: ", (userMail) => {
  let mailOptions = {
    from: "codingninjas2k16@gmail.com",
    to: userMail,
    subject: "Coding Ninjas",
    text: "The world has enough coders; be a coding ninja!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`mail sent succesfully to ${userMail}`);
    }
  });
  iface.close();
});
