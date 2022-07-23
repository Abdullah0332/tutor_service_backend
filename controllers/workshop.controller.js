const WorkshopModel = require("../models/workship.model");
const WorkshopRegistrationModel = require("../models/workshopRegistration.model");
const { create_workshop_service } = require("../services/workshop.service");
const {
  create_workshop_validator,
  register_workshop_validator,
} = require("../validators/workshop.validation");

// ---------------------------------------------------------------
// --------------------- CREATE WORKSHOP -----------------------------
// ---------------------------------------------------------------
exports.create_workshop = async (req, res, next) => {
  try {
    const {
      title,
      date,
      total_seats_available,
      price_per_seat,
      language_of_workshop,
      organizer_name,
      online_workshop,
      contact_information,
    } = req.body;
    const { isValid, errors } = await create_workshop_validator(req.body);

    if (isValid > 0) {
      return res.status(401).json(errors);
    }

    let galleryImages = req?.files?.map(({ path }) => path);

    let workshop = await WorkshopModel.create({
      user_id: req.user._id,
      title,
      date,
      total_seats_available,
      price_per_seat,
      language_of_workshop,
      organizer_name,
      online_workshop,
      contact_information,
      gallery: galleryImages || [],
    });

    res.status(200).json(workshop);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- GET ALL WORKSHOPS -----------------------------
// ---------------------------------------------------------------
exports.get_all_workshops = async (req, res, next) => {
  try {
    let workshops = await WorkshopModel.find({});

    res.status(200).json(workshops);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- GET SINGLE WORKSHOP -----------------------------
// ---------------------------------------------------------------
exports.get_single_workshop = async (req, res, next) => {
  try {
    const { id } = req.params;
    let workshop = await WorkshopModel.findOne({ _id: id });

    res.status(200).json(workshop);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- UPDATE WORKSHOP -----------------------------
// ---------------------------------------------------------------
exports.update_workshop = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { update_workshop_object } = await create_workshop_service(req);

    await WorkshopModel.updateOne(
      { _id: id },
      { $set: update_workshop_object }
    );

    let workshop = await WorkshopModel.findOne({ _id: id });
    let gallery_images = req.files.map(({ path }) => path);
    workshop.gallery.push(...gallery_images);
    await workshop.save();

    let data = await WorkshopModel.findOne({ _id: id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- DELETE WORKSHOP -----------------------------
// ---------------------------------------------------------------
exports.delete_workshop = async (req, res, next) => {
  try {
    const { id } = req.params;

    await WorkshopModel.findOneAndDelete({ _id: id });

    res.status(200).json({ message: "Workshop Deleted Successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- WORKSHOP REGISTRATION -----------------------------
// ---------------------------------------------------------------
exports.register_on_workshop = async (req, res, next) => {
  try {
    const { name_of_card, card_number, exp_date, cvv, email, workshop_id } =
      req.body;

    const { isValid, errors } = await register_workshop_validator(req.body);

    if (isValid > 0) {
      return res.status(401).json(errors);
    }

    const alreadyRegister = await WorkshopRegistrationModel.findOne({
      email,
      workshop_id,
    });

    if (alreadyRegister) {
      return res.status(404).json({
        message: "User with this email already registered on this workshop.",
      });
    }

    const data = await WorkshopRegistrationModel.create({
      name_of_card,
      card_number,
      exp_date,
      cvv,
      email,
      workshop_id,
      payment_status: "paid",
    });

    let workshop = await WorkshopModel.findOne({ _id: workshop_id });
    workshop.emails.push(email);
    workshop.registration_ids.push(data._id);
    workshop.total_seats_available--;
    await workshop.save();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};
