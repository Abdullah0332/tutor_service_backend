"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_tutor_profile = void 0;

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
}();

exports.update_tutor_profile = update_tutor_profile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy90dXRvci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInVwZGF0ZV90dXRvcl9wcm9maWxlIiwicmVxIiwicmVzIiwibmV4dCIsInVwZGF0ZV90dXRvcl9vYmplY3QiLCJ1cGRhdGVfdXNlcl9vYmplY3QiLCJUdXRvck1vZGVsIiwidXBkYXRlT25lIiwidXNlcl9pZCIsInVzZXIiLCJfaWQiLCIkc2V0IiwiVXNlck1vZGVsIiwiZmluZE9uZSIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxvQkFBb0I7QUFBQSwyRkFBRyxpQkFBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUd4QixnREFBNkJGLEdBQTdCLENBSHdCOztBQUFBO0FBQUE7QUFFeEJHLFlBQUFBLG1CQUZ3Qix5QkFFeEJBLG1CQUZ3QjtBQUVIQyxZQUFBQSxrQkFGRyx5QkFFSEEsa0JBRkc7QUFBQTtBQUFBLG1CQUsxQkMsa0JBQVdDLFNBQVgsQ0FDSjtBQUFFQyxjQUFBQSxPQUFPLEVBQUVQLEdBQUYsYUFBRUEsR0FBRixvQ0FBRUEsR0FBRyxDQUFFUSxJQUFQLDhDQUFFLFVBQVdDO0FBQXRCLGFBREksRUFFSjtBQUFFQyxjQUFBQSxJQUFJLEVBQUVQO0FBQVIsYUFGSSxDQUwwQjs7QUFBQTtBQUFBO0FBQUEsbUJBVTFCUSxpQkFBVUwsU0FBVixDQUNKO0FBQUVHLGNBQUFBLEdBQUcsRUFBRVQsR0FBRixhQUFFQSxHQUFGLHFDQUFFQSxHQUFHLENBQUVRLElBQVAsK0NBQUUsV0FBV0M7QUFBbEIsYUFESSxFQUVKO0FBQUVDLGNBQUFBLElBQUksRUFBRU47QUFBUixhQUZJLENBVjBCOztBQUFBO0FBQUE7QUFBQSxtQkFlYkMsa0JBQVdPLE9BQVgsQ0FBbUI7QUFBRUwsY0FBQUEsT0FBTyxFQUFFUCxHQUFGLGFBQUVBLEdBQUYscUNBQUVBLEdBQUcsQ0FBRVEsSUFBUCwrQ0FBRSxXQUFXQztBQUF0QixhQUFuQixDQWZhOztBQUFBO0FBZTFCSSxZQUFBQSxJQWYwQjtBQWlCaENaLFlBQUFBLEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCRixJQUFyQjtBQWpCZ0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFtQmhDRyxZQUFBQSxPQUFPLENBQUNDLEdBQVI7QUFDQWhCLFlBQUFBLEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVHLGNBQUFBLE9BQU8sNERBQUUsWUFBT0E7QUFBbEIsYUFBckI7O0FBcEJnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFwQm5CLG9CQUFvQjtBQUFBO0FBQUE7QUFBQSxHQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQgVHV0b3JNb2RlbCBmcm9tIFwiLi4vbW9kZWxzL3R1dG9yLm1vZGVcIjtcbmltcG9ydCBQYXJlbnRNb2RlbCBmcm9tIFwiLi4vbW9kZWxzL3BhcmVudC5tb2RlbFwiO1xuXG5pbXBvcnQgeyB1cGRhdGVfdHV0b3JfcHJvZmlsZV9zZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3R1dG9yLnNlcnZpY2UuanNcIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gVVBEQVRFIFRVVE9SIFBST0ZJTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IHVwZGF0ZV90dXRvcl9wcm9maWxlID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1cGRhdGVfdHV0b3Jfb2JqZWN0LCB1cGRhdGVfdXNlcl9vYmplY3QgfSA9XG4gICAgICBhd2FpdCB1cGRhdGVfdHV0b3JfcHJvZmlsZV9zZXJ2aWNlKHJlcSk7XG5cbiAgICBhd2FpdCBUdXRvck1vZGVsLnVwZGF0ZU9uZShcbiAgICAgIHsgdXNlcl9pZDogcmVxPy51c2VyPy5faWQgfSxcbiAgICAgIHsgJHNldDogdXBkYXRlX3R1dG9yX29iamVjdCB9XG4gICAgKTtcblxuICAgIGF3YWl0IFVzZXJNb2RlbC51cGRhdGVPbmUoXG4gICAgICB7IF9pZDogcmVxPy51c2VyPy5faWQgfSxcbiAgICAgIHsgJHNldDogdXBkYXRlX3VzZXJfb2JqZWN0IH1cbiAgICApO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IFR1dG9yTW9kZWwuZmluZE9uZSh7IHVzZXJfaWQ6IHJlcT8udXNlcj8uX2lkIH0pO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XG4gIH1cbn07XG4iXX0=