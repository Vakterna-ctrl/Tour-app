const nodemailer = require('nodemailer');

const sendEmail = options => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
    // ACTIVATE IN GMAIL "LESS SECURE APP" option
  });
  // 2) Define the email options
  // 3) Send the email with nodemailer
};
