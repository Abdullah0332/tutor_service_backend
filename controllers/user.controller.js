import User from "../models/user.model.js";

// export const registerUser = async (req, res, next) => {
//   try {
//     const { name, email, password, referralId } = req.body;

//     const { isValid, errors } = await signupValidator(req.body);

//     if (isValid > 0) {
//       return res.status(400).json(errors);
//     }

//     let user;
//     if (referralId) {
//       user = await User.create({
//         name,
//         email,
//         password,
//         referBy: referralId,
//       });

//       let referralUser = await User.findById(referralId);
//       let totalCounts = referralUser.referralCount;

//       referralUser.referralCount = totalCounts + 1;
//       await referralUser.save();
//     } else {
//       user = await User.create({ name, email, password });
//     }

//     await User.updateOne(
//       { _id: user?._id },
//       { $set: { referralLink: user?._id } }
//     );

//     res.status(201).json(user);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
