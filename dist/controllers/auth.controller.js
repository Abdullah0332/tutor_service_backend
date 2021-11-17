"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_user_profile_picture = exports.update_payment_method = exports.udpate_password_from_profile = exports.social_login = exports.sign_up = exports.reset_password = exports.remove_payment_method = exports.refresh_token = exports.otp_verify = exports.me = exports.login = exports.get_all_payment_method = exports.forgot_password = exports.add_payment_method = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _tutor = _interopRequireDefault(require("../models/tutor.mode"));

var _parent = _interopRequireDefault(require("../models/parent.model"));

var _auth = require("../validators/auth.validations");

var _utils = require("../libraries/utils");

var _email = require("../libraries/emails/email.sender");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// ---------------------------------------------------------------
// --------------------- SIGN UP -----------------------------
// ---------------------------------------------------------------
var sign_up = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, user_type, first_name, last_name, email, password, _yield$sign_up_valida, isValid, errors, user, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, user_type = _req$body.user_type, first_name = _req$body.first_name, last_name = _req$body.last_name, email = _req$body.email, password = _req$body.password;
            _context.next = 4;
            return (0, _auth.sign_up_validator)(req.body);

          case 4:
            _yield$sign_up_valida = _context.sent;
            isValid = _yield$sign_up_valida.isValid;
            errors = _yield$sign_up_valida.errors;

            if (!(isValid > 0)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status(400).json(errors));

          case 9:
            _context.next = 11;
            return _user["default"].create({
              user_type: user_type,
              first_name: first_name,
              last_name: last_name,
              email: email.toLowerCase(),
              password: password,
              register_type: "local",
              active: true
            });

          case 11:
            user = _context.sent;

            if (!(user_type === "tutor")) {
              _context.next = 17;
              break;
            }

            _context.next = 15;
            return _tutor["default"].create({
              user_id: user === null || user === void 0 ? void 0 : user._id,
              email: email
            });

          case 15:
            _context.next = 19;
            break;

          case 17:
            _context.next = 19;
            return _parent["default"].create({
              user_id: user === null || user === void 0 ? void 0 : user._id,
              type: user_type,
              email: email
            });

          case 19:
            token = user.getJwtToken();
            res.status(201).json(_objectSpread(_objectSpread({}, user.toObject()), {}, {
              token: token
            }));
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message
            });

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 23]]);
  }));

  return function sign_up(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- LOGIN -----------------------------
// ---------------------------------------------------------------


exports.sign_up = sign_up;

var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var email, _yield$login_validato, isValid, errors, user, token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            email = req.body.email;
            _context2.next = 4;
            return (0, _auth.login_validator)(req.body);

          case 4:
            _yield$login_validato = _context2.sent;
            isValid = _yield$login_validato.isValid;
            errors = _yield$login_validato.errors;

            if (!(isValid > 0)) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.status(400).json(errors));

          case 9:
            _context2.next = 11;
            return _user["default"].findOne({
              email: email.toLowerCase()
            });

          case 11:
            user = _context2.sent;
            token = user.getJwtToken();
            res.status(200).json(_objectSpread(_objectSpread({}, user.toObject()), {}, {
              token: token
            }));
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message
            });

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 16]]);
  }));

  return function login(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- SOCIAL LOGIN -----------------------------
// ---------------------------------------------------------------


exports.login = login;

var social_login = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var _req$body2, name, user_type, email, socialId, url, type, userExit, _token, user, token;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body2 = req.body, name = _req$body2.name, user_type = _req$body2.user_type, email = _req$body2.email, socialId = _req$body2.socialId, url = _req$body2.url, type = _req$body2.type;
            _context3.next = 4;
            return _user["default"].findOne({
              email: email.toLowerCase()
            });

          case 4:
            userExit = _context3.sent;

            if (!userExit) {
              _context3.next = 8;
              break;
            }

            _token = userExit.getJwtToken();
            return _context3.abrupt("return", res.status(200).json(_objectSpread(_objectSpread({}, user.toObject()), {}, {
              token: _token
            })));

          case 8:
            _context3.next = 10;
            return _user["default"].create({
              user_type: user_type,
              first_name: name,
              last_name: name,
              email: email.toLowerCase(),
              // password,
              register_type: type,
              active: true
            });

          case 10:
            user = _context3.sent;

            if (!(user_type === "tutor")) {
              _context3.next = 16;
              break;
            }

            _context3.next = 14;
            return _tutor["default"].create({
              user_id: user === null || user === void 0 ? void 0 : user._id,
              email: email
            });

          case 14:
            _context3.next = 18;
            break;

          case 16:
            _context3.next = 18;
            return _parent["default"].create({
              user_id: user === null || user === void 0 ? void 0 : user._id,
              type: user_type,
              email: email
            });

          case 18:
            token = user.getJwtToken();
            res.status(200).json(_objectSpread(_objectSpread({}, user.toObject()), {}, {
              token: token
            }));
            _context3.next = 25;
            break;

          case 22:
            _context3.prev = 22;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              message: _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message
            });

          case 25:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 22]]);
  }));

  return function social_login(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- LOGGED IN USER -----------------------------
// ---------------------------------------------------------------


exports.social_login = social_login;

var me = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var user, profile;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _user["default"].findById(req.user._id);

          case 3:
            user = _context4.sent;

            if (!((user === null || user === void 0 ? void 0 : user.user_type) === "tutor")) {
              _context4.next = 10;
              break;
            }

            _context4.next = 7;
            return _tutor["default"].findOne({
              user_id: req.user._id
            });

          case 7:
            profile = _context4.sent;
            _context4.next = 13;
            break;

          case 10:
            _context4.next = 12;
            return _parent["default"].findOne({
              user_id: req.user._id
            });

          case 12:
            profile = _context4.sent;

          case 13:
            res.status(200).json(_objectSpread(_objectSpread({}, user.toObject()), {}, {
              profile: profile
            }));
            _context4.next = 19;
            break;

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: _context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.message
            });

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 16]]);
  }));

  return function me(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- FORGOT PASSWORD -----------------------------
// ---------------------------------------------------------------


exports.me = me;

var forgot_password = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var email, _yield$forgot_passwor, isValid, errors, otp, user;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            email = req.body.email;
            _context5.next = 4;
            return (0, _auth.forgot_password_validation)(req.body);

          case 4:
            _yield$forgot_passwor = _context5.sent;
            isValid = _yield$forgot_passwor.isValid;
            errors = _yield$forgot_passwor.errors;

            if (!(isValid > 0)) {
              _context5.next = 9;
              break;
            }

            return _context5.abrupt("return", res.status(400).json(errors));

          case 9:
            _context5.next = 11;
            return (0, _utils.randomOTP)();

          case 11:
            otp = _context5.sent;
            _context5.next = 14;
            return _user["default"].findOne({
              email: email.toLowerCase()
            });

          case 14:
            user = _context5.sent;
            _context5.next = 17;
            return _user["default"].updateOne({
              email: email.toLowerCase()
            }, {
              $set: {
                otp: otp
              }
            });

          case 17:
            _context5.next = 19;
            return (0, _email.forgot_password_email)({
              email: email,
              subject: "Forgot Password",
              otp: otp,
              name: "".concat(user === null || user === void 0 ? void 0 : user.first_name, " ").concat(user === null || user === void 0 ? void 0 : user.last_name)
            });

          case 19:
            res.status(200).json({
              message: "Check you eamil, OTP send successfully."
            });
            _context5.next = 25;
            break;

          case 22:
            _context5.prev = 22;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              message: _context5.t0 === null || _context5.t0 === void 0 ? void 0 : _context5.t0.message
            });

          case 25:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 22]]);
  }));

  return function forgot_password(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- OTP VERIFY -----------------------------
// ---------------------------------------------------------------


exports.forgot_password = forgot_password;

var otp_verify = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var _req$body3, email, otp, _yield$otp_validation, isValid, errors, user;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _req$body3 = req.body, email = _req$body3.email, otp = _req$body3.otp;
            _context6.next = 4;
            return (0, _auth.otp_validation)(req.body);

          case 4:
            _yield$otp_validation = _context6.sent;
            isValid = _yield$otp_validation.isValid;
            errors = _yield$otp_validation.errors;

            if (!(isValid > 0)) {
              _context6.next = 9;
              break;
            }

            return _context6.abrupt("return", res.status(400).json(errors));

          case 9:
            _context6.next = 11;
            return _user["default"].findOne({
              email: email.toLowerCase(),
              otp: otp
            });

          case 11:
            user = _context6.sent;
            _context6.next = 14;
            return _user["default"].updateOne({
              email: email.toLowerCase()
            }, {
              $set: {
                otp: null
              }
            });

          case 14:
            res.status(200).json({
              message: "OTP verified successfully."
            });
            _context6.next = 20;
            break;

          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](0);
            res.status(500).json({
              message: _context6.t0 === null || _context6.t0 === void 0 ? void 0 : _context6.t0.message
            });

          case 20:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 17]]);
  }));

  return function otp_verify(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- RESET PASSWORD -----------------------------
// ---------------------------------------------------------------


exports.otp_verify = otp_verify;

var reset_password = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var _req$body4, email, password, _yield$reset_password, isValid, errors, user;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _req$body4 = req.body, email = _req$body4.email, password = _req$body4.password;
            _context7.next = 4;
            return (0, _auth.reset_password_validation)(req.body);

          case 4:
            _yield$reset_password = _context7.sent;
            isValid = _yield$reset_password.isValid;
            errors = _yield$reset_password.errors;

            if (!(isValid > 0)) {
              _context7.next = 9;
              break;
            }

            return _context7.abrupt("return", res.status(400).json(errors));

          case 9:
            _context7.next = 11;
            return _user["default"].findOne({
              email: email.toLowerCase()
            });

          case 11:
            user = _context7.sent;
            user.password = password;
            _context7.next = 15;
            return user.save();

          case 15:
            res.status(200).json({
              message: "Paassword Reset successfully."
            });
            _context7.next = 21;
            break;

          case 18:
            _context7.prev = 18;
            _context7.t0 = _context7["catch"](0);
            res.status(500).json({
              message: _context7.t0 === null || _context7.t0 === void 0 ? void 0 : _context7.t0.message
            });

          case 21:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 18]]);
  }));

  return function reset_password(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- REFRESH TOKEN -----------------------------
// ---------------------------------------------------------------


exports.reset_password = reset_password;

var refresh_token = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var user, token;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _user["default"].findById(req.user._id);

          case 3:
            user = _context8.sent;
            token = user.getJwtToken();
            res.status(200).json({
              token: token
            });
            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](0);
            res.status(500).json({
              message: _context8.t0 === null || _context8.t0 === void 0 ? void 0 : _context8.t0.message
            });

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 8]]);
  }));

  return function refresh_token(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- UPDATE PROFILE PICTURE -----------------------------
// ---------------------------------------------------------------


exports.refresh_token = refresh_token;

var update_user_profile_picture = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res, next) {
    var _req$user, _req$file, _req$user2, data;

    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            console.log(req.file);
            _context9.next = 4;
            return _user["default"].updateOne({
              _id: req === null || req === void 0 ? void 0 : (_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user._id
            }, {
              $set: {
                profile_pic: req === null || req === void 0 ? void 0 : (_req$file = req.file) === null || _req$file === void 0 ? void 0 : _req$file.path
              }
            });

          case 4:
            _context9.next = 6;
            return _user["default"].findById(req === null || req === void 0 ? void 0 : (_req$user2 = req.user) === null || _req$user2 === void 0 ? void 0 : _req$user2._id);

          case 6:
            data = _context9.sent;
            res.status(200).json(data);
            _context9.next = 13;
            break;

          case 10:
            _context9.prev = 10;
            _context9.t0 = _context9["catch"](0);
            res.status(500).json({
              message: _context9.t0 === null || _context9.t0 === void 0 ? void 0 : _context9.t0.message
            });

          case 13:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 10]]);
  }));

  return function update_user_profile_picture(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- UPDATE PASSWORD FROM PROFILE -----------------------------
// ---------------------------------------------------------------


exports.update_user_profile_picture = update_user_profile_picture;

var udpate_password_from_profile = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res, next) {
    var _yield$update_passwor, isValid, errors;

    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return (0, _auth.update_password_from_profile_validation)(req);

          case 3:
            _yield$update_passwor = _context10.sent;
            isValid = _yield$update_passwor.isValid;
            errors = _yield$update_passwor.errors;

            if (!(isValid > 0)) {
              _context10.next = 8;
              break;
            }

            return _context10.abrupt("return", res.status(400).json(errors));

          case 8:
            res.status(200).json({
              message: "Password Updated Successfully"
            });
            _context10.next = 14;
            break;

          case 11:
            _context10.prev = 11;
            _context10.t0 = _context10["catch"](0);
            res.status(500).json({
              message: _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message
            });

          case 14:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 11]]);
  }));

  return function udpate_password_from_profile(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- ADD PAYMENT METHOD -----------------------------
// ---------------------------------------------------------------


exports.udpate_password_from_profile = udpate_password_from_profile;

var add_payment_method = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res, next) {
    var _req$user3, _user_profile$payment, id, _req$body5, name_on_card, card_number, exp_date, cvv, user, user_profile;

    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            id = req === null || req === void 0 ? void 0 : (_req$user3 = req.user) === null || _req$user3 === void 0 ? void 0 : _req$user3._id;
            _req$body5 = req.body, name_on_card = _req$body5.name_on_card, card_number = _req$body5.card_number, exp_date = _req$body5.exp_date, cvv = _req$body5.cvv;
            _context11.next = 5;
            return _user["default"].findById(id);

          case 5:
            user = _context11.sent;

            if (!((user === null || user === void 0 ? void 0 : user.user_type) === "tutor")) {
              _context11.next = 12;
              break;
            }

            _context11.next = 9;
            return _tutor["default"].findOne({
              user_id: id
            });

          case 9:
            _context11.t0 = _context11.sent;
            _context11.next = 15;
            break;

          case 12:
            _context11.next = 14;
            return _parent["default"].findOne({
              user_id: id
            });

          case 14:
            _context11.t0 = _context11.sent;

          case 15:
            user_profile = _context11.t0;
            user_profile === null || user_profile === void 0 ? void 0 : (_user_profile$payment = user_profile.payment_detail) === null || _user_profile$payment === void 0 ? void 0 : _user_profile$payment.push({
              name_on_card: name_on_card,
              card_number: card_number,
              exp_date: exp_date,
              cvv: cvv
            });
            _context11.next = 19;
            return user_profile.save();

          case 19:
            res.status(200).json({
              message: "Payment Method Added Successfully"
            });
            _context11.next = 26;
            break;

          case 22:
            _context11.prev = 22;
            _context11.t1 = _context11["catch"](0);
            console.log(_context11.t1);
            res.status(500).json({
              message: _context11.t1 === null || _context11.t1 === void 0 ? void 0 : _context11.t1.message
            });

          case 26:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 22]]);
  }));

  return function add_payment_method(_x31, _x32, _x33) {
    return _ref11.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- UPDATE PAYMENT METHOD -----------------------------
// ---------------------------------------------------------------


exports.add_payment_method = add_payment_method;

var update_payment_method = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res, next) {
    var _req$user4, _req$params, id, _req$body6, name_on_card, card_number, exp_date, cvv, user;

    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _req$params = req === null || req === void 0 ? void 0 : req.params, id = _req$params.id;
            _req$body6 = req.body, name_on_card = _req$body6.name_on_card, card_number = _req$body6.card_number, exp_date = _req$body6.exp_date, cvv = _req$body6.cvv;
            _context12.next = 5;
            return _user["default"].findById(req === null || req === void 0 ? void 0 : (_req$user4 = req.user) === null || _req$user4 === void 0 ? void 0 : _req$user4._id);

          case 5:
            user = _context12.sent;

            if (!((user === null || user === void 0 ? void 0 : user.user_type) === "tutor")) {
              _context12.next = 11;
              break;
            }

            _context12.next = 9;
            return _tutor["default"].updateOne({
              "payment_detail._id": id
            }, {
              $set: {
                "payment_detail.$.name_on_card": name_on_card,
                "payment_detail.$.card_number": card_number,
                "payment_detail.$.exp_date": exp_date,
                "payment_detail.$.cvv": cvv
              }
            });

          case 9:
            _context12.next = 13;
            break;

          case 11:
            _context12.next = 13;
            return _parent["default"].updateOne({
              "payment_detail._id": id
            }, {
              $set: {
                "payment_detail.$.name_on_card": name_on_card,
                "payment_detail.$.card_number": card_number,
                "payment_detail.$.exp_date": exp_date,
                "payment_detail.$.cvv": cvv
              }
            });

          case 13:
            res.status(200).json({
              message: "Payment Method Updated Successfully"
            });
            _context12.next = 19;
            break;

          case 16:
            _context12.prev = 16;
            _context12.t0 = _context12["catch"](0);
            res.status(500).json({
              message: _context12.t0 === null || _context12.t0 === void 0 ? void 0 : _context12.t0.message
            });

          case 19:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 16]]);
  }));

  return function update_payment_method(_x34, _x35, _x36) {
    return _ref12.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- DELETE PAYMENT METHOD -----------------------------
// ---------------------------------------------------------------


exports.update_payment_method = update_payment_method;

var remove_payment_method = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res, next) {
    var _req$user5, _req$user6, _req$user7, _req$params2, id, user, user_detail, updated_user_detail;

    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _req$params2 = req === null || req === void 0 ? void 0 : req.params, id = _req$params2.id;
            _context13.next = 4;
            return _user["default"].findById(req === null || req === void 0 ? void 0 : (_req$user5 = req.user) === null || _req$user5 === void 0 ? void 0 : _req$user5._id);

          case 4:
            user = _context13.sent;

            if (user) {
              _context13.next = 7;
              break;
            }

            return _context13.abrupt("return", res.status(400).json({
              message: "User Not Found!!!"
            }));

          case 7:
            if (!((user === null || user === void 0 ? void 0 : user.user_type) === "tutor")) {
              _context13.next = 13;
              break;
            }

            _context13.next = 10;
            return _tutor["default"].findOne({
              user_id: req === null || req === void 0 ? void 0 : (_req$user6 = req.user) === null || _req$user6 === void 0 ? void 0 : _req$user6._id
            });

          case 10:
            _context13.t0 = _context13.sent;
            _context13.next = 16;
            break;

          case 13:
            _context13.next = 15;
            return _parent["default"].findOne({
              user_id: req === null || req === void 0 ? void 0 : (_req$user7 = req.user) === null || _req$user7 === void 0 ? void 0 : _req$user7._id
            });

          case 15:
            _context13.t0 = _context13.sent;

          case 16:
            user_detail = _context13.t0;

            if (user_detail) {
              _context13.next = 19;
              break;
            }

            return _context13.abrupt("return", res.status(400).json({
              message: "".concat(user === null || user === void 0 ? void 0 : user.user_type, " Detail Not Found!!!")
            }));

          case 19:
            updated_user_detail = user_detail.payment_detail.filter(function (payment) {
              return (payment === null || payment === void 0 ? void 0 : payment._id.toString()) !== id.toString();
            });
            user_detail.payment_detail = updated_user_detail;
            _context13.next = 23;
            return user_detail.save();

          case 23:
            res.status(200).json({
              message: "Payment Method Removed Successfully"
            });
            _context13.next = 29;
            break;

          case 26:
            _context13.prev = 26;
            _context13.t1 = _context13["catch"](0);
            res.status(500).json({
              message: _context13.t1 === null || _context13.t1 === void 0 ? void 0 : _context13.t1.message
            });

          case 29:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[0, 26]]);
  }));

  return function remove_payment_method(_x37, _x38, _x39) {
    return _ref13.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- GET ALL PAYMENT METHOD -----------------------------
// ---------------------------------------------------------------


exports.remove_payment_method = remove_payment_method;

var get_all_payment_method = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res, next) {
    var _req$user8, _req$user9, _req$user10, _req$params3, id, user, user_detail;

    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _req$params3 = req === null || req === void 0 ? void 0 : req.params, id = _req$params3.id;
            _context14.next = 4;
            return _user["default"].findById(req === null || req === void 0 ? void 0 : (_req$user8 = req.user) === null || _req$user8 === void 0 ? void 0 : _req$user8._id);

          case 4:
            user = _context14.sent;

            if (user) {
              _context14.next = 7;
              break;
            }

            return _context14.abrupt("return", res.status(400).json({
              message: "User Not Found!!!"
            }));

          case 7:
            if (!((user === null || user === void 0 ? void 0 : user.user_type) === "tutor")) {
              _context14.next = 13;
              break;
            }

            _context14.next = 10;
            return _tutor["default"].findOne({
              user_id: req === null || req === void 0 ? void 0 : (_req$user9 = req.user) === null || _req$user9 === void 0 ? void 0 : _req$user9._id
            });

          case 10:
            _context14.t0 = _context14.sent;
            _context14.next = 16;
            break;

          case 13:
            _context14.next = 15;
            return _parent["default"].findOne({
              user_id: req === null || req === void 0 ? void 0 : (_req$user10 = req.user) === null || _req$user10 === void 0 ? void 0 : _req$user10._id
            });

          case 15:
            _context14.t0 = _context14.sent;

          case 16:
            user_detail = _context14.t0;

            if (user_detail) {
              _context14.next = 19;
              break;
            }

            return _context14.abrupt("return", res.status(400).json({
              message: "".concat(user === null || user === void 0 ? void 0 : user.user_type, " Detail Not Found!!!")
            }));

          case 19:
            res.status(200).json({
              payment_detail: user_detail === null || user_detail === void 0 ? void 0 : user_detail.payment_detail
            });
            _context14.next = 25;
            break;

          case 22:
            _context14.prev = 22;
            _context14.t1 = _context14["catch"](0);
            res.status(500).json({
              message: _context14.t1 === null || _context14.t1 === void 0 ? void 0 : _context14.t1.message
            });

          case 25:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[0, 22]]);
  }));

  return function get_all_payment_method(_x40, _x41, _x42) {
    return _ref14.apply(this, arguments);
  };
}();

