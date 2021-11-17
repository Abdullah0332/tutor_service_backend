"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_tutor_profile = exports.list_of_tutors = exports.get_single_tutor = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _tutor = _interopRequireDefault(require("../models/tutor.mode"));

var _parent = _interopRequireDefault(require("../models/parent.model"));

var _tutorService = require("../services/tutor.service.js");

// ---------------------------------------------------------------
// --------------------- UPDATE TUTOR PROFILE -----------------------------
// ---------------------------------------------------------------
var update_tutor_profile = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$user, _req$user2, _req$user3, _yield$update_tutor_p, update_tutor_object, update_user_object, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _tutorService.update_tutor_profile_service)(req);

          case 3:
            _yield$update_tutor_p = _context.sent;
            update_tutor_object = _yield$update_tutor_p.update_tutor_object;
            update_user_object = _yield$update_tutor_p.update_user_object;
            _context.next = 8;
            return _tutor["default"].updateOne({
              user_id: req === null || req === void 0 ? void 0 : (_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user._id
            }, {
              $set: update_tutor_object
            });

          case 8:
            _context.next = 10;
            return _user["default"].updateOne({
              _id: req === null || req === void 0 ? void 0 : (_req$user2 = req.user) === null || _req$user2 === void 0 ? void 0 : _req$user2._id
            }, {
              $set: update_user_object
            });

          case 10:
            _context.next = 12;
            return _tutor["default"].findOne({
              user_id: req === null || req === void 0 ? void 0 : (_req$user3 = req.user) === null || _req$user3 === void 0 ? void 0 : _req$user3._id
            });

          case 12:
            data = _context.sent;
            res.status(200).json(data);
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function update_tutor_profile(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- LIST OF ALL TUTORS -----------------------------
// ---------------------------------------------------------------


exports.update_tutor_profile = update_tutor_profile;

var list_of_tutors = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _tutor["default"].aggregate([{
              $lookup: {
                from: "users",
                localField: "user_id",
                foreignField: "_id",
                as: "user_profile"
              }
            }, {
              $unwind: {
                path: "$user_profile"
              }
            }]);

          case 3:
            data = _context2.sent;
            res.status(200).json(data);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function list_of_tutors(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- SINGLE TUTOR -----------------------------
// ---------------------------------------------------------------


exports.list_of_tutors = list_of_tutors;

var get_single_tutor = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var _req$params, data;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _tutor["default"].findOne({
              user_id: req === null || req === void 0 ? void 0 : (_req$params = req.params) === null || _req$params === void 0 ? void 0 : _req$params.id
            }).populate("user_id");

          case 3:
            data = _context3.sent;
            res.status(200).json(data);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              message: _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function get_single_tutor(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.get_single_tutor = get_single_tutor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy90dXRvci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInVwZGF0ZV90dXRvcl9wcm9maWxlIiwicmVxIiwicmVzIiwibmV4dCIsInVwZGF0ZV90dXRvcl9vYmplY3QiLCJ1cGRhdGVfdXNlcl9vYmplY3QiLCJUdXRvck1vZGVsIiwidXBkYXRlT25lIiwidXNlcl9pZCIsInVzZXIiLCJfaWQiLCIkc2V0IiwiVXNlck1vZGVsIiwiZmluZE9uZSIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJsaXN0X29mX3R1dG9ycyIsImFnZ3JlZ2F0ZSIsIiRsb29rdXAiLCJmcm9tIiwibG9jYWxGaWVsZCIsImZvcmVpZ25GaWVsZCIsImFzIiwiJHVud2luZCIsInBhdGgiLCJnZXRfc2luZ2xlX3R1dG9yIiwicGFyYW1zIiwiaWQiLCJwb3B1bGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLG9CQUFvQjtBQUFBLDJGQUFHLGlCQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR3hCLGdEQUE2QkYsR0FBN0IsQ0FId0I7O0FBQUE7QUFBQTtBQUV4QkcsWUFBQUEsbUJBRndCLHlCQUV4QkEsbUJBRndCO0FBRUhDLFlBQUFBLGtCQUZHLHlCQUVIQSxrQkFGRztBQUFBO0FBQUEsbUJBSzFCQyxrQkFBV0MsU0FBWCxDQUNKO0FBQUVDLGNBQUFBLE9BQU8sRUFBRVAsR0FBRixhQUFFQSxHQUFGLG9DQUFFQSxHQUFHLENBQUVRLElBQVAsOENBQUUsVUFBV0M7QUFBdEIsYUFESSxFQUVKO0FBQUVDLGNBQUFBLElBQUksRUFBRVA7QUFBUixhQUZJLENBTDBCOztBQUFBO0FBQUE7QUFBQSxtQkFVMUJRLGlCQUFVTCxTQUFWLENBQ0o7QUFBRUcsY0FBQUEsR0FBRyxFQUFFVCxHQUFGLGFBQUVBLEdBQUYscUNBQUVBLEdBQUcsQ0FBRVEsSUFBUCwrQ0FBRSxXQUFXQztBQUFsQixhQURJLEVBRUo7QUFBRUMsY0FBQUEsSUFBSSxFQUFFTjtBQUFSLGFBRkksQ0FWMEI7O0FBQUE7QUFBQTtBQUFBLG1CQWViQyxrQkFBV08sT0FBWCxDQUFtQjtBQUFFTCxjQUFBQSxPQUFPLEVBQUVQLEdBQUYsYUFBRUEsR0FBRixxQ0FBRUEsR0FBRyxDQUFFUSxJQUFQLCtDQUFFLFdBQVdDO0FBQXRCLGFBQW5CLENBZmE7O0FBQUE7QUFlMUJJLFlBQUFBLElBZjBCO0FBaUJoQ1osWUFBQUEsR0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJGLElBQXJCO0FBakJnQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQW1CaENHLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUjtBQUNBaEIsWUFBQUEsR0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUcsY0FBQUEsT0FBTyw0REFBRSxZQUFPQTtBQUFsQixhQUFyQjs7QUFwQmdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXBCbkIsb0JBQW9CO0FBQUE7QUFBQTtBQUFBLEdBQTFCLEMsQ0F3QlA7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1vQixjQUFjO0FBQUEsNEZBQUcsa0JBQU9uQixHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFUEcsa0JBQVdlLFNBQVgsQ0FBcUIsQ0FDdEM7QUFDRUMsY0FBQUEsT0FBTyxFQUFFO0FBQ1BDLGdCQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQQyxnQkFBQUEsVUFBVSxFQUFFLFNBRkw7QUFHUEMsZ0JBQUFBLFlBQVksRUFBRSxLQUhQO0FBSVBDLGdCQUFBQSxFQUFFLEVBQUU7QUFKRztBQURYLGFBRHNDLEVBU3RDO0FBQ0VDLGNBQUFBLE9BQU8sRUFBRTtBQUNQQyxnQkFBQUEsSUFBSSxFQUFFO0FBREM7QUFEWCxhQVRzQyxDQUFyQixDQUZPOztBQUFBO0FBRXBCZCxZQUFBQSxJQUZvQjtBQWtCMUJaLFlBQUFBLEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCRixJQUFyQjtBQWxCMEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFvQjFCWixZQUFBQSxHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRyxjQUFBQSxPQUFPLDhEQUFFLGFBQU9BO0FBQWxCLGFBQXJCOztBQXBCMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZEMsY0FBYztBQUFBO0FBQUE7QUFBQSxHQUFwQixDLENBd0JQO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNUyxnQkFBZ0I7QUFBQSw0RkFBRyxrQkFBTzVCLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFVEcsa0JBQVdPLE9BQVgsQ0FBbUI7QUFDcENMLGNBQUFBLE9BQU8sRUFBRVAsR0FBRixhQUFFQSxHQUFGLHNDQUFFQSxHQUFHLENBQUU2QixNQUFQLGdEQUFFLFlBQWFDO0FBRGMsYUFBbkIsRUFFaEJDLFFBRmdCLENBRVAsU0FGTyxDQUZTOztBQUFBO0FBRXRCbEIsWUFBQUEsSUFGc0I7QUFNNUJaLFlBQUFBLEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCRixJQUFyQjtBQU40QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVE1QlosWUFBQUEsR0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUcsY0FBQUEsT0FBTyw4REFBRSxhQUFPQTtBQUFsQixhQUFyQjs7QUFSNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBaEJVLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQgVHV0b3JNb2RlbCBmcm9tIFwiLi4vbW9kZWxzL3R1dG9yLm1vZGVcIjtcbmltcG9ydCBQYXJlbnRNb2RlbCBmcm9tIFwiLi4vbW9kZWxzL3BhcmVudC5tb2RlbFwiO1xuXG5pbXBvcnQgeyB1cGRhdGVfdHV0b3JfcHJvZmlsZV9zZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3R1dG9yLnNlcnZpY2UuanNcIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gVVBEQVRFIFRVVE9SIFBST0ZJTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IHVwZGF0ZV90dXRvcl9wcm9maWxlID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1cGRhdGVfdHV0b3Jfb2JqZWN0LCB1cGRhdGVfdXNlcl9vYmplY3QgfSA9XG4gICAgICBhd2FpdCB1cGRhdGVfdHV0b3JfcHJvZmlsZV9zZXJ2aWNlKHJlcSk7XG5cbiAgICBhd2FpdCBUdXRvck1vZGVsLnVwZGF0ZU9uZShcbiAgICAgIHsgdXNlcl9pZDogcmVxPy51c2VyPy5faWQgfSxcbiAgICAgIHsgJHNldDogdXBkYXRlX3R1dG9yX29iamVjdCB9XG4gICAgKTtcblxuICAgIGF3YWl0IFVzZXJNb2RlbC51cGRhdGVPbmUoXG4gICAgICB7IF9pZDogcmVxPy51c2VyPy5faWQgfSxcbiAgICAgIHsgJHNldDogdXBkYXRlX3VzZXJfb2JqZWN0IH1cbiAgICApO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IFR1dG9yTW9kZWwuZmluZE9uZSh7IHVzZXJfaWQ6IHJlcT8udXNlcj8uX2lkIH0pO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExJU1QgT0YgQUxMIFRVVE9SUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgY29uc3QgbGlzdF9vZl90dXRvcnMgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgVHV0b3JNb2RlbC5hZ2dyZWdhdGUoW1xuICAgICAge1xuICAgICAgICAkbG9va3VwOiB7XG4gICAgICAgICAgZnJvbTogXCJ1c2Vyc1wiLFxuICAgICAgICAgIGxvY2FsRmllbGQ6IFwidXNlcl9pZFwiLFxuICAgICAgICAgIGZvcmVpZ25GaWVsZDogXCJfaWRcIixcbiAgICAgICAgICBhczogXCJ1c2VyX3Byb2ZpbGVcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICR1bndpbmQ6IHtcbiAgICAgICAgICBwYXRoOiBcIiR1c2VyX3Byb2ZpbGVcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTSU5HTEUgVFVUT1IgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IGdldF9zaW5nbGVfdHV0b3IgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgVHV0b3JNb2RlbC5maW5kT25lKHtcbiAgICAgIHVzZXJfaWQ6IHJlcT8ucGFyYW1zPy5pZCxcbiAgICB9KS5wb3B1bGF0ZShcInVzZXJfaWRcIik7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xuICB9XG59O1xuIl19