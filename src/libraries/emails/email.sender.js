import config from "../../config/index";
import nodemailer from "nodemailer";
import ejs from "ejs";
import sendgridTransport from "nodemailer-sendgrid-transport";

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        "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",
    },
  })
);

const forgot_password_email = async (options) => {
  const emailTemplate = await ejs.renderFile(
    __dirname + "/email_templates/forgot_password.ejs",
    { name: options.name, OTP: options.otp }
  );

  const data = {
    to: options.email,
    from: `${config.SENDING_EMAIL} Tutor Service`,
    subject: options.subject,
    html: emailTemplate,
  };

  await transporter.sendMail(data);
};

module.exports = {
  forgot_password_email,
};
