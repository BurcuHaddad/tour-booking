const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  //1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  //2) Define the mail options
const mailOptions = {
    from: " Burcu Dev <admin@burcu.io>",
    to: options.email,
    subject: options.subject,
    text: options.message
}
  //3) Actually send the email
  await transporter.sendMail(mailOptions)
};

module.exports = sendEmail
