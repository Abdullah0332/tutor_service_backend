"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sign_up_validator = exports.reset_password_validation = exports.otp_validation = exports.login_validator = exports.forgot_password_validation = void 0;

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

            if (!user) {
              errors.message = "User Not Found on given email";
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
              _context2.next = 14;
              break;
            }

            _context2.next = 12;
            return _bcryptjs["default"].compare(password, user.password);

          case 12:
            isPasswordMatched = _context2.sent;

            if (!isPasswordMatched) {
              errors.message = "Email/Password combination do not match";
            }

          case 14:
            return _context2.abrupt("return", {
              errors: errors,
              isValid: Object.keys(errors).length
            });

          case 15:
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
// --------------------- CHECK USER EXIT -----------------------------
// ---------------------------------------------------------------


exports.reset_password_validation = reset_password_validation;

var userExit = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(email) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _userModel["default"].findOne({
              email: email === null || email === void 0 ? void 0 : email.toLowerCase()
            });

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function userExit(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0b3JzL2F1dGgudmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsic2lnbl91cF92YWxpZGF0b3IiLCJkYXRhIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvcnMiLCJ1c2VyRXhpdCIsInVzZXIiLCJtZXNzYWdlIiwidmFsaWRhdG9yIiwiaXNFbWFpbCIsImlzVmFsaWQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwibG9naW5fdmFsaWRhdG9yIiwiYmNyeXB0IiwiY29tcGFyZSIsImlzUGFzc3dvcmRNYXRjaGVkIiwiZm9yZ290X3Bhc3N3b3JkX3ZhbGlkYXRpb24iLCJvdHBfdmFsaWRhdGlvbiIsIm90cCIsImNvbnNvbGUiLCJsb2ciLCJVc2VyTW9kZWwiLCJmaW5kT25lIiwidG9Mb3dlckNhc2UiLCJ1c2VyX3dpdGhfb3RwIiwicmVzZXRfcGFzc3dvcmRfdmFsaWRhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLGlCQUFpQjtBQUFBLDJGQUFHLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QkMsWUFBQUEsVUFEdUIsR0FDb0JELElBRHBCLENBQ3ZCQyxVQUR1QixFQUNYQyxTQURXLEdBQ29CRixJQURwQixDQUNYRSxTQURXLEVBQ0FDLEtBREEsR0FDb0JILElBRHBCLENBQ0FHLEtBREEsRUFDT0MsUUFEUCxHQUNvQkosSUFEcEIsQ0FDT0ksUUFEUDtBQUczQkMsWUFBQUEsTUFIMkIsR0FHbEIsRUFIa0I7QUFBQTtBQUFBLG1CQUtaQyxRQUFRLENBQUNILEtBQUQsQ0FMSTs7QUFBQTtBQUt6QkksWUFBQUEsSUFMeUI7O0FBTy9CLGdCQUFJQSxJQUFKLEVBQVU7QUFDUkYsY0FBQUEsTUFBTSxDQUFDRyxPQUFQLEdBQWlCLGtDQUFqQjtBQUNEOztBQUVELGdCQUFJTCxL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aWRhdG9yIGZyb20gXCJ2YWxpZGF0b3JcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IFVzZXJNb2RlbCBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWwuanNcIjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gU0lHTiBWQUxJREFUSU9OUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNvbnN0IHNpZ25fdXBfdmFsaWRhdG9yID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICBjb25zdCB7IGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSBkYXRhO1xyXG5cclxuICBsZXQgZXJyb3JzID0ge307XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyRXhpdChlbWFpbCk7XHJcblxyXG4gIGlmICh1c2VyKSB7XHJcbiAgICBlcnJvcnMubWVzc2FnZSA9IFwiVXNlciBhbHJlYWR5IGV4aXN0IG9uIHRoaXMgZW1haWxcIjtcclxuICB9XHJcblxyXG4gIGlmIChlbWFpbCAmJiAhdmFsaWRhdG9yLmlzRW1haWwoZW1haWwpKSB7XHJcbiAgICBlcnJvcnMuZW1haWwgPSBcIlBsZWFzZSBlbnRlciB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiO1xyXG4gIH1cclxuICBpZiAoIWZpcnN0X25hbWUpIHtcclxuICAgIGVycm9ycy5maXJzdF9uYW1lID0gXCJGaXJzdCBOYW1lIGlzIHJlcXVpcmVkLlwiO1xyXG4gIH1cclxuICBpZiAoIWxhc3RfbmFtZSkge1xyXG4gICAgZXJyb3JzLmxhc3RfbmFtZSA9IFwiTGFzdCBOYW1lIGlzIHJlcXVpcmVkLlwiO1xyXG4gIH1cclxuICBpZiAoIWVtYWlsKSB7XHJcbiAgICBlcnJvcnMuZW1haWwgPSBcIkVtYWlsIGlzIHJlcXVpcmVkLlwiO1xyXG4gIH1cclxuICBpZiAoIXBhc3N3b3JkKSB7XHJcbiAgICBlcnJvcnMucGFzc3dvcmQgPSBcIlBhc3N3b3JkIGlzIHJlcXVpcmVkLlwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVycm9ycyxcclxuICAgIGlzVmFsaWQ6IE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExPR0lOIFZBTElEQVRJT05TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgY29uc3QgbG9naW5fdmFsaWRhdG9yID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gZGF0YTtcclxuXHJcbiAgbGV0IGVycm9ycyA9IHt9O1xyXG5cclxuICAvLyBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyBlbWFpbDogZW1haWw/LnRvTG93ZXJDYXNlKCkgfSk7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJFeGl0KGVtYWlsKTtcclxuXHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICBlcnJvcnMubWVzc2FnZSA9IFwiVXNlciBOb3QgRm91bmQgb24gZ2l2ZW4gZW1haWxcIjtcclxuICB9XHJcblxyXG4gIGlmIChlbWFpbCAmJiAhdmFsaWRhdG9yLmlzRW1haWwoZW1haWwpKSB7XHJcbiAgICBlcnJvcnMuZW1haWwgPSBcIkVtYWlsIE5vdCBWYWxpZFwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFlbWFpbCkge1xyXG4gICAgZXJyb3JzLmVtYWlsID0gXCJFbWFpbCBpcyByZXF1aXJlZC5cIjtcclxuICB9XHJcbiAgaWYgKCFwYXNzd29yZCkge1xyXG4gICAgZXJyb3JzLnBhc3N3b3JkID0gXCJQYXNzd29yZCBpcyByZXF1aXJlZC5cIjtcclxuICB9XHJcblxyXG4gIGlmICh1c2VyICYmIHBhc3N3b3JkKSB7XHJcbiAgICAvLyBDaGVjayBpZiBwYXNzd29yZCBpcyBjb3JyZWN0IG9yIG5vdFxyXG4gICAgY29uc3QgaXNQYXNzd29yZE1hdGNoZWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcblxyXG4gICAgaWYgKCFpc1Bhc3N3b3JkTWF0Y2hlZCkge1xyXG4gICAgICBlcnJvcnMubWVzc2FnZSA9IFwiRW1haWwvUGFzc3dvcmQgY29tYmluYXRpb24gZG8gbm90IG1hdGNoXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZXJyb3JzLFxyXG4gICAgaXNWYWxpZDogT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgsXHJcbiAgfTtcclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gRk9SR09UIFBBU1NXT1JEIFZBTElEQVRJT05TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgY29uc3QgZm9yZ290X3Bhc3N3b3JkX3ZhbGlkYXRpb24gPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IHsgZW1haWwgfSA9IGRhdGE7XHJcblxyXG4gIGxldCBlcnJvcnMgPSB7fTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJFeGl0KGVtYWlsKTtcclxuXHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICBlcnJvcnMubWVzc2FnZSA9IFwiTm8gVXNlciBleGl0cyB3aXRoIGdpdmVuIGVtYWlsLlwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKGVtYWlsICYmICF2YWxpZGF0b3IuaXNFbWFpbChlbWFpbCkpIHtcclxuICAgIGVycm9ycy5lbWFpbCA9IFwiRW1haWwgTm90IFZhbGlkLlwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFlbWFpbCkge1xyXG4gICAgZXJyb3JzLmVtYWlsID0gXCJFbWFpbCBpcyByZXF1aXJlZC5cIjtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlcnJvcnMsXHJcbiAgICBpc1ZhbGlkOiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCxcclxuICB9O1xyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBPVFAgVkFSSUZJQ0FUSU9OIFZBTElEQVRJT05TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgY29uc3Qgb3RwX3ZhbGlkYXRpb24gPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IHsgZW1haWwsIG90cCB9ID0gZGF0YTtcclxuXHJcbiAgbGV0IGVycm9ycyA9IHt9O1xyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgdXNlckV4aXQoZW1haWwpO1xyXG5cclxuICBpZiAoIXVzZXIpIHtcclxuICAgIGVycm9ycy5tZXNzYWdlID0gXCJObyBVc2VyIGV4aXRzIHdpdGggZ2l2ZW4gZW1haWwuXCI7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyh1c2VyKTtcclxuXHJcbiAgY29uc3QgdXNlcl93aXRoX290cCA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHtcclxuICAgIGVtYWlsOiBlbWFpbD8udG9Mb3dlckNhc2UoKSxcclxuICAgIG90cCxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF1c2VyX3dpdGhfb3RwICYmIHVzZXIpIHtcclxuICAgIGVycm9ycy5tZXNzYWdlID0gXCJZb3VyIFZlcmlmaWNhdGlvbiBPVFAgQ29kZSBJcyBOb3QgVmFsaWQuXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoZW1haWwgJiYgIXZhbGlkYXRvci5pc0VtYWlsKGVtYWlsKSkge1xyXG4gICAgZXJyb3JzLmVtYWlsID0gXCJFbWFpbCBOb3QgVmFsaWQuXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoIWVtYWlsKSB7XHJcbiAgICBlcnJvcnMuZW1haWwgPSBcIkVtYWlsIGlzIHJlcXVpcmVkLlwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFvdHApIHtcclxuICAgIGVycm9ycy5vdHAgPSBcIk9UUCBpcyByZXF1aXJlZC5cIjtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlcnJvcnMsXHJcbiAgICBpc1ZhbGlkOiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCxcclxuICB9O1xyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSRVNFVCBQQVNTV09SRCBWQUxJREFUSU9OUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNvbnN0IHJlc2V0X3Bhc3N3b3JkX3ZhbGlkYXRpb24gPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBkYXRhO1xyXG5cclxuICBsZXQgZXJyb3JzID0ge307XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyRXhpdChlbWFpbCk7XHJcblxyXG4gIGlmICghdXNlcikge1xyXG4gICAgZXJyb3JzLm1lc3NhZ2UgPSBcIk5vIFVzZXIgZXhpdHMgd2l0aCBnaXZlbiBlbWFpbC5cIjtcclxuICB9XHJcblxyXG4gIGlmIChlbWFpbCAmJiAhdmFsaWRhdG9yLmlzRW1haWwoZW1haWwpKSB7XHJcbiAgICBlcnJvcnMuZW1haWwgPSBcIkVtYWlsIE5vdCBWYWxpZC5cIjtcclxuICB9XHJcblxyXG4gIGlmICghZW1haWwpIHtcclxuICAgIGVycm9ycy5lbWFpbCA9IFwiRW1haWwgaXMgcmVxdWlyZWQuXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoIXBhc3N3b3JkKSB7XHJcbiAgICBlcnJvcnMucGFzc3dvcmQgPSBcIlBhc3N3b3JkIGlzIHJlcXVpcmVkLlwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVycm9ycyxcclxuICAgIGlzVmFsaWQ6IE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENIRUNLIFVTRVIgRVhJVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgdXNlckV4aXQgPSBhc3luYyAoZW1haWwpID0+XHJcbiAgYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyBlbWFpbDogZW1haWw/LnRvTG93ZXJDYXNlKCkgfSk7XHJcbiJdfQ==