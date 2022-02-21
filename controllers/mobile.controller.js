const UserModel = require("../models/user.model.js");
const ParentModel = require("../models/parent.model.js");
const TutorModel = require("../models/tutor.model.js");

// ---------------------------------------------------------------
// --------------------- UPDATE USER NAME -----------------------------
// ---------------------------------------------------------------
exports.update_user_name = async (req, res, next) => {
    try {
        const { first_name, last_name } = req.body;
        let update_obj = {};

        if (first_name) update_obj.first_name = first_name;
        if (last_name) update_obj.last_name = last_name;

        await UserModel.updateOne({ _id: req.user?.id }, { $set: update_obj })

        const user = await UserModel.findById(req.user.id)
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
};

// ---------------------------------------------------------------
// --------------------- UPDATE USER PERSONAL INFO -----------------------------
// ---------------------------------------------------------------
exports.update_user_personal_info = async (req, res, next) => {
    try {
        const { email, phone_number, location } = req.body;
        let user_obj = {};
        let update_obj = {};

        if (email) user_obj.email = email;
        if (email) update_obj.email = email;
        if (phone_number) update_obj.phone_number = phone_number;
        if (location) update_obj.location = location;

        await UserModel.updateOne({ _id: req.user?.id }, { $set: user_obj })
        if (req?.user?.user_type === "tutor") {
            await TutorModel.updateOne({ user_id: req.user?.id }, { $set: update_obj })
        } else {
            await ParentModel.updateOne({ user_id: req.user?.id }, { $set: update_obj })
        }

        const user = await UserModel.findById(req.user.id)
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
};