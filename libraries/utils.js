const ClassModel = require("../models/class.model");
const moment = require("moment");
const {
  class_reminder_email_user,
  class_reminder_email_tutor
} = require("./emails/email.sender");
const today = moment().startOf("day");

exports.randomOTP = async () => {
  return Math.floor(100000 + Math.random() * 900000);
};

exports.emailReminders = async () => {
  const getMinDiff = (startDate, endDate) => {
    const msInMinute = 60 * 1000;
    return Math.round(Math.abs(endDate - startDate) / msInMinute);
  };

  const classes = await ClassModel.find({
    start_time: {
      $gte: today.toDate(),
      $lte: moment(today).endOf("day").toDate()
    }
  }).populate("user_id tutor_id");
  for (let i = 0; i < classes.length; i++) {
    let minDiff = getMinDiff(classes[i]?.start_time, new Date());
    console.log(minDiff, classes);
    if (minDiff === 5 || minDiff === 10 || minDiff === 15 || minDiff === 20) {
      let class_time = moment(classes[i]?.start_time).format("h:mm:ss a");
      let class_date = moment().format("YYYY/MM/DD");
      let class_day = moment().format("dddd");

      try {
        await class_reminder_email_user({
          email: classes[i]?.tutor_id?.email,
          subject: "Class Reminder",
          class_time,
          class_date,
          class_day,
          user_name:
            `${classes[i]?.user_id?.first_name} ${classes[i]?.user_id?.last_name}` ??
            "",
          body: `This is a friendly reminder for your booked ${
            classes[i]?.name
          } lesson with ${`${classes[i]?.tutor_id?.first_name} ${classes[i]?.tutor_id?.last_name}`} on ${class_date} - ${class_time}. The lesson will take place ${
            classes[i]?.class_location
          }.`
        });
      } catch (error) {
        console.log(error);
      }

      try {
        await class_reminder_email_tutor({
          email: classes[i]?.tutor_id?.email,
          subject: "Class Reminder",
          class_time,
          class_date,
          class_day,
          user_name:
            `${classes[i]?.tutor_id?.first_name} ${classes[i]?.tutor_id?.last_name}` ??
            "",
          body: `This is a friendly reminder for your booked ${
            classes[i]?.name
          } lesson with ${`${classes[i]?.tutor_id?.first_name} ${classes[i]?.tutor_id?.last_name}`} on ${class_date} - ${class_time}. The lesson will take place ${
            classes[i]?.class_location
          }.`
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
