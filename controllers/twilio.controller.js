const { chatToken } = require("../libraries/twilio");
const ChatRoomModel = require("../models/chatRoom.model");

// ---------------------------------------------------------------
// --------------------- CREATE CHAT TOKEN -----------------------------
// ---------------------------------------------------------------
exports.createChatToken = async (req, res, next) => {
  try {
    const identity = req.user._id.toString()

    const token = await chatToken(identity);

    let data = {
      identity: token.identity,
      token: token.toJwt(),
    };
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- GET USER ALL CHATROOM -----------------------------
// ---------------------------------------------------------------
exports.getUserChatRoom = async (req, res, next) => {
  try {
    const id = req.user._id;

    const chatRooms = await ChatRoomModel.find({$or: [{tutor_id: id}, {user_id: id}]}).populate("user_id tutor_id").sort({updatedAt: -1})
    res.status(200).json(chatRooms);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error?.message });
  }
};


//----------------------------------------------------------------------
//-------------------- GET SINGLE CHAT ROOM -------------------------
//----------------------------------------------------------------------
exports.getSingleChatRoom = async (req, res, next) => {
  try {
    const data = await ChatRoomModel.findOne({ _id: req.params.id }).populate("tutor_id user_id");

    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


//----------------------------------------------------------------------
//-------------------- UPDATE CHAT ROOM -------------------------
//----------------------------------------------------------------------
exports.updateChatRoom = async (req, res, next) => {
  try {
    let id = req.params.id
    await ChatRoomModel.findByIdAndUpdate(id, {
      $set: { new: req.body.new },
    });

    const chatRoom = await ChatRoomModel.findOne({_id: id})
    res.status(200).json(chatRoom);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

