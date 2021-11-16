"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_user_profile_picture = exports.udpate_password_from_profile = exports.social_login = exports.sign_up = exports.reset_password = exports.refresh_token = exports.otp_verify = exports.me = exports.login = exports.forgot_password = exports.add_payment_method = void 0;

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
    var _req$user3, _user_profile$payment, id, payment_detail, user, user_profile;

    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            id = req === null || req === void 0 ? void 0 : (_req$user3 = req.user) === null || _req$user3 === void 0 ? void 0 : _req$user3._id;
            payment_detail = req.body.payment_detail;
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
            user_profile === null || user_profile === void 0 ? void 0 : (_user_profile$payment = user_profile.payment_detail) === null || _user_profile$payment === void 0 ? void 0 : _user_profile$payment.push(payment_detail);
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
}();

exports.add_payment_method = add_payment_method;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9hdXRoLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsic2lnbl91cCIsInJlcSIsInJlcyIsIm5leHQiLCJib2R5IiwidXNlcl90eXBlIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJpc1ZhbGlkIiwiZXJyb3JzIiwic3RhdHVzIiwianNvbiIsIlVzZXJNb2RlbCIsImNyZWF0ZSIsInRvTG93ZXJDYXNlIiwicmVnaXN0ZXJfdHlwZSIsImFjdGl2ZSIsInVzZXIiLCJUdXRvck1vZGVsIiwidXNlcl9pZCIsIl9pZCIsIlBhcmVudE1vZGVsIiwidHlwZSIsInRva2VuIiwiZ2V0Snd0VG9rZW4iLCJ0b09iamVjdCIsIm1lc3NhZ2UiLCJsb2dpbiIsImZpbmRPbmUiLCJzb2NpYWxfbG9naW4iLCJuYW1lIiwic29jaWFsSWQiLCJ1cmwiLCJ1c2VyRXhpdCIsIm1lIiwiZmluZEJ5SWQiLCJwcm9maWxlIiwiZm9yZ290X3Bhc3N3b3JkIiwib3RwIiwidXBkYXRlT25lIiwiJHNldCIsInN1YmplY3QiLCJvdHBfdmVyaWZ5IiwicmVzZXRfcGFzc3dvcmQiLCJzYXZlIiwicmVmcmVzaF90b2tlbiIsInVwZGF0ZV91c2VyX3Byb2ZpbGVfcGljdHVyZSIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwicHJvZmlsZV9waWMiLCJwYXRoIiwiZGF0YSIsInVkcGF0ZV9wYXNzd29yZF9mcm9tX3Byb2ZpbGUiLCJhZGRfcGF5bWVudF9tZXRob2QiLCJpZCIsInBheW1lbnRfZGV0YWlsIiwidXNlcl9wcm9maWxlIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBUUE7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLE9BQU87QUFBQSwyRkFBRyxpQkFBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQjtBQUFBOztBQUFBO0FB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bEJsQyxtQkFBWU8sT0FBWixDQUFvQjtBQUFFVCxjQUFBQSxPQUFPLEVBQUVvQztBQUFYLGFBQXBCLENBVmtCOztBQUFBO0FBQUE7O0FBQUE7QUFPeEJFLFlBQUFBLFlBUHdCO0FBWTlCQSxZQUFBQSxZQUFZLFNBQVosSUFBQUEsWUFBWSxXQUFaLHFDQUFBQSxZQUFZLENBQUVELGNBQWQsZ0ZBQThCRSxJQUE5QixDQUFtQ0YsY0FBbkM7QUFaOEI7QUFBQSxtQkFjeEJDLFlBQVksQ0FBQ2IsSUFBYixFQWR3Qjs7QUFBQTtBQWdCOUI1QyxZQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFZSxjQUFBQSxPQUFPLEVBQUU7QUFBWCxhQUFyQjtBQWhCOEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFrQjlCcUIsWUFBQUEsT0FBTyxDQUFDQyxHQUFSO0FBQ0FoRCxZQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFZSxjQUFBQSxPQUFPLGdFQUFFLGNBQU9BO0FBQWxCLGFBQXJCOztBQW5COEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBbEI0QixrQkFBa0I7QUFBQTtBQUFBO0FBQUEsR0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlck1vZGVsIGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IFR1dG9yTW9kZWwgZnJvbSBcIi4uL21vZGVscy90dXRvci5tb2RlXCI7XG5pbXBvcnQgUGFyZW50TW9kZWwgZnJvbSBcIi4uL21vZGVscy9wYXJlbnQubW9kZWxcIjtcbmltcG9ydCB7XG4gIHNpZ25fdXBfdmFsaWRhdG9yLFxuICBsb2dpbl92YWxpZGF0b3IsXG4gIGZvcmdvdF9wYXNzd29yZF92YWxpZGF0aW9uLFxuICBvdHBfdmFsaWRhdGlvbixcbiAgcmVzZXRfcGFzc3dvcmRfdmFsaWRhdGlvbixcbiAgdXBkYXRlX3Bhc3N3b3JkX2Zyb21fcHJvZmlsZV92YWxpZGF0aW9uLFxufSBmcm9tIFwiLi4vdmFsaWRhdG9ycy9hdXRoLnZhbGlkYXRpb25zXCI7XG5pbXBvcnQgeyByYW5kb21PVFAgfSBmcm9tIFwiLi4vbGlicmFyaWVzL3V0aWxzXCI7XG5pbXBvcnQgeyBmb3Jnb3RfcGFzc3dvcmRfZW1haWwgfSBmcm9tIFwiLi4vbGlicmFyaWVzL2VtYWlscy9lbWFpbC5zZW5kZXJcIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gU0lHTiBVUCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgY29uc3Qgc2lnbl91cCA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdXNlcl90eXBlLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCB7IGlzVmFsaWQsIGVycm9ycyB9ID0gYXdhaXQgc2lnbl91cF92YWxpZGF0b3IocmVxLmJvZHkpO1xuXG4gICAgaWYgKGlzVmFsaWQgPiAwKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyb3JzKTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmNyZWF0ZSh7XG4gICAgICB1c2VyX3R5cGUsXG4gICAgICBmaXJzdF9uYW1lLFxuICAgICAgbGFzdF9uYW1lLFxuICAgICAgZW1haWw6IGVtYWlsLnRvTG93ZXJDYXNlKCksXG4gICAgICBwYXNzd29yZCxcbiAgICAgIHJlZ2lzdGVyX3R5cGU6IFwibG9jYWxcIixcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGlmICh1c2VyX3R5cGUgPT09IFwidHV0b3JcIikge1xuICAgICAgYXdhaXQgVHV0b3JNb2RlbC5jcmVhdGUoe1xuICAgICAgICB1c2VyX2lkOiB1c2VyPy5faWQsXG4gICAgICAgIGVtYWlsLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IFBhcmVudE1vZGVsLmNyZWF0ZSh7XG4gICAgICAgIHVzZXJfaWQ6IHVzZXI/Ll9pZCxcbiAgICAgICAgdHlwZTogdXNlcl90eXBlLFxuICAgICAgICBlbWFpbCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHRva2VuID0gdXNlci5nZXRKd3RUb2tlbigpO1xuXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyAuLi51c2VyLnRvT2JqZWN0KCksIHRva2VuIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExPR0lOIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZW1haWwgfSA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3QgeyBpc1ZhbGlkLCBlcnJvcnMgfSA9IGF3YWl0IGxvZ2luX3ZhbGlkYXRvcihyZXEuYm9keSk7XG5cbiAgICBpZiAoaXNWYWxpZCA+IDApIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvcnMpO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7XG4gICAgICBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRva2VuID0gdXNlci5nZXRKd3RUb2tlbigpO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAuLi51c2VyLnRvT2JqZWN0KCksIHRva2VuIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFNPQ0lBTCBMT0dJTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgY29uc3Qgc29jaWFsX2xvZ2luID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBuYW1lLCB1c2VyX3R5cGUsIGVtYWlsLCBzb2NpYWxJZCwgdXJsLCB0eXBlIH0gPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHVzZXJFeGl0ID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoe1xuICAgICAgZW1haWw6IGVtYWlsLnRvTG93ZXJDYXNlKCksXG4gICAgfSk7XG5cbiAgICAvLyBpZiB1c2VyIGV4aXRcbiAgICBpZiAodXNlckV4aXQpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gdXNlckV4aXQuZ2V0Snd0VG9rZW4oKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgIC4uLnVzZXIudG9PYmplY3QoKSxcbiAgICAgICAgdG9rZW4sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBpZiB1c2VyIGRvbid0IGV4aXRcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuY3JlYXRlKHtcbiAgICAgIHVzZXJfdHlwZSxcbiAgICAgIGZpcnN0X25hbWU6IG5hbWUsXG4gICAgICBsYXN0X25hbWU6IG5hbWUsXG4gICAgICBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKSxcbiAgICAgIC8vIHBhc3N3b3JkLFxuICAgICAgcmVnaXN0ZXJfdHlwZTogdHlwZSxcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGlmICh1c2VyX3R5cGUgPT09IFwidHV0b3JcIikge1xuICAgICAgYXdhaXQgVHV0b3JNb2RlbC5jcmVhdGUoe1xuICAgICAgICB1c2VyX2lkOiB1c2VyPy5faWQsXG4gICAgICAgIGVtYWlsLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IFBhcmVudE1vZGVsLmNyZWF0ZSh7XG4gICAgICAgIHVzZXJfaWQ6IHVzZXI/Ll9pZCxcbiAgICAgICAgdHlwZTogdXNlcl90eXBlLFxuICAgICAgICBlbWFpbCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHRva2VuID0gdXNlci5nZXRKd3RUb2tlbigpO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAuLi51c2VyLnRvT2JqZWN0KCksIHRva2VuIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExPR0dFRCBJTiBVU0VSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCBtZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZEJ5SWQocmVxLnVzZXIuX2lkKTtcbiAgICBsZXQgcHJvZmlsZTtcbiAgICBpZiAodXNlcj8udXNlcl90eXBlID09PSBcInR1dG9yXCIpIHtcbiAgICAgIHByb2ZpbGUgPSBhd2FpdCBUdXRvck1vZGVsLmZpbmRPbmUoeyB1c2VyX2lkOiByZXEudXNlci5faWQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2ZpbGUgPSBhd2FpdCBQYXJlbnRNb2RlbC5maW5kT25lKHsgdXNlcl9pZDogcmVxLnVzZXIuX2lkIH0pO1xuICAgIH1cblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgLi4udXNlci50b09iamVjdCgpLCBwcm9maWxlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZPUkdPVCBQQVNTV09SRCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgY29uc3QgZm9yZ290X3Bhc3N3b3JkID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBlbWFpbCB9ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCB7IGlzVmFsaWQsIGVycm9ycyB9ID0gYXdhaXQgZm9yZ290X3Bhc3N3b3JkX3ZhbGlkYXRpb24ocmVxLmJvZHkpO1xuXG4gICAgaWYgKGlzVmFsaWQgPiAwKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyb3JzKTtcbiAgICB9XG5cbiAgICBjb25zdCBvdHAgPSBhd2FpdCByYW5kb21PVFAoKTtcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IGVtYWlsOiBlbWFpbC50b0xvd2VyQ2FzZSgpIH0pO1xuXG4gICAgYXdhaXQgVXNlck1vZGVsLnVwZGF0ZU9uZShcbiAgICAgIHsgZW1haWw6IGVtYWlsLnRvTG93ZXJDYXNlKCkgfSxcbiAgICAgIHsgJHNldDogeyBvdHAgfSB9XG4gICAgKTtcblxuICAgIGF3YWl0IGZvcmdvdF9wYXNzd29yZF9lbWFpbCh7XG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICBzdWJqZWN0OiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgb3RwOiBvdHAsXG4gICAgICBuYW1lOiBgJHt1c2VyPy5maXJzdF9uYW1lfSAke3VzZXI/Lmxhc3RfbmFtZX1gLFxuICAgIH0pO1xuXG4gICAgcmVzXG4gICAgICAuc3RhdHVzKDIwMClcbiAgICAgIC5qc29uKHsgbWVzc2FnZTogXCJDaGVjayB5b3UgZWFtaWwsIE9UUCBzZW5kIHN1Y2Nlc3NmdWxseS5cIiB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBPVFAgVkVSSUZZIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCBvdHBfdmVyaWZ5ID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBlbWFpbCwgb3RwIH0gPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHsgaXNWYWxpZCwgZXJyb3JzIH0gPSBhd2FpdCBvdHBfdmFsaWRhdGlvbihyZXEuYm9keSk7XG5cbiAgICBpZiAoaXNWYWxpZCA+IDApIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvcnMpO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IGVtYWlsOiBlbWFpbC50b0xvd2VyQ2FzZSgpLCBvdHAgfSk7XG5cbiAgICBhd2FpdCBVc2VyTW9kZWwudXBkYXRlT25lKFxuICAgICAgeyBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKSB9LFxuICAgICAgeyAkc2V0OiB7IG90cDogbnVsbCB9IH1cbiAgICApO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIk9UUCB2ZXJpZmllZCBzdWNjZXNzZnVsbHkuXCIgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvcj8ubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gUkVTRVQgUEFTU1dPUkQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IHJlc2V0X3Bhc3N3b3JkID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3QgeyBpc1ZhbGlkLCBlcnJvcnMgfSA9IGF3YWl0IHJlc2V0X3Bhc3N3b3JkX3ZhbGlkYXRpb24ocmVxLmJvZHkpO1xuXG4gICAgaWYgKGlzVmFsaWQgPiAwKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyb3JzKTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKSB9KTtcblxuICAgIHVzZXIucGFzc3dvcmQgPSBwYXNzd29yZDtcblxuICAgIGF3YWl0IHVzZXIuc2F2ZSgpO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIlBhYXNzd29yZCBSZXNldCBzdWNjZXNzZnVsbHkuXCIgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvcj8ubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gUkVGUkVTSCBUT0tFTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgY29uc3QgcmVmcmVzaF90b2tlbiA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZEJ5SWQocmVxLnVzZXIuX2lkKTtcblxuICAgIGNvbnN0IHRva2VuID0gdXNlci5nZXRKd3RUb2tlbigpO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB0b2tlbiB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBVUERBVEUgUFJPRklMRSBQSUNUVVJFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCB1cGRhdGVfdXNlcl9wcm9maWxlX3BpY3R1cmUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZyhyZXEuZmlsZSk7XG5cbiAgICBhd2FpdCBVc2VyTW9kZWwudXBkYXRlT25lKFxuICAgICAgeyBfaWQ6IHJlcT8udXNlcj8uX2lkIH0sXG4gICAgICB7ICRzZXQ6IHsgcHJvZmlsZV9waWM6IHJlcT8uZmlsZT8ucGF0aCB9IH1cbiAgICApO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IFVzZXJNb2RlbC5maW5kQnlJZChyZXE/LnVzZXI/Ll9pZCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBVUERBVEUgUEFTU1dPUkQgRlJPTSBQUk9GSUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCB1ZHBhdGVfcGFzc3dvcmRfZnJvbV9wcm9maWxlID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBpc1ZhbGlkLCBlcnJvcnMgfSA9IGF3YWl0IHVwZGF0ZV9wYXNzd29yZF9mcm9tX3Byb2ZpbGVfdmFsaWRhdGlvbihcbiAgICAgIHJlcVxuICAgICk7XG5cbiAgICBpZiAoaXNWYWxpZCA+IDApIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvcnMpO1xuICAgIH1cblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJQYXNzd29yZCBVcGRhdGVkIFN1Y2Nlc3NmdWxseVwiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFERCBQQVlNRU5UIE1FVEhPRCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgY29uc3QgYWRkX3BheW1lbnRfbWV0aG9kID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IGlkID0gcmVxPy51c2VyPy5faWQ7XG4gICAgY29uc3QgeyBwYXltZW50X2RldGFpbCB9ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRCeUlkKGlkKTtcblxuICAgIGNvbnN0IHVzZXJfcHJvZmlsZSA9XG4gICAgICB1c2VyPy51c2VyX3R5cGUgPT09IFwidHV0b3JcIlxuICAgICAgICA/IGF3YWl0IFR1dG9yTW9kZWwuZmluZE9uZSh7IHVzZXJfaWQ6IGlkIH0pXG4gICAgICAgIDogYXdhaXQgUGFyZW50TW9kZWwuZmluZE9uZSh7IHVzZXJfaWQ6IGlkIH0pO1xuXG4gICAgdXNlcl9wcm9maWxlPy5wYXltZW50X2RldGFpbD8ucHVzaChwYXltZW50X2RldGFpbCk7XG5cbiAgICBhd2FpdCB1c2VyX3Byb2ZpbGUuc2F2ZSgpO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIlBheW1lbnQgTWV0aG9kIEFkZGVkIFN1Y2Nlc3NmdWxseVwiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xuICB9XG59O1xuIl19