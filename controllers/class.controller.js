const ClassModel = require("../models/class.model")
const AnnouncementModel = require("../models/announcement.model")
const formatDate = require("date-fns/format");
const { isBefore, isSameDay, isAfter } = require("date-fns");
const { delete_file } = require("../middlewares/multer")
const moment = require("moment")

// ---------------------------------------------------------------
// --------------------- GET UPCOMMING CLASSES -----------------------------
// ---------------------------------------------------------------
exports.get_upcoming_classes = async (req, res, next) => {
    try {
        const { date } = req.params
        let classes;
        if (req.user.user_type === "tutor") {
            classes = await ClassModel.find({ tutor_id: req.user._id }).populate("user_id tutor_id")
        } else {
            classes = await ClassModel.find({ user_id: req.user._id }).populate("user_id tutor_id")
        }
        let filteredClasses = classes.filter(el => {
            let elDate = moment(el.class_date).format('YYYY-MM-DD');
            return moment(elDate).isSame(date)
        })

        res.status(200).json(filteredClasses);
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
};

// ---------------------------------------------------------------
// --------------------- GET SINGLE CLASS -----------------------------
// ---------------------------------------------------------------
exports.get_single_class = async (req, res, next) => {
    try {
        const { id } = req.params
        let single_class = await ClassModel.findById(id).populate("user_id tutor_id")
        res.status(200).json(single_class);
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
        if (req.user.user_type === "tutor") {
            classes = await ClassModel.find({ tutor_id: req.user._id }).populate("user_id tutor_id")
        } else {
            classes = await ClassModel.find({ user_id: req.user._id }).populate("user_id tutor_id")
        }
        res.status(200).json(classes);
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
        })
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
        const announcement = await AnnouncementModel.findById(id).populate("user_id class_id")
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
        const { message } = req.body
        let updated_obj = {};
        const announcement = await AnnouncementModel.findById(id);
        let announcementFiles = announcement?.files;
        if (req?.files?.length > 0) {
            for (let i = 0; i < announcementFiles.length; i++) {
                delete_file(announcementFiles[i])
            }
            announcementFiles = req.files.map(({ path }) => path);
            updated_obj.files = announcementFiles
        }
        if (message) updated_obj.message = message;

        await AnnouncementModel.updateOne({ _id: id }, { $set: updated_obj })

        const updated_announcement = await AnnouncementModel.findById(id).populate("user_id class_id")
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
            delete_file(announcementFiles[i])
        }
        await AnnouncementModel.deleteOne({ _id: id })

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
        let comment_obj = {}
        if (message) comment_obj.message = message;
        if (req.files?.length > 0) {
            let comment_files = req.files.map(({ path }) => path);
            comment_obj.files = comment_files;
        }
        announcement_comments.push(comment_obj);
        await AnnouncementModel.updateOne({ _id: id }, {
            $set: {
                comments: announcement_comments
            }
        })

        const updated_announcement = await AnnouncementModel.findById(id).populate("user_id class_id")

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
        const announcement = await AnnouncementModel.findOne({ "comments._id": id });

        const commentExists = announcement.comments.find(
            (r) => r._id.toString() === id.toString()
        );

        if (commentExists) {
            announcement.comments.forEach((comment) => {
                if (comment._id.toString() === id.toString()) {
                    for (let i = 0; i < comment.files.length; i++) {
                        delete_file(comment.files[i])
                    }
                    comment.remove();
                }
            });
        }

        await announcement.save();

        const updated_announcement = await AnnouncementModel.findById(announcement_id).populate("user_id class_id")

        res.status(200).json(updated_announcement);
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
};