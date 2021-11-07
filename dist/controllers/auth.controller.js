"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sign_up = exports.reset_password = exports.refresh_token = exports.otp_verify = exports.me = exports.login = exports.forgot_password = void 0;

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
              email: email,
              password: password
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
    var _req$body2, user_type, email, password, _yield$login_validato, isValid, errors, user, token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, user_type = _req$body2.user_type, email = _req$body2.email, password = _req$body2.password;
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
// --------------------- LOGGED IN USER -----------------------------
// ---------------------------------------------------------------


exports.login = login;

var me = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var user, profile;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _user["default"].findById(req.user._id);

          case 3:
            user = _context3.sent;

            if (!((user === null || user === void 0 ? void 0 : user.user_type) === "tutor")) {
              _context3.next = 10;
              break;
            }

            _context3.next = 7;
            return _tutor["default"].findOne({
              user_id: req.user._id
            });

          case 7:
            profile = _context3.sent;
            _context3.next = 13;
            break;

          case 10:
            _context3.next = 12;
            return _parent["default"].findOne({
              user_id: req.user._id
            });

          case 12:
            profile = _context3.sent;

          case 13:
            res.status(200).json(_objectSpread(_objectSpread({}, user.toObject()), {}, {
              profile: profile
            }));
            _context3.next = 19;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              message: _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message
            });

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 16]]);
  }));

  return function me(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- FORGOT PASSWORD -----------------------------
// ---------------------------------------------------------------


exports.me = me;

var forgot_password = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var email, _yield$forgot_passwor, isValid, errors, otp, user;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            email = req.body.email;
            _context4.next = 4;
            return (0, _auth.forgot_password_validation)(req.body);

          case 4:
            _yield$forgot_passwor = _context4.sent;
            isValid = _yield$forgot_passwor.isValid;
            errors = _yield$forgot_passwor.errors;

            if (!(isValid > 0)) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", res.status(400).json(errors));

          case 9:
            _context4.next = 11;
            return (0, _utils.randomOTP)();

          case 11:
            otp = _context4.sent;
            _context4.next = 14;
            return _user["default"].findOne({
              email: email.toLowerCase()
            });

          case 14:
            user = _context4.sent;
            _context4.next = 17;
            return _user["default"].updateOne({
              email: email.toLowerCase()
            }, {
              $set: {
                otp: otp
              }
            });

          case 17:
            _context4.next = 19;
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
            _context4.next = 25;
            break;

          case 22:
            _context4.prev = 22;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: _context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.message
            });

          case 25:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 22]]);
  }));

  return function forgot_password(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- OTP VERIFY -----------------------------
// ---------------------------------------------------------------


exports.forgot_password = forgot_password;

var otp_verify = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var _req$body3, email, otp, _yield$otp_validation, isValid, errors, user;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$body3 = req.body, email = _req$body3.email, otp = _req$body3.otp;
            _context5.next = 4;
            return (0, _auth.otp_validation)(req.body);

          case 4:
            _yield$otp_validation = _context5.sent;
            isValid = _yield$otp_validation.isValid;
            errors = _yield$otp_validation.errors;

            if (!(isValid > 0)) {
              _context5.next = 9;
              break;
            }

            return _context5.abrupt("return", res.status(400).json(errors));

          case 9:
            _context5.next = 11;
            return _user["default"].findOne({
              email: email.toLowerCase(),
              otp: otp
            });

          case 11:
            user = _context5.sent;
            _context5.next = 14;
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
            _context5.next = 20;
            break;

          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              message: _context5.t0 === null || _context5.t0 === void 0 ? void 0 : _context5.t0.message
            });

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 17]]);
  }));

  return function otp_verify(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- RESET PASSWORD -----------------------------
// ---------------------------------------------------------------


exports.otp_verify = otp_verify;

var reset_password = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var _req$body4, email, password, _yield$reset_password, isValid, errors, user;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _req$body4 = req.body, email = _req$body4.email, password = _req$body4.password;
            _context6.next = 4;
            return (0, _auth.reset_password_validation)(req.body);

          case 4:
            _yield$reset_password = _context6.sent;
            isValid = _yield$reset_password.isValid;
            errors = _yield$reset_password.errors;

            if (!(isValid > 0)) {
              _context6.next = 9;
              break;
            }

            return _context6.abrupt("return", res.status(400).json(errors));

          case 9:
            _context6.next = 11;
            return _user["default"].findOne({
              email: email.toLowerCase()
            });

          case 11:
            user = _context6.sent;
            user.password = password;
            _context6.next = 15;
            return user.save();

          case 15:
            res.status(200).json({
              message: "Paassword Reset successfully."
            });
            _context6.next = 21;
            break;

          case 18:
            _context6.prev = 18;
            _context6.t0 = _context6["catch"](0);
            res.status(500).json({
              message: _context6.t0 === null || _context6.t0 === void 0 ? void 0 : _context6.t0.message
            });

          case 21:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 18]]);
  }));

  return function reset_password(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- REFRESH TOKEN -----------------------------
// ---------------------------------------------------------------


exports.reset_password = reset_password;

var refresh_token = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var user, token;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _user["default"].findById(req.user._id);

          case 3:
            user = _context7.sent;
            token = user.getJwtToken();
            res.status(200).json({
              token: token
            });
            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            res.status(500).json({
              message: _context7.t0 === null || _context7.t0 === void 0 ? void 0 : _context7.t0.message
            });

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 8]]);
  }));

  return function refresh_token(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

exports.refresh_token = refresh_token;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9hdXRoLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsic2lnbl91cCIsInJlcSIsInJlcyIsIm5leHQiLCJib2R5IiwidXNlcl90eXBlIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJpc1ZhbGlkIiwiZXJyb3JzIiwic3RhdHVzIiwianNvbiIsIlVzZXJNb2RlbCIsImNyZWF0ZSIsInVzZXIiLCJUdXRvck1vZGVsIiwidXNlcl9pZCIsIl9pZCIsIlBhcmVudE1vZGVsIiwidHlwZSIsInRva2VuIiwiZ2V0Snd0VG9rZW4iLCJ0b09iamVjdCIsIm1lc3NhZ2UiLCJsb2dpbiIsImZpbmRPbmUiLCJ0b0xvd2VyQ2FzZSIsIm1lIiwiZmluZEJ5SWQiLCJwcm9maWxlIiwiZm9yZ290X3Bhc3N3b3JkIiwib3RwIiwidXBkYXRlT25lIiwiJHNldCIsInN1YmplY3QiLCJuYW1lIiwib3RwX3ZlcmlmeSIsInJlc2V0X3Bhc3N3b3JkIiwic2F2ZSIsInJlZnJlc2hfdG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQU9BOztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxPQUFPO0FBQUEsMkZBQUcsaUJBQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRTJDRixHQUFHLENBQUNHLElBRi9DLEVBRVhDLFNBRlcsYUFFWEEsU0FGVyxFQUVBQyxVQUZBLGFBRUFBLFVBRkEsRUFFWUMsU0FGWixhQUVZQSxTQUZaLEVBRXVCQyxLQUZ2QixhQUV1QkEsS0FGdkIsRUFFOEJDLFFBRjlCLGFBRThCQSxRQUY5QjtBQUFBO0FBQUEsbUJBSWUsNkJBQWtCUixHQUFHLENBQUNHLElBQXRCLENBSmY7O0FBQUE7QUFBQTtBQUlYTSxZQUFBQSxPQUpXLHlCQUlY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QUFZQyxHQUFaLEVBQWlCQyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRU5XLGlCQUFVZ0IsUUFBVixDQUFtQjdCLEdBQUcsQ0FBQ2UsSUFBSixDQUFTRyxHQUE1QixDQUZNOztBQUFBO0FBRW5CSCxZQUFBQSxJQUZtQjtBQUluQk0sWUFBQUEsS0FKbUIsR0FJWE4sSUFBSSxDQUFDTyxXQUFMLEVBSlc7QUFNekJyQixZQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFUyxjQUFBQSxLQUFLLEVBQUxBO0FBQUYsYUFBckI7QUFOeUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRekJwQixZQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFWSxjQUFBQSxPQUFPLDhEQUFFLGFBQU9BO0FBQWxCLGFBQXJCOztBQVJ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFiZ0IsYUFBYTtBQUFBO0FBQUE7QUFBQSxHQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCBUdXRvck1vZGVsIGZyb20gXCIuLi9tb2RlbHMvdHV0b3IubW9kZVwiO1xyXG5pbXBvcnQgUGFyZW50TW9kZWwgZnJvbSBcIi4uL21vZGVscy9wYXJlbnQubW9kZWxcIjtcclxuaW1wb3J0IHtcclxuICBzaWduX3VwX3ZhbGlkYXRvcixcclxuICBsb2dpbl92YWxpZGF0b3IsXHJcbiAgZm9yZ290X3Bhc3N3b3JkX3ZhbGlkYXRpb24sXHJcbiAgb3RwX3ZhbGlkYXRpb24sXHJcbiAgcmVzZXRfcGFzc3dvcmRfdmFsaWRhdGlvbixcclxufSBmcm9tIFwiLi4vdmFsaWRhdG9ycy9hdXRoLnZhbGlkYXRpb25zXCI7XHJcbmltcG9ydCB7IHJhbmRvbU9UUCB9IGZyb20gXCIuLi9saWJyYXJpZXMvdXRpbHNcIjtcclxuaW1wb3J0IHsgZm9yZ290X3Bhc3N3b3JkX2VtYWlsIH0gZnJvbSBcIi4uL2xpYnJhcmllcy9lbWFpbHMvZW1haWwuc2VuZGVyXCI7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFNJR04gVVAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBjb25zdCBzaWduX3VwID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdXNlcl90eXBlLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgY29uc3QgeyBpc1ZhbGlkLCBlcnJvcnMgfSA9IGF3YWl0IHNpZ25fdXBfdmFsaWRhdG9yKHJlcS5ib2R5KTtcclxuXHJcbiAgICBpZiAoaXNWYWxpZCA+IDApIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycm9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5jcmVhdGUoe1xyXG4gICAgICB1c2VyX3R5cGUsXHJcbiAgICAgIGZpcnN0X25hbWUsXHJcbiAgICAgIGxhc3RfbmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHVzZXJfdHlwZSA9PT0gXCJ0dXRvclwiKSB7XHJcbiAgICAgIGF3YWl0IFR1dG9yTW9kZWwuY3JlYXRlKHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VyPy5faWQsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgUGFyZW50TW9kZWwuY3JlYXRlKHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VyPy5faWQsXHJcbiAgICAgICAgdHlwZTogdXNlcl90eXBlLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IHVzZXIuZ2V0Snd0VG9rZW4oKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IC4uLnVzZXIudG9PYmplY3QoKSwgdG9rZW4gfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBMT0dJTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdXNlcl90eXBlLCBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIGNvbnN0IHsgaXNWYWxpZCwgZXJyb3JzIH0gPSBhd2FpdCBsb2dpbl92YWxpZGF0b3IocmVxLmJvZHkpO1xyXG5cclxuICAgIGlmIChpc1ZhbGlkID4gMCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoe1xyXG4gICAgICBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gdXNlci5nZXRKd3RUb2tlbigpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgLi4udXNlci50b09iamVjdCgpLCB0b2tlbiB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvcj8ubWVzc2FnZSB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExPR0dFRCBJTiBVU0VSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgY29uc3QgbWUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kQnlJZChyZXEudXNlci5faWQpO1xyXG4gICAgbGV0IHByb2ZpbGU7XHJcbiAgICBpZiAodXNlcj8udXNlcl90eXBlID09PSBcInR1dG9yXCIpIHtcclxuICAgICAgcHJvZmlsZSA9IGF3YWl0IFR1dG9yTW9kZWwuZmluZE9uZSh7IHVzZXJfaWQ6IHJlcS51c2VyLl9pZCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb2ZpbGUgPSBhd2FpdCBQYXJlbnRNb2RlbC5maW5kT25lKHsgdXNlcl9pZDogcmVxLnVzZXIuX2lkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgLi4udXNlci50b09iamVjdCgpLCBwcm9maWxlIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gRk9SR09UIFBBU1NXT1JEIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgY29uc3QgZm9yZ290X3Bhc3N3b3JkID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIGNvbnN0IHsgaXNWYWxpZCwgZXJyb3JzIH0gPSBhd2FpdCBmb3Jnb3RfcGFzc3dvcmRfdmFsaWRhdGlvbihyZXEuYm9keSk7XHJcblxyXG4gICAgaWYgKGlzVmFsaWQgPiAwKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG90cCA9IGF3YWl0IHJhbmRvbU9UUCgpO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IGVtYWlsOiBlbWFpbC50b0xvd2VyQ2FzZSgpIH0pO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC51cGRhdGVPbmUoXHJcbiAgICAgIHsgZW1haWw6IGVtYWlsLnRvTG93ZXJDYXNlKCkgfSxcclxuICAgICAgeyAkc2V0OiB7IG90cCB9IH1cclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgZm9yZ290X3Bhc3N3b3JkX2VtYWlsKHtcclxuICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICBzdWJqZWN0OiBcIkZvcmdvdCBQYXNzd29yZFwiLFxyXG4gICAgICBvdHA6IG90cCxcclxuICAgICAgbmFtZTogYCR7dXNlcj8uZmlyc3RfbmFtZX0gJHt1c2VyPy5sYXN0X25hbWV9YCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJlc1xyXG4gICAgICAuc3RhdHVzKDIwMClcclxuICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIkNoZWNrIHlvdSBlYW1pbCwgT1RQIHNlbmQgc3VjY2Vzc2Z1bGx5LlwiIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gT1RQIFZFUklGWSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNvbnN0IG90cF92ZXJpZnkgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBlbWFpbCwgb3RwIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICBjb25zdCB7IGlzVmFsaWQsIGVycm9ycyB9ID0gYXdhaXQgb3RwX3ZhbGlkYXRpb24ocmVxLmJvZHkpO1xyXG5cclxuICAgIGlmIChpc1ZhbGlkID4gMCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKSwgb3RwIH0pO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC51cGRhdGVPbmUoXHJcbiAgICAgIHsgZW1haWw6IGVtYWlsLnRvTG93ZXJDYXNlKCkgfSxcclxuICAgICAgeyAkc2V0OiB7IG90cDogbnVsbCB9IH1cclxuICAgICk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIk9UUCB2ZXJpZmllZCBzdWNjZXNzZnVsbHkuXCIgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSRVNFVCBQQVNTV09SRCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNvbnN0IHJlc2V0X3Bhc3N3b3JkID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICBjb25zdCB7IGlzVmFsaWQsIGVycm9ycyB9ID0gYXdhaXQgcmVzZXRfcGFzc3dvcmRfdmFsaWRhdGlvbihyZXEuYm9keSk7XHJcblxyXG4gICAgaWYgKGlzVmFsaWQgPiAwKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IGVtYWlsOiBlbWFpbC50b0xvd2VyQ2FzZSgpIH0pO1xyXG5cclxuICAgIHVzZXIucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuXHJcbiAgICBhd2FpdCB1c2VyLnNhdmUoKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiUGFhc3N3b3JkIFJlc2V0IHN1Y2Nlc3NmdWxseS5cIiB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvcj8ubWVzc2FnZSB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFJFRlJFU0ggVE9LRU4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBjb25zdCByZWZyZXNoX3Rva2VuID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZEJ5SWQocmVxLnVzZXIuX2lkKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IHVzZXIuZ2V0Snd0VG9rZW4oKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRva2VuIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuIl19