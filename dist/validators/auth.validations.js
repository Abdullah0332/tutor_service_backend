"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_password_from_profile_validation = exports.sign_up_validator = exports.reset_password_validation = exports.otp_validation = exports.login_validator = exports.forgot_password_validation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _validator = _interopRequireDefault(require("validator"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _userModel = _interopRequireDefault(require("../models/user.model.js"));

// ---------------------------------------------------------------
// --------------------- SIGN VALIDATIONS -----------------------------
// ---------------------------------------------------------------
var sign_up_validator = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
    var first_name, last_name, email, password, errors, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            first_name = data.first_name, last_name = data.last_name, email = data.email, password = data.password;
            errors = {};
            _context.next = 4;
            return userExit(email);

          case 4:
            user = _context.sent;

            if (user) {
              errors.message = "User already exist on this email";
            }

            if (email && !_validator["default"].isEmail(email)) {
              errors.email = "Please enter valid email address.";
            }

            if (!first_name) {
              errors.first_name = "First Name is required.";
            }

            if (!last_name) {
              errors.last_name = "Last Name is required.";
            }

            if (!email) {
              errors.email = "Email is required.";
            }

            if (!password) {
              errors.password = "Password is required.";
            }

            return _context.abrupt("return", {
              errors: errors,
              isValid: Object.keys(errors).length
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sign_up_validator(_x) {
    return _ref.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- LOGIN VALIDATIONS -----------------------------
// ---------------------------------------------------------------


exports.sign_up_validator = sign_up_validator;

var login_validator = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
    var email, password, errors, user, isPasswordMatched;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = data.email, password = data.password;
            errors = {}; // const user = await UserModel.findOne({ email: email?.toLowerCase() });

            _context2.next = 4;
            return userExit(email);

          case 4:
            user = _context2.sent;
            console.log(user);

            if (!user || user === null) {
              errors.message = "User Not Found on given email";
            }

            if ((user === null || user === void 0 ? void 0 : user.active) === false) {
              errors.message = "User is deactiated by admin";
            }

            if (email && !_validator["default"].isEmail(email)) {
              errors.email = "Email Not Valid";
            }

            if (!email) {
              errors.email = "Email is required.";
            }

            if (!password) {
              errors.password = "Password is required.";
            }

            if (!(user && password)) {
              _context2.next = 16;
              break;
            }

            _context2.next = 14;
            return _bcryptjs["default"].compare(password, user.password);

          case 14:
            isPasswordMatched = _context2.sent;

            if (!isPasswordMatched) {
              errors.message = "Email/Password combination do not match";
            }

          case 16:
            return _context2.abrupt("return", {
              errors: errors,
              isValid: Object.keys(errors).length
            });

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login_validator(_x2) {
    return _ref2.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- FORGOT PASSWORD VALIDATIONS -----------------------------
// ---------------------------------------------------------------


exports.login_validator = login_validator;

var forgot_password_validation = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
    var email, errors, user;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            email = data.email;
            errors = {};
            _context3.next = 4;
            return userExit(email);

          case 4:
            user = _context3.sent;

            if (!user) {
              errors.message = "No User exits with given email.";
            }

            if (email && !_validator["default"].isEmail(email)) {
              errors.email = "Email Not Valid.";
            }

            if (!email) {
              errors.email = "Email is required.";
            }

            return _context3.abrupt("return", {
              errors: errors,
              isValid: Object.keys(errors).length
            });

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function forgot_password_validation(_x3) {
    return _ref3.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- OTP VARIFICATION VALIDATIONS -----------------------------
// ---------------------------------------------------------------


exports.forgot_password_validation = forgot_password_validation;

var otp_validation = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(data) {
    var email, otp, errors, user, user_with_otp;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            email = data.email, otp = data.otp;
            errors = {};
            _context4.next = 4;
            return userExit(email);

          case 4:
            user = _context4.sent;

            if (!user) {
              errors.message = "No User exits with given email.";
            }

            console.log(user);
            _context4.next = 9;
            return _userModel["default"].findOne({
              email: email === null || email === void 0 ? void 0 : email.toLowerCase(),
              otp: otp
            });

          case 9:
            user_with_otp = _context4.sent;

            if (!user_with_otp && user) {
              errors.message = "Your Verification OTP Code Is Not Valid.";
            }

            if (email && !_validator["default"].isEmail(email)) {
              errors.email = "Email Not Valid.";
            }

            if (!email) {
              errors.email = "Email is required.";
            }

            if (!otp) {
              errors.otp = "OTP is required.";
            }

            return _context4.abrupt("return", {
              errors: errors,
              isValid: Object.keys(errors).length
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function otp_validation(_x4) {
    return _ref4.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- RESET PASSWORD VALIDATIONS -----------------------------
// ---------------------------------------------------------------


exports.otp_validation = otp_validation;

var reset_password_validation = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(data) {
    var email, password, errors, user;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            email = data.email, password = data.password;
            errors = {};
            _context5.next = 4;
            return userExit(email);

          case 4:
            user = _context5.sent;

            if (!user) {
              errors.message = "No User exits with given email.";
            }

            if (email && !_validator["default"].isEmail(email)) {
              errors.email = "Email Not Valid.";
            }

            if (!email) {
              errors.email = "Email is required.";
            }

            if (!password) {
              errors.password = "Password is required.";
            }

            return _context5.abrupt("return", {
              errors: errors,
              isValid: Object.keys(errors).length
            });

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function reset_password_validation(_x5) {
    return _ref5.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- UPDATE PASSWORD BY PROFILEVALIDATIONS -----------------------------
// ---------------------------------------------------------------


exports.reset_password_validation = reset_password_validation;

var update_password_from_profile_validation = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req) {
    var _req$user;

    var _req$body, old_password, new_password, user, errors, isPasswordMatched;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body = req === null || req === void 0 ? void 0 : req.body, old_password = _req$body.old_password, new_password = _req$body.new_password;
            _context6.next = 3;
            return _userModel["default"].findById(req === null || req === void 0 ? void 0 : (_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user._id);

          case 3:
            user = _context6.sent;
            errors = {};

            if (!(old_password && new_password)) {
              _context6.next = 14;
              break;
            }

            _context6.next = 8;
            return _bcryptjs["default"].compare(old_password, user.password);

          case 8:
            isPasswordMatched = _context6.sent;

            if (!isPasswordMatched) {
              errors.message = "Old Password is not correct.";
            }

            if (!isPasswordMatched) {
              _context6.next = 14;
              break;
            }

            user.password = new_password;
            _context6.next = 14;
            return user.save();

          case 14:
            return _context6.abrupt("return", {
              errors: errors,
              isValid: Object.keys(errors).length
            });

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function update_password_from_profile_validation(_x6) {
    return _ref6.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- CHECK USER EXIT -----------------------------
// ---------------------------------------------------------------


exports.update_password_from_profile_validation = update_password_from_profile_validation;

var userExit = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(email) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _userModel["default"].findOne({
              email: email === null || email === void 0 ? void 0 : email.toLowerCase()
            });

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function userExit(_x7) {
    return _ref7.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0b3JzL2F1dGgudmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsic2lnbl91cF92YWxpZGF0b3IiLCJkYXRhIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvcnMiLCJ1c2VyRXhpdCIsInVzZXIiLCJtZXNzYWdlIiwidmFsaWRhdG9yIiwiaXNFbWFpbCIsImlzVmFsaWQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwibG9naW5fdmFsaWRhdG9yIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZSIsImJjcnlwdCIsImNvbXBhcmUiLCJpc1Bhc3N3b3JkTWF0Y2hlZCIsImZvcmdvdF9wYXNzd29yZF92YWxpZGF0aW9uIiwib3RwX3ZhbGlkYXRpb24iLCJvdHAiLCJVc2VyTW9kZWwiLCJmaW5kT25lIiwidG9Mb3dlckNhc2UiLCJ1c2VyX3dpdGhfb3RwIiwicmVzZXRfcGFzc3dvcmRfdmFsaWRhdGlvbiIsInVwZGF0ZV9wYXNzd29yZF9mcm9tX3Byb2ZpbGVfdmFsaWRhdGlvbiIsInJlcSIsImJvZHkiLCJvbGRfcGFzc3dvcmQiLCJuZXdfcGFzc3dvcmQiLCJmaW5kQnlJZCIsIl9pZCIsInNhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxpQkFBaUI7QUFBQSwyRkFBRyxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJDLFlBQUFBLFVBRHVCLEdBQ29CRCxJQURwQixDQUN2QkMsVUFEdUIsRUFDWEMsU0FEVyxHQUNvQkYsSUFEcEIsQ0FDWEUsU0FEVyxFQUNBQyxLQURBLEdBQ29CSCxJQURwQixDQUNBRyxLQURBLEVBQ09DLFFBRFAsR0FDb0JKLElBRHBCLENBQ09JLFFBRFA7QUFHM0JDLFlBQUFBLE1BSDJCLEdBR2xCLEVBSGtCO0FBQUE7QUFBQSxtQkFLWkMsUUFBUSxDQUFDSCxL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O0FBQUEsR0FBN0MsQyxDQTBCUDtBQUNBO0FBQ0E7Ozs7O0FBQ0EsSUFBTXhCLFFBQVE7QUFBQSw0RkFBRyxrQkFBT0gsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDVHNCLHNCQUFVQyxPQUFWLENBQWtCO0FBQUV2QixjQUFBQSxLQUFLLEVBQUVBLEtBQUYsYUFBRUEsS0FBRix1QkFBRUEsS0FBSyxDQUFFd0IsV0FBUDtBQUFULGFBQWxCLENBRFM7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFSckIsUUFBUTtBQUFBO0FBQUE7QUFBQSxHQUFkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZhbGlkYXRvciBmcm9tIFwidmFsaWRhdG9yXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWwuanNcIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gU0lHTiBWQUxJREFUSU9OUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgY29uc3Qgc2lnbl91cF92YWxpZGF0b3IgPSBhc3luYyAoZGF0YSkgPT4ge1xuICBjb25zdCB7IGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSBkYXRhO1xuXG4gIGxldCBlcnJvcnMgPSB7fTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgdXNlckV4aXQoZW1haWwpO1xuXG4gIGlmICh1c2VyKSB7XG4gICAgZXJyb3JzLm1lc3NhZ2UgPSBcIlVzZXIgYWxyZWFkeSBleGlzdCBvbiB0aGlzIGVtYWlsXCI7XG4gIH1cblxuICBpZiAoZW1haWwgJiYgIXZhbGlkYXRvci5pc0VtYWlsKGVtYWlsKSkge1xuICAgIGVycm9ycy5lbWFpbCA9IFwiUGxlYXNlIGVudGVyIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCI7XG4gIH1cbiAgaWYgKCFmaXJzdF9uYW1lKSB7XG4gICAgZXJyb3JzLmZpcnN0X25hbWUgPSBcIkZpcnN0IE5hbWUgaXMgcmVxdWlyZWQuXCI7XG4gIH1cbiAgaWYgKCFsYXN0X25hbWUpIHtcbiAgICBlcnJvcnMubGFzdF9uYW1lID0gXCJMYXN0IE5hbWUgaXMgcmVxdWlyZWQuXCI7XG4gIH1cbiAgaWYgKCFlbWFpbCkge1xuICAgIGVycm9ycy5lbWFpbCA9IFwiRW1haWwgaXMgcmVxdWlyZWQuXCI7XG4gIH1cbiAgaWYgKCFwYXNzd29yZCkge1xuICAgIGVycm9ycy5wYXNzd29yZCA9IFwiUGFzc3dvcmQgaXMgcmVxdWlyZWQuXCI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVycm9ycyxcbiAgICBpc1ZhbGlkOiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCxcbiAgfTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExPR0lOIFZBTElEQVRJT05TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCBsb2dpbl92YWxpZGF0b3IgPSBhc3luYyAoZGF0YSkgPT4ge1xuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gZGF0YTtcblxuICBsZXQgZXJyb3JzID0ge307XG5cbiAgLy8gY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHsgZW1haWw6IGVtYWlsPy50b0xvd2VyQ2FzZSgpIH0pO1xuICBjb25zdCB1c2VyID0gYXdhaXQgdXNlckV4aXQoZW1haWwpO1xuICBjb25zb2xlLmxvZyh1c2VyKTtcblxuICBpZiAoIXVzZXIgfHwgdXNlciA9PT0gbnVsbCkge1xuICAgIGVycm9ycy5tZXNzYWdlID0gXCJVc2VyIE5vdCBGb3VuZCBvbiBnaXZlbiBlbWFpbFwiO1xuICB9XG5cbiAgaWYgKHVzZXI/LmFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICBlcnJvcnMubWVzc2FnZSA9IFwiVXNlciBpcyBkZWFjdGlhdGVkIGJ5IGFkbWluXCI7XG4gIH1cblxuICBpZiAoZW1haWwgJiYgIXZhbGlkYXRvci5pc0VtYWlsKGVtYWlsKSkge1xuICAgIGVycm9ycy5lbWFpbCA9IFwiRW1haWwgTm90IFZhbGlkXCI7XG4gIH1cblxuICBpZiAoIWVtYWlsKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gXCJFbWFpbCBpcyByZXF1aXJlZC5cIjtcbiAgfVxuICBpZiAoIXBhc3N3b3JkKSB7XG4gICAgZXJyb3JzLnBhc3N3b3JkID0gXCJQYXNzd29yZCBpcyByZXF1aXJlZC5cIjtcbiAgfVxuXG4gIGlmICh1c2VyICYmIHBhc3N3b3JkKSB7XG4gICAgLy8gQ2hlY2sgaWYgcGFzc3dvcmQgaXMgY29ycmVjdCBvciBub3RcbiAgICBjb25zdCBpc1Bhc3N3b3JkTWF0Y2hlZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcblxuICAgIGlmICghaXNQYXNzd29yZE1hdGNoZWQpIHtcbiAgICAgIGVycm9ycy5tZXNzYWdlID0gXCJFbWFpbC9QYXNzd29yZCBjb21iaW5hdGlvbiBkbyBub3QgbWF0Y2hcIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVycm9ycyxcbiAgICBpc1ZhbGlkOiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCxcbiAgfTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZPUkdPVCBQQVNTV09SRCBWQUxJREFUSU9OUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgY29uc3QgZm9yZ290X3Bhc3N3b3JkX3ZhbGlkYXRpb24gPSBhc3luYyAoZGF0YSkgPT4ge1xuICBjb25zdCB7IGVtYWlsIH0gPSBkYXRhO1xuXG4gIGxldCBlcnJvcnMgPSB7fTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgdXNlckV4aXQoZW1haWwpO1xuXG4gIGlmICghdXNlcikge1xuICAgIGVycm9ycy5tZXNzYWdlID0gXCJObyBVc2VyIGV4aXRzIHdpdGggZ2l2ZW4gZW1haWwuXCI7XG4gIH1cblxuICBpZiAoZW1haWwgJiYgIXZhbGlkYXRvci5pc0VtYWlsKGVtYWlsKSkge1xuICAgIGVycm9ycy5lbWFpbCA9IFwiRW1haWwgTm90IFZhbGlkLlwiO1xuICB9XG5cbiAgaWYgKCFlbWFpbCkge1xuICAgIGVycm9ycy5lbWFpbCA9IFwiRW1haWwgaXMgcmVxdWlyZWQuXCI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVycm9ycyxcbiAgICBpc1ZhbGlkOiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCxcbiAgfTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE9UUCBWQVJJRklDQVRJT04gVkFMSURBVElPTlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IG90cF92YWxpZGF0aW9uID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgY29uc3QgeyBlbWFpbCwgb3RwIH0gPSBkYXRhO1xuXG4gIGxldCBlcnJvcnMgPSB7fTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgdXNlckV4aXQoZW1haWwpO1xuXG4gIGlmICghdXNlcikge1xuICAgIGVycm9ycy5tZXNzYWdlID0gXCJObyBVc2VyIGV4aXRzIHdpdGggZ2l2ZW4gZW1haWwuXCI7XG4gIH1cblxuICBjb25zb2xlLmxvZyh1c2VyKTtcblxuICBjb25zdCB1c2VyX3dpdGhfb3RwID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoe1xuICAgIGVtYWlsOiBlbWFpbD8udG9Mb3dlckNhc2UoKSxcbiAgICBvdHAsXG4gIH0pO1xuXG4gIGlmICghdXNlcl93aXRoX290cCAmJiB1c2VyKSB7XG4gICAgZXJyb3JzLm1lc3NhZ2UgPSBcIllvdXIgVmVyaWZpY2F0aW9uIE9UUCBDb2RlIElzIE5vdCBWYWxpZC5cIjtcbiAgfVxuXG4gIGlmIChlbWFpbCAmJiAhdmFsaWRhdG9yLmlzRW1haWwoZW1haWwpKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gXCJFbWFpbCBOb3QgVmFsaWQuXCI7XG4gIH1cblxuICBpZiAoIWVtYWlsKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gXCJFbWFpbCBpcyByZXF1aXJlZC5cIjtcbiAgfVxuXG4gIGlmICghb3RwKSB7XG4gICAgZXJyb3JzLm90cCA9IFwiT1RQIGlzIHJlcXVpcmVkLlwiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlcnJvcnMsXG4gICAgaXNWYWxpZDogT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgsXG4gIH07XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSRVNFVCBQQVNTV09SRCBWQUxJREFUSU9OUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgY29uc3QgcmVzZXRfcGFzc3dvcmRfdmFsaWRhdGlvbiA9IGFzeW5jIChkYXRhKSA9PiB7XG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBkYXRhO1xuXG4gIGxldCBlcnJvcnMgPSB7fTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgdXNlckV4aXQoZW1haWwpO1xuXG4gIGlmICghdXNlcikge1xuICAgIGVycm9ycy5tZXNzYWdlID0gXCJObyBVc2VyIGV4aXRzIHdpdGggZ2l2ZW4gZW1haWwuXCI7XG4gIH1cblxuICBpZiAoZW1haWwgJiYgIXZhbGlkYXRvci5pc0VtYWlsKGVtYWlsKSkge1xuICAgIGVycm9ycy5lbWFpbCA9IFwiRW1haWwgTm90IFZhbGlkLlwiO1xuICB9XG5cbiAgaWYgKCFlbWFpbCkge1xuICAgIGVycm9ycy5lbWFpbCA9IFwiRW1haWwgaXMgcmVxdWlyZWQuXCI7XG4gIH1cblxuICBpZiAoIXBhc3N3b3JkKSB7XG4gICAgZXJyb3JzLnBhc3N3b3JkID0gXCJQYXNzd29yZCBpcyByZXF1aXJlZC5cIjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXJyb3JzLFxuICAgIGlzVmFsaWQ6IE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoLFxuICB9O1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gVVBEQVRFIFBBU1NXT1JEIEJZIFBST0ZJTEVWQUxJREFUSU9OUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgY29uc3QgdXBkYXRlX3Bhc3N3b3JkX2Zyb21fcHJvZmlsZV92YWxpZGF0aW9uID0gYXN5bmMgKHJlcSkgPT4ge1xuICBjb25zdCB7IG9sZF9wYXNzd29yZCwgbmV3X3Bhc3N3b3JkIH0gPSByZXE/LmJvZHk7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kQnlJZChyZXE/LnVzZXI/Ll9pZCk7XG5cbiAgbGV0IGVycm9ycyA9IHt9O1xuXG4gIGlmIChvbGRfcGFzc3dvcmQgJiYgbmV3X3Bhc3N3b3JkKSB7XG4gICAgY29uc3QgaXNQYXNzd29yZE1hdGNoZWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShvbGRfcGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuXG4gICAgaWYgKCFpc1Bhc3N3b3JkTWF0Y2hlZCkge1xuICAgICAgZXJyb3JzLm1lc3NhZ2UgPSBcIk9sZCBQYXNzd29yZCBpcyBub3QgY29ycmVjdC5cIjtcbiAgICB9XG5cbiAgICBpZiAoaXNQYXNzd29yZE1hdGNoZWQpIHtcbiAgICAgIHVzZXIucGFzc3dvcmQgPSBuZXdfcGFzc3dvcmQ7XG4gICAgICBhd2FpdCB1c2VyLnNhdmUoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVycm9ycyxcbiAgICBpc1ZhbGlkOiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCxcbiAgfTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENIRUNLIFVTRVIgRVhJVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCB1c2VyRXhpdCA9IGFzeW5jIChlbWFpbCkgPT5cbiAgYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyBlbWFpbDogZW1haWw/LnRvTG93ZXJDYXNlKCkgfSk7XG4iXX0=