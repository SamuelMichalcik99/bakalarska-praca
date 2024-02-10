const mail = require("../../mail");

// Submit contact form to sen email.
async function submitForm(req, res) {
  const { name, email, subject, notes } = req.body;

  try {
    await mail.sendMail(name, email, subject, notes);
    res.send("Form submitted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error sending email");
  }
}

module.exports = { submitForm };