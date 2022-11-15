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

const add_payment_method_email = async options => {
  const emailTemplate = await ejs.renderFile(
    __dirname + "/email_templates/payment.ejs",
    { name: options.name, body: options.body }
  );

  const data = {
    to: options.email,
    from: `${config.SENDING_EMAIL} Tutor Service`,
    subject: options.subject,
    html: emailTemplate
  };

  await transporter.sendMail(data);
};

const update_payment_method_email = async options => {
  const emailTemplate = await ejs.renderFile(
    __dirname + "/email_templates/payment.ejs",
    { name: options.name, body: options.body }
  );

  const data = {
    to: options.email,
    from: `${config.SENDING_EMAIL} Tutor Service`,
    subject: options.subject,
    html: emailTemplate
  };

  await transporter.sendMail(data);
};

const remove_payment_method_email = async options => {
  const emailTemplate = await ejs.renderFile(
    __dirname + "/email_templates/payment.ejs",
    { name: options.name, body: options.body }
  );

  const data = {
    to: options.email,
    from: `${config.SENDING_EMAIL} Tutor Service`,
    subject: options.subject,
    html: emailTemplate
  };

  await transporter.sendMail(data);
};

const new_announcement_email = async options => {
  const emailTemplate = await ejs.renderFile(
    __dirname + "/email_templates/announcement.ejs",
    { body: options.body }
  );

  const data = {
    to: options.email,
    from: `${config.SENDING_EMAIL} Tutor Service`,
    subject: options.subject,
    html: emailTemplate
  };

  await transporter.sendMail(data);
};

const new_comment_email = async options => {
  const emailTemplate = await ejs.renderFile(
    __dirname + "/email_templates/comment.ejs",
    { name: options.name, body: options.body }
  );

  const data = {
    to: options.email,
    from: `${config.SENDING_EMAIL} Tutor Service`,
    subject: options.subject,
    html: emailTemplate
  };

  await transporter.sendMail(data);
};

const new_review_user_email = async options => {
  const emailTemplate = await ejs.renderFile(
    __dirname + "/email_templates/review.ejs",
    { name: options.name, body: options.body }
  );

  const data = {
    to: options.email,
    from: `${config.SENDING_EMAIL} Tutor Service`,
    subject: options.subject,
    html: emailTemplate
  };

  await transporter.sendMail(data);
};

const new_review_tutor_email = async options => {
  const emailTemplate = await ejs.renderFile(
    __dirname + "/email_templates/review.ejs",
    { name: options.name, body: options.body }
  );

  const data = {
    to: options.email,
    from: `${config.SENDING_EMAIL} Tutor Service`,
    subject: options.subject,
    html: emailTemplate
  };

  await transporter.sendMail(data);
};

const create_workshop_email = async options => {
  const emailTemplate = await ejs.renderFile(
    __dirname + "/email_templates/new_workshop.ejs",
    { name: options.name, body: options.body }
  );

  const data = {
    to: options.email,
    from: `${config.SENDING_EMAIL} Tutor Service`,
    subject: options.subject,
    html: emailTemplate
  };

  await transporter.sendMail(data);
};

const user_register_workshop_email = async options => {
  const emailTemplate = await ejs.renderFile(
    __dirname + "/email_templates/workshop.ejs",
    { name: options.name }
  );

  const data = {
    to: options.email,
    from: `${config.SENDING_EMAIL} Tutor Service`,
    subject: options.subject,
    html: emailTemplate
  };

  await transporter.sendMail(data);
};

const workshop_creater_workshop_email = async options => {
  const emailTemplate = await ejs.renderFile(
    __dirname + "/email_templates/workshop.ejs",
    { name: options.name }
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
  forgot_password_email,
  add_payment_method_email,
  update_payment_method_email,
  remove_payment_method_email,
  new_announcement_email,
  new_comment_email,
  new_review_user_email,
  new_review_tutor_email,
  create_workshop_email,
  user_register_workshop_email,
  workshop_creater_workshop_email
};
