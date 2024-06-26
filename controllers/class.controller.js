const ClassModel = require("../models/class.model");
const AnnouncementModel = require("../models/announcement.model");
const TutorModel = require("../models/tutor.model");
const formatDate = require("date-fns/format");
const { isBefore, isSameDay, isAfter } = require("date-fns");
const { delete_file } = require("../middlewares/multer");
const moment = require("moment");
const ParentModel = require("../models/parent.model");
const PaymentModel = require("../models/payment.model");
const {
  filteredFCMTokens,
  sendNotification
} = require("../libraries/pushNotification");
const notificationModel = require("../models/notification.model");


// ---------------------------------------------------------------
// --------------------- GET UPCOMMING CLASSES -----------------------------
// ---------------------------------------------------------------
exports.get_upcoming_classes = async (req, res, next) => {
  try {
    const { date } = req.params;
    let classes;
    if (req.user.user_type === "tutor") {
      classes = await ClassModel.find({ tutor_id: req.user._id }).populate(
        "user_id tutor_id"
      );
    } else {
      classes = await ClassModel.find({ user_id: req.user._id }).populate(
        "user_id tutor_id"
      );
    }
    let filteredClasses = classes.filter((el) => {
      let elDate = moment(el.class_date).format("YYYY-MM-DD");
      return moment(elDate).isSame(date);
    });

    res.status(200).json(filteredClasses);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- UPDATE CLASS -----------------------------
// ---------------------------------------------------------------
exports.update_class = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, meet_link } = req.body;
    let updated_obj = {};
    if (name) updated_obj.name = name;
    if (meet_link) updated_obj.meet_link = meet_link;
    await ClassModel.findOneAndUpdate(
      { _id: id },
      { $set: { ...updated_obj } }
    );
    let updated_class = await ClassModel.findOne({ _id: id });

    // let filtered_tokens = await filteredFCMTokens(updated_class?.user_id);
    // if (filtered_tokens?.length > 0) {
    //   await sendNotification({
    //     title: `Class Updated`,
    //     body: `Class ${updated_class?.name} Updated Successfully.`,
    //     userTokens: filtered_tokens
    //   });
    // }

    await notificationModel.create({
      user_id: updated_class?.user_id,
      type: "view",
      title: `Class Updated`,
      body: `Class ${updated_class?.name} Updated Successfully.`,
      status: "unread"
    });

    res.status(200).json(updated_class);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- GET SINGLE CLASS -----------------------------
// ---------------------------------------------------------------
exports.get_single_class = async (req, res, next) => {
  try {
    let allKids = [];
    const { id } = req.params;
    let single_class = await ClassModel.findById(id).populate(
      "user_id tutor_id"
    );

    let allClassesKids = await ParentModel.find({
      "kids._id": { $in: single_class.kids }
    }).select("kids");
    allClassesKids?.map((el) =>
      el.kids.map(
        (kid) =>
          single_class?.kids.find((e) => e.toString() === kid._id.toString()) &&
          allKids.push(kid)
      )
    );

    res.status(200).json({ ...single_class.toObject(), kids: allKids });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- GET USER CLASSED -----------------------------
// ---------------------------------------------------------------
exports.get_user_classes = async (req, res, next) => {
  try {
    let classes;
    let updatedClasss = [];
    if (req.user.user_type === "tutor") {
      classes = await ClassModel.find({ tutor_id: req.user._id })
        .populate("user_id tutor_id")
        .sort({ createdAt: -1 });
    } else {
      classes = await ClassModel.find({ user_id: req.user._id })
        .populate("user_id tutor_id")
        .sort({ createdAt: -1 });
    }
    for (let i = 0; i < classes.length; i++) {
      let allKids = [];
      let allClassesKids = await ParentModel.find({
        "kids._id": { $in: classes[i].kids }
      }).select("kids");
      allClassesKids?.map((el) =>
        el.kids.map(
          (kid) =>
            classes[i]?.kids.find((e) => e.toString() === kid._id.toString()) &&
            allKids.push(kid)
        )
      );
      updatedClasss.push({ ...classes[i].toObject(), kids: allKids });
    }
    res.status(200).json(updatedClasss);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- CREATE ANNOUNCEMENT -----------------------------
// ---------------------------------------------------------------
exports.new_announcement = async (req, res, next) => {
  try {
    const { class_id, message } = req.body;
    let files_path = req.files.map(({ path }) => path);
    const announcement = await AnnouncementModel.create({
      user_id: req?.user?.id,
      class_id,
      message,
      files: files_path
    });

    const single_class = await ClassModel.findOne({ _id: class_id })
    // let filtered_tokens = await filteredFCMTokens(announcement?.user_id);
    // if (filtered_tokens?.length > 0) {
    //   await sendNotification({
    //     title: `Announcement Created`,
    //     body: `Announcement in Class ${single_class?.name} Created Successfully.`,
    //     userTokens: filtered_tokens
    //   });
    // }

    await notificationModel.create({
      user_id: announcement?.user_id,
      type: "view",
      title: `Announcement Created`,
      body: `Announcement in Class ${single_class?.name} Created Successfully.`,
      status: "unread"
    });


    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- GET ANNOUNCEMENT -----------------------------
// ---------------------------------------------------------------
exports.get_announcement = async (req, res, next) => {
  try {
    const { id } = req.params;
    const announcement = await AnnouncementModel.findById(id).populate(
      "user_id class_id"
    );
    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- GET ANNOUNCEMENT BY CLASS ID -----------------------------
// ---------------------------------------------------------------
exports.get_announcement_by_class_id = async (req, res, next) => {
  try {
    const { id } = req.params;
    const announcement = await AnnouncementModel.findOne({
      class_id: id
    }).populate("user_id class_id");
    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- UPDATE ANNOUNCEMENT -----------------------------
// ---------------------------------------------------------------
exports.update_announcement = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
    let updated_obj = {};
    const announcement = await AnnouncementModel.findById(id);
    let announcementFiles = announcement?.files;
    if (req?.files?.length > 0) {
      for (let i = 0; i < announcementFiles.length; i++) {
        delete_file(announcementFiles[i]);
      }
      announcementFiles = req.files.map(({ path }) => path);
      updated_obj.files = announcementFiles;
    }
    if (message) updated_obj.message = message;

    await AnnouncementModel.updateOne({ _id: id }, { $set: updated_obj });

    const updated_announcement = await AnnouncementModel.findById(id).populate(
      "user_id class_id"
    );
    res.status(200).json(updated_announcement);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- DELETE ANNOUNCEMENT -----------------------------
// ---------------------------------------------------------------
exports.delete_announcement = async (req, res, next) => {
  try {
    const { id } = req.params;
    const announcement = await AnnouncementModel.findById(id);
    let announcementFiles = announcement?.files;
    for (let i = 0; i < announcementFiles.length; i++) {
      delete_file(announcementFiles[i]);
    }
    await AnnouncementModel.deleteOne({ _id: id });

    res.status(200).json({ message: "Announcement Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- NEW COMMENT -----------------------------
// ---------------------------------------------------------------
exports.new_comment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
    const announcement = await AnnouncementModel.findById(id);
    let announcement_comments = announcement?.comments;
    let comment_obj = {};
    comment_obj.user_id = req?.user?._id;
    comment_obj.name = `${req?.user?.first_name} ${req?.user?.last_name}`;
    comment_obj.time = new Date();
    if (message) comment_obj.message = message;
    if (req.files?.length > 0) {
      let comment_files = req.files.map(({ path }) => path);
      comment_obj.files = comment_files;
    }
    announcement_comments.push(comment_obj);
    await AnnouncementModel.updateOne(
      { _id: id },
      {
        $set: {
          comments: announcement_comments
        }
      }
    );

    const updated_announcement = await AnnouncementModel.findById(id).populate(
      "user_id class_id"
    );

    // let filtered_tokens = await filteredFCMTokens(announcement?.user_id);
    // if (filtered_tokens?.length > 0) {
    //   await sendNotification({
    //     title: `New Message`,
    //     body: `You have a new comment in announcement of class ${updated_announcement?.class_id?.name}`,
    //     userTokens: filtered_tokens
    //   });
    // }

    await notificationModel.create({
      user_id: announcement?.user_id,
      type: "view",
      title: `New Message`,
      body: `You have a new comment in announcement of class ${updated_announcement?.class_id?.name}`,
      status: "unread"
    });


    res.status(200).json(updated_announcement);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- DELETE COMMENT -----------------------------
// ---------------------------------------------------------------
exports.delete_comment = async (req, res, next) => {
  try {
    const { comment_id: id, announcement_id } = req.query;
    const announcement = await AnnouncementModel.findOne({
      "comments._id": id
    });

    const commentExists = announcement?.comments?.find(
      (r) => r._id.toString() === id.toString()
    );

    if (commentExists) {
      announcement?.comments?.forEach((comment) => {
        if (comment?._id?.toString() === id?.toString()) {
          for (let i = 0; i < comment?.files?.length; i++) {
            delete_file(comment?.files[i]);
          }
          comment.remove();
        }
      });
    }

    await announcement.save();

    const updated_announcement = await AnnouncementModel.findById(
      announcement_id
    ).populate("user_id class_id");

    res.status(200).json(updated_announcement);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- PLACE REVIEW -----------------------------
// ---------------------------------------------------------------
exports.place_review = async (req, res, next) => {
  try {
    const { rating, comment, class_id } = req.body;

    const class_doc = await ClassModel.findById(class_id);
    if (class_doc?.reviewed_by?.includes(req?.user?.id))
      return res.status(404).send({
        message: "This user already place review aganist this class."
      });
    class_doc?.reviewed_by.push(req?.user?._id);
    const tutor = await TutorModel.findOne({ user_id: class_doc?.tutor_id });
    let all_reviews = tutor?.reviews || [];
    // let files = [];
    // if (req?.files?.length > 0) {
    //   files = req.files.map(({ path }) => path);
    // }
    all_reviews.push({
      class_id,
      user_id: req?.user?._id,
      // username: `${req?.user?.first_name} ${req?.user?.last_name}`,
      rating,
      comment
      // files,
    });

    tutor.no_of_review++;
    tutor.rating =
      tutor.reviews.reduce((acc, item) => item.rating + acc, 0) /
      tutor.reviews.length;

    await class_doc.save();
    await tutor.save();

    const updated_tutor = await TutorModel.findOne({
      user_id: class_doc?.tutor_id
    }).populate("user_id reviews.user_id");

    // let user_filtered_tokens = await filteredFCMTokens(req?.user?._id);
    // if (user_filtered_tokens?.length > 0) {
    //   await sendNotification({
    //     title: `Review Placed`,
    //     body: `Review Placed Successfully.`,
    //     userTokens: user_filtered_tokens
    //   });
    // }

    // let tutor_filtered_tokens = await filteredFCMTokens(class_doc?.tutor_id);
    // if (tutor_filtered_tokens?.length > 0) {
    //   await sendNotification({
    //     title: `Review Placed`,
    //     body: `${req?.user?.first_name} ${req?.user?.last_name} Place a review against your profile.`,
    //     userTokens: tutor_filtered_tokens
    //   });
    // }

    await notificationModel.create({
      user_id: req?.user?._id,
      type: "view",
      title: `Review Placed`,
      body: `Review Placed Successfully.`,
      status: "unread"
    });

    await notificationModel.create({
      user_id: class_doc?.tutor_id,
      type: "view",
      title: `Review Placed`,
      body: `${req?.user?.first_name} ${req?.user?.last_name} Place a review against your profile.`,
      status: "unread"
    });



    res.status(200).json(updated_tutor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- PURCHASES / EARNINGs  -----------------------------
// ---------------------------------------------------------------
exports.purchases_earnings = async (req, res, next) => {
  try {    
    let purchases
    if (req.user.user_type === "tutor") {
      purchases = await PaymentModel.find({ tutor_id: req.user._id }).populate(
         "tutor_id user_id class_id"
      );
    } else {
      purchases = await PaymentModel.find({ user_id: req.user._id }).populate(
         "tutor_id user_id class_id"
      );
    }
    
    res.status(200).json(purchases);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};
