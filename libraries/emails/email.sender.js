const config = require("../../config/index.js");
const nodemailer = require("nodemailer");
const ejs = require("ejs");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        "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"
      // "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",
    }
  })
);

const forgot_password_email = async options => {
  const emailTemplate = await ejs.renderFile(
    __dirname + "/email_templates/forgot_password.ejs",
    { name: options.name, OTP: options.otp }
  );

  const data = {
    to: options.email,
    from: `${config.SENDING_EMAIL} Tutor Service`,
    subject: options.subject,
    html: emailTemplate
  };

  await transporter.sendMail(data);
};

module.exports = {
  forgot_password_email
};