exports.get_all_payment_method = get_all_payment_method;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9hdXRoLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsic2lnbl91cCIsInJlcSIsInJlcyIsIm5leHQiLCJib2R5IiwidXNlcl90eXBlIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJpc1ZhbGlkIiwiZXJyb3JzIiwic3RhdHVzIiwianNvbiIsIlVzZXJNb2RlbCIsImNyZWF0ZSIsInRvTG93ZXJDYXNlIiwicmVnaXN0ZXJfdHlwZSIsImFjdGl2ZSIsInVzZXIiLCJUdXRvck1vZGVsIiwidXNlcl9pZCIsIl9pZCIsIlBhcmVudE1vZGVsIiwidHlwZSIsInRva2VuIiwiZ2V0Snd0VG9rZW4iLCJ0b09iamVjdCIsIm1lc3NhZ2UiLCJsb2dpbiIsImZpbmRPbmUiLCJzb2NpYWxfbG9naW4iLCJuYW1lIiwic29jaWFsSWQiLCJ1cmwiLCJ1c2VyRXhpdCIsIm1lIiwiZmluZEJ5SWQiLCJwcm9maWxlIiwiZm9yZ290X3Bhc3N3b3JkIiwib3RwIiwidXBkYXRlT25lIiwiJHNldCIsInN1YmplY3QiLCJvdHBfdmVyaWZ5IiwicmVzZXRfcGFzc3dvcmQiLCJzYXZlIiwicmVmcmVzaF90b2tlbiIsInVwZGF0ZV91c2VyX3Byb2ZpbGVfcGljdHVyZSIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwicHJvZmlsZV9waWMiLCJwYXRoIiwiZGF0YSIsInVkcGF0ZV9wYXNzd29yZF9mcm9tX3Byb2ZpbGUiLCJhZGRfcGF5bWVudF9tZXRob2QiLCJpZCIsIm5hbWVfb25fY2FyZCIsImNhcmRfbnVtYmVyIiwiZXhwX2RhdGUiLCJjdnYiLCJ1c2VyX3Byb2ZpbGUiLCJwYXltZW50X2RldGFpbCIsInB1c2giLCJ1cGRhdGVfcGF5bWVudF9tZXRob2QiLCJwYXJhbXMiLCJyZW1vdmVfcGF5bWVudF9tZXRob2QiLCJ1c2VyX2RldGFpbCIsInVwZGF0ZWRfdXNlcl9kZXRhaWwiLCJmaWx0ZXIiLCJwYXltZW50Iiwi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QSxPQUFPLEVBQUVwQixHQUFGLGFBQUVBLEdBQUYscUNBQUVBLEdBQUcsQ0FBRWtCLElBQVAsK0NBQUUsV0FBV0c7QUFBdEIsYUFBbkIsQ0Fac0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQWF0QkMsbUJBQVlPLE9BQVosQ0FBb0I7QUFBRVQsY0FBQUEsT0FBTyxFQUFFcEIsR0FBRixhQUFFQSxHQUFGLHNDQUFFQSxHQUFHLENBQUVrQixJQUFQLGdEQUFFLFlBQVdHO0FBQXRCLGFBQXBCLENBYnNCOztBQUFBO0FBQUE7O0FBQUE7QUFVNUI4QyxZQUFBQSxXQVY0Qjs7QUFBQSxnQkFlN0JBLFdBZjZCO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQWdCekJsRSxHQUFHLENBQ1BVLE1BREksQ0FDRyxHQURILEVBRUpDLElBRkksQ0FFQztBQUFFZSxjQUFBQSxPQUFPLFlBQUtULElBQUwsYUFBS0EsSUFBTCx1QkFBS0EsSUFBSSxDQUFFZCxTQUFYO0FBQVQsYUFGRCxDQWhCeUI7O0FBQUE7QUFxQmxDSCxZQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFa0QsY0FBQUEsY0FBYyxFQUFFSyxXQUFGLGFBQUVBLFdBQUYsdUJBQUVBLFdBQVcsQ0FBRUw7QUFBL0IsYUFBckI7QUFyQmtDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBdUJsQzdELFlBQUFBLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVlLGNBQUFBLE9BQU8sZ0VBQUUsY0FBT0E7QUFBbEIsYUFBckI7O0FBdkJrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUF0QjZDLHNCQUFzQjtBQUFBO0FBQUE7QUFBQSxHQUE1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQgVHV0b3JNb2RlbCBmcm9tIFwiLi4vbW9kZWxzL3R1dG9yLm1vZGVcIjtcbmltcG9ydCBQYXJlbnRNb2RlbCBmcm9tIFwiLi4vbW9kZWxzL3BhcmVudC5tb2RlbFwiO1xuaW1wb3J0IHtcbiAgc2lnbl91cF92YWxpZGF0b3IsXG4gIGxvZ2luX3ZhbGlkYXRvcixcbiAgZm9yZ290X3Bhc3N3b3JkX3ZhbGlkYXRpb24sXG4gIG90cF92YWxpZGF0aW9uLFxuICByZXNldF9wYXNzd29yZF92YWxpZGF0aW9uLFxuICB1cGRhdGVfcGFzc3dvcmRfZnJvbV9wcm9maWxlX3ZhbGlkYXRpb24sXG59IGZyb20gXCIuLi92YWxpZGF0b3JzL2F1dGgudmFsaWRhdGlvbnNcIjtcbmltcG9ydCB7IHJhbmRvbU9UUCB9IGZyb20gXCIuLi9saWJyYXJpZXMvdXRpbHNcIjtcbmltcG9ydCB7IGZvcmdvdF9wYXNzd29yZF9lbWFpbCB9IGZyb20gXCIuLi9saWJyYXJpZXMvZW1haWxzL2VtYWlsLnNlbmRlclwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTSUdOIFVQIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCBzaWduX3VwID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VyX3R5cGUsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHsgaXNWYWxpZCwgZXJyb3JzIH0gPSBhd2FpdCBzaWduX3VwX3ZhbGlkYXRvcihyZXEuYm9keSk7XG5cbiAgICBpZiAoaXNWYWxpZCA+IDApIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvcnMpO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuY3JlYXRlKHtcbiAgICAgIHVzZXJfdHlwZSxcbiAgICAgIGZpcnN0X25hbWUsXG4gICAgICBsYXN0X25hbWUsXG4gICAgICBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKSxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgcmVnaXN0ZXJfdHlwZTogXCJsb2NhbFwiLFxuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgaWYgKHVzZXJfdHlwZSA9PT0gXCJ0dXRvclwiKSB7XG4gICAgICBhd2FpdCBUdXRvck1vZGVsLmNyZWF0ZSh7XG4gICAgICAgIHVzZXJfaWQ6IHVzZXI/Ll9pZCxcbiAgICAgICAgZW1haWwsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgUGFyZW50TW9kZWwuY3JlYXRlKHtcbiAgICAgICAgdXNlcl9pZDogdXNlcj8uX2lkLFxuICAgICAgICB0eXBlOiB1c2VyX3R5cGUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW4gPSB1c2VyLmdldEp3dFRva2VuKCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IC4uLnVzZXIudG9PYmplY3QoKSwgdG9rZW4gfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvcj8ubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gTE9HSU4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBlbWFpbCB9ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCB7IGlzVmFsaWQsIGVycm9ycyB9ID0gYXdhaXQgbG9naW5fdmFsaWRhdG9yKHJlcS5ib2R5KTtcblxuICAgIGlmIChpc1ZhbGlkID4gMCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycm9ycyk7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHtcbiAgICAgIGVtYWlsOiBlbWFpbC50b0xvd2VyQ2FzZSgpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdG9rZW4gPSB1c2VyLmdldEp3dFRva2VuKCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IC4uLnVzZXIudG9PYmplY3QoKSwgdG9rZW4gfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvcj8ubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gU09DSUFMIExPR0lOIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCBzb2NpYWxfbG9naW4gPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IG5hbWUsIHVzZXJfdHlwZSwgZW1haWwsIHNvY2lhbElkLCB1cmwsIHR5cGUgfSA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3QgdXNlckV4aXQgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7XG4gICAgICBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKSxcbiAgICB9KTtcblxuICAgIC8vIGlmIHVzZXIgZXhpdFxuICAgIGlmICh1c2VyRXhpdCkge1xuICAgICAgY29uc3QgdG9rZW4gPSB1c2VyRXhpdC5nZXRKd3RUb2tlbigpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgLi4udXNlci50b09iamVjdCgpLFxuICAgICAgICB0b2tlbixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGlmIHVzZXIgZG9uJ3QgZXhpdFxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5jcmVhdGUoe1xuICAgICAgdXNlcl90eXBlLFxuICAgICAgZmlyc3RfbmFtZTogbmFtZSxcbiAgICAgIGxhc3RfbmFtZTogbmFtZSxcbiAgICAgIGVtYWlsOiBlbWFpbC50b0xvd2VyQ2FzZSgpLFxuICAgICAgLy8gcGFzc3dvcmQsXG4gICAgICByZWdpc3Rlcl90eXBlOiB0eXBlLFxuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgaWYgKHVzZXJfdHlwZSA9PT0gXCJ0dXRvclwiKSB7XG4gICAgICBhd2FpdCBUdXRvck1vZGVsLmNyZWF0ZSh7XG4gICAgICAgIHVzZXJfaWQ6IHVzZXI/Ll9pZCxcbiAgICAgICAgZW1haWwsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgUGFyZW50TW9kZWwuY3JlYXRlKHtcbiAgICAgICAgdXNlcl9pZDogdXNlcj8uX2lkLFxuICAgICAgICB0eXBlOiB1c2VyX3R5cGUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW4gPSB1c2VyLmdldEp3dFRva2VuKCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IC4uLnVzZXIudG9PYmplY3QoKSwgdG9rZW4gfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvcj8ubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gTE9HR0VEIElOIFVTRVIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IG1lID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kQnlJZChyZXEudXNlci5faWQpO1xuICAgIGxldCBwcm9maWxlO1xuICAgIGlmICh1c2VyPy51c2VyX3R5cGUgPT09IFwidHV0b3JcIikge1xuICAgICAgcHJvZmlsZSA9IGF3YWl0IFR1dG9yTW9kZWwuZmluZE9uZSh7IHVzZXJfaWQ6IHJlcS51c2VyLl9pZCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvZmlsZSA9IGF3YWl0IFBhcmVudE1vZGVsLmZpbmRPbmUoeyB1c2VyX2lkOiByZXEudXNlci5faWQgfSk7XG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAuLi51c2VyLnRvT2JqZWN0KCksIHByb2ZpbGUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvcj8ubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gRk9SR09UIFBBU1NXT1JEIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCBmb3Jnb3RfcGFzc3dvcmQgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGVtYWlsIH0gPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHsgaXNWYWxpZCwgZXJyb3JzIH0gPSBhd2FpdCBmb3Jnb3RfcGFzc3dvcmRfdmFsaWRhdGlvbihyZXEuYm9keSk7XG5cbiAgICBpZiAoaXNWYWxpZCA+IDApIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvcnMpO1xuICAgIH1cblxuICAgIGNvbnN0IG90cCA9IGF3YWl0IHJhbmRvbU9UUCgpO1xuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHsgZW1haWw6IGVtYWlsLnRvTG93ZXJDYXNlKCkgfSk7XG5cbiAgICBhd2FpdCBVc2VyTW9kZWwudXBkYXRlT25lKFxuICAgICAgeyBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKSB9LFxuICAgICAgeyAkc2V0OiB7IG90cCB9IH1cbiAgICApO1xuXG4gICAgYXdhaXQgZm9yZ290X3Bhc3N3b3JkX2VtYWlsKHtcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIHN1YmplY3Q6IFwiRm9yZ290IFBhc3N3b3JkXCIsXG4gICAgICBvdHA6IG90cCxcbiAgICAgIG5hbWU6IGAke3VzZXI/LmZpcnN0X25hbWV9ICR7dXNlcj8ubGFzdF9uYW1lfWAsXG4gICAgfSk7XG5cbiAgICByZXNcbiAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIkNoZWNrIHlvdSBlYW1pbCwgT1RQIHNlbmQgc3VjY2Vzc2Z1bGx5LlwiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE9UUCBWRVJJRlkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IG90cF92ZXJpZnkgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGVtYWlsLCBvdHAgfSA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3QgeyBpc1ZhbGlkLCBlcnJvcnMgfSA9IGF3YWl0IG90cF92YWxpZGF0aW9uKHJlcS5ib2R5KTtcblxuICAgIGlmIChpc1ZhbGlkID4gMCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycm9ycyk7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHsgZW1haWw6IGVtYWlsLnRvTG93ZXJDYXNlKCksIG90cCB9KTtcblxuICAgIGF3YWl0IFVzZXJNb2RlbC51cGRhdGVPbmUoXG4gICAgICB7IGVtYWlsOiBlbWFpbC50b0xvd2VyQ2FzZSgpIH0sXG4gICAgICB7ICRzZXQ6IHsgb3RwOiBudWxsIH0gfVxuICAgICk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiT1RQIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseS5cIiB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSRVNFVCBQQVNTV09SRCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgY29uc3QgcmVzZXRfcGFzc3dvcmQgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCB7IGlzVmFsaWQsIGVycm9ycyB9ID0gYXdhaXQgcmVzZXRfcGFzc3dvcmRfdmFsaWRhdGlvbihyZXEuYm9keSk7XG5cbiAgICBpZiAoaXNWYWxpZCA+IDApIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvcnMpO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IGVtYWlsOiBlbWFpbC50b0xvd2VyQ2FzZSgpIH0pO1xuXG4gICAgdXNlci5wYXNzd29yZCA9IHBhc3N3b3JkO1xuXG4gICAgYXdhaXQgdXNlci5zYXZlKCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiUGFhc3N3b3JkIFJlc2V0IHN1Y2Nlc3NmdWxseS5cIiB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSRUZSRVNIIFRPS0VOIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCByZWZyZXNoX3Rva2VuID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kQnlJZChyZXEudXNlci5faWQpO1xuXG4gICAgY29uc3QgdG9rZW4gPSB1c2VyLmdldEp3dFRva2VuKCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRva2VuIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFVQREFURSBQUk9GSUxFIFBJQ1RVUkUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IHVwZGF0ZV91c2VyX3Byb2ZpbGVfcGljdHVyZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKHJlcS5maWxlKTtcblxuICAgIGF3YWl0IFVzZXJNb2RlbC51cGRhdGVPbmUoXG4gICAgICB7IF9pZDogcmVxPy51c2VyPy5faWQgfSxcbiAgICAgIHsgJHNldDogeyBwcm9maWxlX3BpYzogcmVxPy5maWxlPy5wYXRoIH0gfVxuICAgICk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgVXNlck1vZGVsLmZpbmRCeUlkKHJlcT8udXNlcj8uX2lkKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFVQREFURSBQQVNTV09SRCBGUk9NIFBST0ZJTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IHVkcGF0ZV9wYXNzd29yZF9mcm9tX3Byb2ZpbGUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGlzVmFsaWQsIGVycm9ycyB9ID0gYXdhaXQgdXBkYXRlX3Bhc3N3b3JkX2Zyb21fcHJvZmlsZV92YWxpZGF0aW9uKFxuICAgICAgcmVxXG4gICAgKTtcblxuICAgIGlmIChpc1ZhbGlkID4gMCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycm9ycyk7XG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIlBhc3N3b3JkIFVwZGF0ZWQgU3VjY2Vzc2Z1bGx5XCIgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvcj8ubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gQUREIFBBWU1FTlQgTUVUSE9EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCBhZGRfcGF5bWVudF9tZXRob2QgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBsZXQgaWQgPSByZXE/LnVzZXI/Ll9pZDtcbiAgICBjb25zdCB7IG5hbWVfb25fY2FyZCwgY2FyZF9udW1iZXIsIGV4cF9kYXRlLCBjdnYgfSA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kQnlJZChpZCk7XG5cbiAgICBjb25zdCB1c2VyX3Byb2ZpbGUgPVxuICAgICAgdXNlcj8udXNlcl90eXBlID09PSBcInR1dG9yXCJcbiAgICAgICAgPyBhd2FpdCBUdXRvck1vZGVsLmZpbmRPbmUoeyB1c2VyX2lkOiBpZCB9KVxuICAgICAgICA6IGF3YWl0IFBhcmVudE1vZGVsLmZpbmRPbmUoeyB1c2VyX2lkOiBpZCB9KTtcblxuICAgIHVzZXJfcHJvZmlsZT8ucGF5bWVudF9kZXRhaWw/LnB1c2goe1xuICAgICAgbmFtZV9vbl9jYXJkLFxuICAgICAgY2FyZF9udW1iZXIsXG4gICAgICBleHBfZGF0ZSxcbiAgICAgIGN2dixcbiAgICB9KTtcblxuICAgIGF3YWl0IHVzZXJfcHJvZmlsZS5zYXZlKCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiUGF5bWVudCBNZXRob2QgQWRkZWQgU3VjY2Vzc2Z1bGx5XCIgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFVQREFURSBQQVlNRU5UIE1FVEhPRCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgY29uc3QgdXBkYXRlX3BheW1lbnRfbWV0aG9kID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IHsgaWQgfSA9IHJlcT8ucGFyYW1zO1xuICAgIGNvbnN0IHsgbmFtZV9vbl9jYXJkLCBjYXJkX251bWJlciwgZXhwX2RhdGUsIGN2diB9ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRCeUlkKHJlcT8udXNlcj8uX2lkKTtcblxuICAgIHVzZXI/LnVzZXJfdHlwZSA9PT0gXCJ0dXRvclwiXG4gICAgICA/IGF3YWl0IFR1dG9yTW9kZWwudXBkYXRlT25lKFxuICAgICAgICAgIHsgXCJwYXltZW50X2RldGFpbC5faWRcIjogaWQgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgICAgIFwicGF5bWVudF9kZXRhaWwuJC5uYW1lX29uX2NhcmRcIjogbmFtZV9vbl9jYXJkLFxuICAgICAgICAgICAgICBcInBheW1lbnRfZGV0YWlsLiQuY2FyZF9udW1iZXJcIjogY2FyZF9udW1iZXIsXG4gICAgICAgICAgICAgIFwicGF5bWVudF9kZXRhaWwuJC5leHBfZGF0ZVwiOiBleHBfZGF0ZSxcbiAgICAgICAgICAgICAgXCJwYXltZW50X2RldGFpbC4kLmN2dlwiOiBjdnYsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgOiBhd2FpdCBQYXJlbnRNb2RlbC51cGRhdGVPbmUoXG4gICAgICAgICAgeyBcInBheW1lbnRfZGV0YWlsLl9pZFwiOiBpZCB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICRzZXQ6IHtcbiAgICAgICAgICAgICAgXCJwYXltZW50X2RldGFpbC4kLm5hbWVfb25fY2FyZFwiOiBuYW1lX29uX2NhcmQsXG4gICAgICAgICAgICAgIFwicGF5bWVudF9kZXRhaWwuJC5jYXJkX251bWJlclwiOiBjYXJkX251bWJlcixcbiAgICAgICAgICAgICAgXCJwYXltZW50X2RldGFpbC4kLmV4cF9kYXRlXCI6IGV4cF9kYXRlLFxuICAgICAgICAgICAgICBcInBheW1lbnRfZGV0YWlsLiQuY3Z2XCI6IGN2dixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIlBheW1lbnQgTWV0aG9kIFVwZGF0ZWQgU3VjY2Vzc2Z1bGx5XCIgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvcj8ubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gREVMRVRFIFBBWU1FTlQgTUVUSE9EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCByZW1vdmVfcGF5bWVudF9tZXRob2QgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBsZXQgeyBpZCB9ID0gcmVxPy5wYXJhbXM7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRCeUlkKHJlcT8udXNlcj8uX2lkKTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogXCJVc2VyIE5vdCBGb3VuZCEhIVwiIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJfZGV0YWlsID1cbiAgICAgIHVzZXI/LnVzZXJfdHlwZSA9PT0gXCJ0dXRvclwiXG4gICAgICAgID8gYXdhaXQgVHV0b3JNb2RlbC5maW5kT25lKHsgdXNlcl9pZDogcmVxPy51c2VyPy5faWQgfSlcbiAgICAgICAgOiBhd2FpdCBQYXJlbnRNb2RlbC5maW5kT25lKHsgdXNlcl9pZDogcmVxPy51c2VyPy5faWQgfSk7XG5cbiAgICBpZiAoIXVzZXJfZGV0YWlsKSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoNDAwKVxuICAgICAgICAuanNvbih7IG1lc3NhZ2U6IGAke3VzZXI/LnVzZXJfdHlwZX0gRGV0YWlsIE5vdCBGb3VuZCEhIWAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZF91c2VyX2RldGFpbCA9IHVzZXJfZGV0YWlsLnBheW1lbnRfZGV0YWlsLmZpbHRlcihcbiAgICAgIChwYXltZW50KSA9PiBwYXltZW50Py5faWQudG9TdHJpbmcoKSAhPT0gaWQudG9TdHJpbmcoKVxuICAgICk7XG4gICAgdXNlcl9kZXRhaWwucGF5bWVudF9kZXRhaWwgPSB1cGRhdGVkX3VzZXJfZGV0YWlsO1xuICAgIGF3YWl0IHVzZXJfZGV0YWlsLnNhdmUoKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJQYXltZW50IE1ldGhvZCBSZW1vdmVkIFN1Y2Nlc3NmdWxseVwiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEdFVCBBTEwgUEFZTUVOVCBNRVRIT0QgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IGdldF9hbGxfcGF5bWVudF9tZXRob2QgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBsZXQgeyBpZCB9ID0gcmVxPy5wYXJhbXM7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRCeUlkKHJlcT8udXNlcj8uX2lkKTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogXCJVc2VyIE5vdCBGb3VuZCEhIVwiIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJfZGV0YWlsID1cbiAgICAgIHVzZXI/LnVzZXJfdHlwZSA9PT0gXCJ0dXRvclwiXG4gICAgICAgID8gYXdhaXQgVHV0b3JNb2RlbC5maW5kT25lKHsgdXNlcl9pZDogcmVxPy51c2VyPy5faWQgfSlcbiAgICAgICAgOiBhd2FpdCBQYXJlbnRNb2RlbC5maW5kT25lKHsgdXNlcl9pZDogcmVxPy51c2VyPy5faWQgfSk7XG5cbiAgICBpZiAoIXVzZXJfZGV0YWlsKSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoNDAwKVxuICAgICAgICAuanNvbih7IG1lc3NhZ2U6IGAke3VzZXI/LnVzZXJfdHlwZX0gRGV0YWlsIE5vdCBGb3VuZCEhIWAgfSk7XG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBwYXltZW50X2RldGFpbDogdXNlcl9kZXRhaWw/LnBheW1lbnRfZGV0YWlsIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XG4gIH1cbn07XG4iXX0=