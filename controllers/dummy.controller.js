const dummyModel = require("../models/dummy.model");

exports.post_data = async (req, res, next) => {
  try {
    const {
     data
    } = req.body;
      
    const new_data = await dummyModel.create({user_id: req.user._id, data})

    res.status(200).json(new_data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error?.message });
  }
};

exports.get_data = async (req, res, next) => {
  try {      
    const data = await dummyModel.findOne({user_id: req.user._id})
    await dummyModel.deleteOne({user_id: req.user._id})

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error?.message });
  }
};