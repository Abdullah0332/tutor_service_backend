"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sign_up = exports.reset_password = exports.otp_verify = exports.me = exports.login = exports.forgot_password = void 0;

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
}();

exports.reset_password = reset_password;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9hdXRoLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsic2lnbl91cCIsInJlcSIsInJlcyIsIm5leHQiLCJib2R5IiwidXNlcl90eXBlIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJpc1ZhbGlkIiwiZXJyb3JzIiwic3RhdHVzIiwianNvbiIsIlVzZXJNb2RlbCIsImNyZWF0ZSIsInVzZXIiLCJUdXRvck1vZGVsIiwidXNlcl9pZCIsIl9pZCIsIlBhcmVudE1vZGVsIiwidHlwZSIsInRva2VuIiwiZ2V0Snd0VG9rZW4iLCJ0b09iamVjdCIsIm1lc3NhZ2UiLCJsb2dpbiIsImZpbmRPbmUiLCJ0b0xvd2VyQ2FzZSIsIm1lIiwiZmluZEJ5SWQiLCJwcm9maWxlIiwiZm9yZ290X3Bhc3N3b3JkIiwib3RwIiwidXBkYXRlT25lIiwiJHNldCIsInN1YmplY3QiLCJuYW1lIiwib3RwX3ZlcmlmeSIsInJlc2V0X3Bhc3N3b3JkIiwic2F2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0E7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLE9BQU87QUFBQSwyRkFBRyxpQkFBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFFMkNGLEdBQUcsQ0FBQ0csSUFGL0MsRUFFWEMsU0FGVyxhQUVYQSxTQUZXLEVBRUFDLFVBRkEsYUFFQUEsVUFGQSxFQUVZQyxTQUZaLGFBRVlBLFNBRlosRUFFdUJDLEtBRnZCLGFBRXVCQSxLQUZ2QixFQUU4QkMsUUFGOUIsYUFFOEJBLFFBRjlCO0FBQUE7QUFBQSxtQkFJZSw2QkFBa0JSLEdBQUcsQ0FBQ0csSUFBdEIsQ0FKZjs7QUFBQTtBQUFBO0FBSVhNLFlBQUFBLE9BSlcseUJBSVhBLE9BSlc7QUFJRkMsWUFB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QUVFRixHQUFHLENBQUNHLElBRk4sRUFFbEJJLEtBRmtCLGNBRWxCQSxLQUZrQixFQUVYQyxRQUZXLGNBRVhBLFFBRlc7QUFBQTtBQUFBLG1CQUlRLHFDQUEwQlIsR0FBRyxDQUFDRyxJQUE5QixDQUpSOztBQUFBO0FBQUE7QUFJbEJNLFlBQUFBLE9BSmtCLHlCQUlsQkEsT0FKa0I7QUFJVEMsWUFBQUEsTUFKUyx5QkFJVEEsTUFKUzs7QUFBQSxrQkFNdEJELE9BQU8sR0FBRyxDQU5ZO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQU9qQlIsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJGLE1BQXJCLENBUGlCOztBQUFBO0FBQUE7QUFBQSxtQkFVUEcsaUJBQVVhLE9BQVYsQ0FBa0I7QUFBRW5CLGNBQUFBLEtBQUssRUFBRUEsS0FBSyxDQUFDb0IsV0FBTjtBQUFULGFBQWxCLENBVk87O0FBQUE7QUFVcEJaLFlBQUFBLElBVm9CO0FBWTFCQSxZQUFBQSxJQUFJLENBQUNQLFFBQUwsR0FBZ0JBLFFBQWhCO0FBWjBCO0FBQUEsbUJBY3BCTyxJQUFJLENBQUN3QixJQUFMLEVBZG9COztBQUFBO0FBZ0IxQnRDLFlBQUFBLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVZLGNBQUFBLE9BQU8sRUFBRTtBQUFYLGFBQXJCO0FBaEIwQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWtCMUJ2QixZQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFWSxjQUFBQSxPQUFPLDhEQUFFLGFBQU9BO0FBQWxCLGFBQXJCOztBQWxCMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZGMsY0FBYztBQUFBO0FBQUE7QUFBQSxHQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCBUdXRvck1vZGVsIGZyb20gXCIuLi9tb2RlbHMvdHV0b3IubW9kZVwiO1xyXG5pbXBvcnQgUGFyZW50TW9kZWwgZnJvbSBcIi4uL21vZGVscy9wYXJlbnQubW9kZWxcIjtcclxuaW1wb3J0IHtcclxuICBzaWduX3VwX3ZhbGlkYXRvcixcclxuICBsb2dpbl92YWxpZGF0b3IsXHJcbiAgZm9yZ290X3Bhc3N3b3JkX3ZhbGlkYXRpb24sXHJcbiAgb3RwX3ZhbGlkYXRpb24sXHJcbiAgcmVzZXRfcGFzc3dvcmRfdmFsaWRhdGlvbixcclxufSBmcm9tIFwiLi4vdmFsaWRhdG9ycy9hdXRoLnZhbGlkYXRpb25zXCI7XHJcbmltcG9ydCB7IHJhbmRvbU9UUCB9IGZyb20gXCIuLi9saWJyYXJpZXMvdXRpbHNcIjtcclxuaW1wb3J0IHsgZm9yZ290X3Bhc3N3b3JkX2VtYWlsIH0gZnJvbSBcIi4uL2xpYnJhcmllcy9lbWFpbHMvZW1haWwuc2VuZGVyXCI7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFNJR04gVVAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBjb25zdCBzaWduX3VwID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdXNlcl90eXBlLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgY29uc3QgeyBpc1ZhbGlkLCBlcnJvcnMgfSA9IGF3YWl0IHNpZ25fdXBfdmFsaWRhdG9yKHJlcS5ib2R5KTtcclxuXHJcbiAgICBpZiAoaXNWYWxpZCA+IDApIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycm9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5jcmVhdGUoe1xyXG4gICAgICB1c2VyX3R5cGUsXHJcbiAgICAgIGZpcnN0X25hbWUsXHJcbiAgICAgIGxhc3RfbmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHVzZXJfdHlwZSA9PT0gXCJ0dXRvclwiKSB7XHJcbiAgICAgIGF3YWl0IFR1dG9yTW9kZWwuY3JlYXRlKHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VyPy5faWQsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgUGFyZW50TW9kZWwuY3JlYXRlKHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VyPy5faWQsXHJcbiAgICAgICAgdHlwZTogdXNlcl90eXBlLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IHVzZXIuZ2V0Snd0VG9rZW4oKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IC4uLnVzZXIudG9PYmplY3QoKSwgdG9rZW4gfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBMT0dJTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdXNlcl90eXBlLCBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIGNvbnN0IHsgaXNWYWxpZCwgZXJyb3JzIH0gPSBhd2FpdCBsb2dpbl92YWxpZGF0b3IocmVxLmJvZHkpO1xyXG5cclxuICAgIGlmIChpc1ZhbGlkID4gMCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoe1xyXG4gICAgICBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gdXNlci5nZXRKd3RUb2tlbigpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgLi4udXNlci50b09iamVjdCgpLCB0b2tlbiB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvcj8ubWVzc2FnZSB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExPR0dFRCBJTiBVU0VSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgY29uc3QgbWUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kQnlJZChyZXEudXNlci5faWQpO1xyXG4gICAgbGV0IHByb2ZpbGU7XHJcbiAgICBpZiAodXNlcj8udXNlcl90eXBlID09PSBcInR1dG9yXCIpIHtcclxuICAgICAgcHJvZmlsZSA9IGF3YWl0IFR1dG9yTW9kZWwuZmluZE9uZSh7IHVzZXJfaWQ6IHJlcS51c2VyLl9pZCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb2ZpbGUgPSBhd2FpdCBQYXJlbnRNb2RlbC5maW5kT25lKHsgdXNlcl9pZDogcmVxLnVzZXIuX2lkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgLi4udXNlci50b09iamVjdCgpLCBwcm9maWxlIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gRk9SR09UIFBBU1NXT1JEIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgY29uc3QgZm9yZ290X3Bhc3N3b3JkID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIGNvbnN0IHsgaXNWYWxpZCwgZXJyb3JzIH0gPSBhd2FpdCBmb3Jnb3RfcGFzc3dvcmRfdmFsaWRhdGlvbihyZXEuYm9keSk7XHJcblxyXG4gICAgaWYgKGlzVmFsaWQgPiAwKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG90cCA9IGF3YWl0IHJhbmRvbU9UUCgpO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IGVtYWlsOiBlbWFpbC50b0xvd2VyQ2FzZSgpIH0pO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC51cGRhdGVPbmUoXHJcbiAgICAgIHsgZW1haWw6IGVtYWlsLnRvTG93ZXJDYXNlKCkgfSxcclxuICAgICAgeyAkc2V0OiB7IG90cCB9IH1cclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgZm9yZ290X3Bhc3N3b3JkX2VtYWlsKHtcclxuICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICBzdWJqZWN0OiBcIkZvcmdvdCBQYXNzd29yZFwiLFxyXG4gICAgICBvdHA6IG90cCxcclxuICAgICAgbmFtZTogYCR7dXNlcj8uZmlyc3RfbmFtZX0gJHt1c2VyPy5sYXN0X25hbWV9YCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJlc1xyXG4gICAgICAuc3RhdHVzKDIwMClcclxuICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIkNoZWNrIHlvdSBlYW1pbCwgT1RQIHNlbmQgc3VjY2Vzc2Z1bGx5LlwiIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gT1RQIFZFUklGWSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNvbnN0IG90cF92ZXJpZnkgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBlbWFpbCwgb3RwIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICBjb25zdCB7IGlzVmFsaWQsIGVycm9ycyB9ID0gYXdhaXQgb3RwX3ZhbGlkYXRpb24ocmVxLmJvZHkpO1xyXG5cclxuICAgIGlmIChpc1ZhbGlkID4gMCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKSwgb3RwIH0pO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC51cGRhdGVPbmUoXHJcbiAgICAgIHsgZW1haWw6IGVtYWlsLnRvTG93ZXJDYXNlKCkgfSxcclxuICAgICAgeyAkc2V0OiB7IG90cDogbnVsbCB9IH1cclxuICAgICk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIk9UUCB2ZXJpZmllZCBzdWNjZXNzZnVsbHkuXCIgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSRVNFVCBQQVNTV09SRCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNvbnN0IHJlc2V0X3Bhc3N3b3JkID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICBjb25zdCB7IGlzVmFsaWQsIGVycm9ycyB9ID0gYXdhaXQgcmVzZXRfcGFzc3dvcmRfdmFsaWRhdGlvbihyZXEuYm9keSk7XHJcblxyXG4gICAgaWYgKGlzVmFsaWQgPiAwKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IGVtYWlsOiBlbWFpbC50b0xvd2VyQ2FzZSgpIH0pO1xyXG5cclxuICAgIHVzZXIucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuXHJcbiAgICBhd2FpdCB1c2VyLnNhdmUoKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiUGFhc3N3b3JkIFJlc2V0IHN1Y2Nlc3NmdWxseS5cIiB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvcj8ubWVzc2FnZSB9KTtcclxuICB9XHJcbn07XHJcbiJdfQ==