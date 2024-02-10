/************************************************************
*                          MAIL                             *
*                                                           *
*    This code uses Nodemailer to send an email with        *
*    provided details using a Gmail account. It exports     *
*    a function called sendMail with four parameters.       *
*    Email xmichalciks is used as a transporter and the     *
*    target email address is midotechsk.                    *
*                                                           *
************************************************************/

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "xmichalciks@stuba.sk",
    pass: "cnigtsekhkyhsloa"
  },
});

async function sendMail(name, email, subject, notes) {
  const emailOptions = {
    from: `${name} <your-email-address-here>`,
    to: "midotechsk@gmail.com",
    replyTo: email,
    subject: subject,
    html: `<h1>${name}:</h1><br/><p>${notes}</p>`
  };

  await transporter.sendMail(emailOptions);
}

module.exports = { sendMail };