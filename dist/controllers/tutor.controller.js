"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_tutor_profile = exports.list_of_tutors = exports.get_single_tutor = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _tutor = _interopRequireDefault(require("../models/tutor.model"));

var _parent = _interopRequireDefault(require("../models/parent.model"));

var _apiFilter = _interopRequireDefault(require("../libraries/apiFilter"));

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
    var filtered_data, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return new _apiFilter["default"](_tutor["default"].find(), req.query).tutor_language();

          case 3:
            filtered_data = _context2.sent;
            _context2.next = 6;
            return filtered_data.document;

          case 6:
            data = _context2.sent;
            res.status(200).json(data);
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy90dXRvci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInVwZGF0ZV90dXRvcl9wcm9maWxlIiwicmVxIiwicmVzIiwibmV4dCIsInVwZGF0ZV90dXRvcl9vYmplY3QiLCJ1cGRhdGVfdXNlcl9vYmplY3QiLCJUdXRvck1vZGVsIiwidXBkYXRlT25lIiwidXNlcl9pZCIsInVzZXIiLCJfaWQiLCIkc2V0IiwiVXNlck1vZGVsIiwiZmluZE9uZSIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJsaXN0X29mX3R1dG9ycyIsIkFQSUZpbHRlciIsImZpbmQiLCJxdWVyeSIsInR1dG9yX2xhbmd1YWdlIiwiZmlsdGVyZWRfZGF0YSIsImRvY3VtZW50IiwiZ2V0X3NpbmdsZV90dXRvciIsInBhcmFtcyIsImlkIiwicG9wdWxhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxvQkFBb0I7QUFBQSwyRkFBRyxpQkFBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUd4QixnREFBNkJGLEdBQTdCLENBSHdCOztBQUFBO0FBQUE7QUFFeEJHLFlBQUFBLG1CQUZ3Qix5QkFFeEJBLG1CQUZ3QjtBQUVIQyxZQUFBQSxrQkFGRyx5QkFFSEEsa0JBRkc7QUFBQTtBQUFBLG1CQUsxQkMsa0JBQVdDLFNBQVgsQ0FDSjtBQUFFQyxjQUFBQSxPQUFPLEVBQUVQLEdBQUYsYUFBRUEsR0FBRixvQ0FBRUEsR0FBRyxDQUFFUSxJQUFQLDhDQUFFLFVBQVdDO0FBQXRCLGFBREksRUFFSjtBQUFFQyxjQUFBQSxJQUFJLEVBQUVQO0FBQVIsYUFGSSxDQUwwQjs7QUFBQTtBQUFBO0FBQUEsbUJBVTFCUSxpQkFBVUwsU0FB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IjpbImltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQgVHV0b3JNb2RlbCBmcm9tIFwiLi4vbW9kZWxzL3R1dG9yLm1vZGVsXCI7XG5pbXBvcnQgUGFyZW50TW9kZWwgZnJvbSBcIi4uL21vZGVscy9wYXJlbnQubW9kZWxcIjtcbmltcG9ydCBBUElGaWx0ZXIgZnJvbSBcIi4uL2xpYnJhcmllcy9hcGlGaWx0ZXJcIjtcblxuaW1wb3J0IHsgdXBkYXRlX3R1dG9yX3Byb2ZpbGVfc2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy90dXRvci5zZXJ2aWNlLmpzXCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFVQREFURSBUVVRPUiBQUk9GSUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCB1cGRhdGVfdHV0b3JfcHJvZmlsZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdXBkYXRlX3R1dG9yX29iamVjdCwgdXBkYXRlX3VzZXJfb2JqZWN0IH0gPVxuICAgICAgYXdhaXQgdXBkYXRlX3R1dG9yX3Byb2ZpbGVfc2VydmljZShyZXEpO1xuXG4gICAgYXdhaXQgVHV0b3JNb2RlbC51cGRhdGVPbmUoXG4gICAgICB7IHVzZXJfaWQ6IHJlcT8udXNlcj8uX2lkIH0sXG4gICAgICB7ICRzZXQ6IHVwZGF0ZV90dXRvcl9vYmplY3QgfVxuICAgICk7XG5cbiAgICBhd2FpdCBVc2VyTW9kZWwudXBkYXRlT25lKFxuICAgICAgeyBfaWQ6IHJlcT8udXNlcj8uX2lkIH0sXG4gICAgICB7ICRzZXQ6IHVwZGF0ZV91c2VyX29iamVjdCB9XG4gICAgKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBUdXRvck1vZGVsLmZpbmRPbmUoeyB1c2VyX2lkOiByZXE/LnVzZXI/Ll9pZCB9KTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBMSVNUIE9GIEFMTCBUVVRPUlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IGxpc3Rfb2ZfdHV0b3JzID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IFR1dG9yTW9kZWwuYWdncmVnYXRlKFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgJGxvb2t1cDoge1xuICAgIC8vICAgICAgIGZyb206IFwidXNlcnNcIixcbiAgICAvLyAgICAgICBsb2NhbEZpZWxkOiBcInVzZXJfaWRcIixcbiAgICAvLyAgICAgICBmb3JlaWduRmllbGQ6IFwiX2lkXCIsXG4gICAgLy8gICAgICAgYXM6IFwidXNlcl9wcm9maWxlXCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICAkdW53aW5kOiB7XG4gICAgLy8gICAgICAgcGF0aDogXCIkdXNlcl9wcm9maWxlXCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9LFxuICAgIC8vIF0pO1xuXG4gICAgY29uc3QgZmlsdGVyZWRfZGF0YSA9IGF3YWl0IG5ldyBBUElGaWx0ZXIoXG4gICAgICBUdXRvck1vZGVsLmZpbmQoKSxcbiAgICAgIHJlcS5xdWVyeVxuICAgICkudHV0b3JfbGFuZ3VhZ2UoKTtcblxuICAgIGxldCBkYXRhID0gYXdhaXQgZmlsdGVyZWRfZGF0YS5kb2N1bWVudDtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTSU5HTEUgVFVUT1IgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IGdldF9zaW5nbGVfdHV0b3IgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgVHV0b3JNb2RlbC5maW5kT25lKHtcbiAgICAgIHVzZXJfaWQ6IHJlcT8ucGFyYW1zPy5pZCxcbiAgICB9KS5wb3B1bGF0ZShcInVzZXJfaWRcIik7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xuICB9XG59O1xuIl19