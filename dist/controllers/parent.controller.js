"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_parent_profile = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _tutor = _interopRequireDefault(require("../models/tutor.mode"));

var _parent = _interopRequireDefault(require("../models/parent.model"));

var _parentService = require("../services/parent.service.js");

// ---------------------------------------------------------------
// --------------------- UPDATE PARENT PROFILE -----------------------------
// ---------------------------------------------------------------
var update_parent_profile = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$user, _req$user2, _req$user3, _yield$update_parent_, update_parent_object, update_user_object, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _parentService.update_parent_profile_service)(req);

          case 3:
            _yield$update_parent_ = _context.sent;
            update_parent_object = _yield$update_parent_.update_parent_object;
            update_user_object = _yield$update_parent_.update_user_object;
            _context.next = 8;
            return _parent["default"].updateOne({
              user_id: req === null || req === void 0 ? void 0 : (_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user._id
            }, {
              $set: update_parent_object
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
            return _parent["default"].findOne({
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

  return function update_parent_profile(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.update_parent_profile = update_parent_profile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9wYXJlbnQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJ1cGRhdGVfcGFyZW50X3Byb2ZpbGUiLCJyZXEiLCJyZXMiLCJuZXh0IiwidXBkYXRlX3BhcmVudF9vYmplY3QiLCJ1cGRhdGVfdXNlcl9vYmplY3QiLCJQYXJlbnRNb2RlbCIsInVwZGF0ZU9uZSIsInVzZXJfaWQiLCJ1c2VyIiwiX2lkIiwiJHNldCIsIlVzZXJNb2RlbCIsImZpbmRPbmUiLCJkYXRhIiwic3RhdHVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEscUJBQXFCO0FBQUEsMkZBQUcsaUJBQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHekIsa0RBQThCRixHQUE5QixDQUh5Qjs7QUFBQTtBQUFBO0FBRXpCRyxZQUFBQSxvQkFGeUIseUJBRXpCQSxvQkFGeUI7QUFFSEMsWUFBQUEsa0JBRkcseUJBRUhBLGtCQUZHO0FBQUE7QUFBQSxtQkFLM0JDLG1CQUFZQyxTQUFaLENBQ0o7QUFBRUMsY0FBQUEsT0FBTyxFQUFFUCxHQUFGLGFBQUVBLEdBQUYsb0NBQUVBLEdBQUcsQ0FBRVEsSUFBUCw4Q0FBRSxVQUFXQztBQUF0QixhQURJLEVBRUo7QUFBRUMsY0FBQUEsSUFBSSxFQUFFUDtBQUFSLGFBRkksQ0FMMkI7O0FBQUE7QUFBQTtBQUFBLG1CQVUzQlEsaUJBQVVMLFNBQVYsQ0FDSjtBQUFFRyxjQUFBQSxHQUFHLEVBQUVULEdBQUYsYUFBRUEsR0FBRixxQ0FBRUEsR0FBRyxDQUFFUSxJQUFQLCtDQUFFLFdBQVdDO0FBQWxCLGFBREksRUFFSjtBQUFFQyxjQUFBQSxJQUFJLEVBQUVOO0FBQVIsYUFGSSxDQVYyQjs7QUFBQTtBQUFBO0FBQUEsbUJBZWRDLG1CQUFZTyxPQUFaLENBQW9CO0FBQUVMLGNBQUFBLE9BQU8sRUFBRVAsR0FBRixhQUFFQSxHQUFGLHFDQUFFQSxHQUFHLENBQUVRLElBQVAsK0NBQUUsV0FBV0M7QUFBdEIsYUFBcEIsQ0FmYzs7QUFBQTtBQWUzQkksWUFBQUEsSUFmMkI7QUFpQmpDWixZQUFBQSxHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkYsSUFBckI7QUFqQmlDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBbUJqQ0csWUFBQUEsT0FBTyxDQUFDQyxHQUFSO0FBQ0FoQixZQUFBQSxHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRyxjQUFBQSxPQUFPLDREQUFFLFlBQU9BO0FBQWxCLGFBQXJCOztBQXBCaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBckJuQixxQkFBcUI7QUFBQTtBQUFBO0FBQUEsR0FBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlck1vZGVsIGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IFR1dG9yTW9kZWwgZnJvbSBcIi4uL21vZGVscy90dXRvci5tb2RlXCI7XG5pbXBvcnQgUGFyZW50TW9kZWwgZnJvbSBcIi4uL21vZGVscy9wYXJlbnQubW9kZWxcIjtcblxuaW1wb3J0IHsgdXBkYXRlX3BhcmVudF9wcm9maWxlX3NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGFyZW50LnNlcnZpY2UuanNcIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gVVBEQVRFIFBBUkVOVCBQUk9GSUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCB1cGRhdGVfcGFyZW50X3Byb2ZpbGUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHVwZGF0ZV9wYXJlbnRfb2JqZWN0LCB1cGRhdGVfdXNlcl9vYmplY3QgfSA9XG4gICAgICBhd2FpdCB1cGRhdGVfcGFyZW50X3Byb2ZpbGVfc2VydmljZShyZXEpO1xuXG4gICAgYXdhaXQgUGFyZW50TW9kZWwudXBkYXRlT25lKFxuICAgICAgeyB1c2VyX2lkOiByZXE/LnVzZXI/Ll9pZCB9LFxuICAgICAgeyAkc2V0OiB1cGRhdGVfcGFyZW50X29iamVjdCB9XG4gICAgKTtcblxuICAgIGF3YWl0IFVzZXJNb2RlbC51cGRhdGVPbmUoXG4gICAgICB7IF9pZDogcmVxPy51c2VyPy5faWQgfSxcbiAgICAgIHsgJHNldDogdXBkYXRlX3VzZXJfb2JqZWN0IH1cbiAgICApO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IFBhcmVudE1vZGVsLmZpbmRPbmUoeyB1c2VyX2lkOiByZXE/LnVzZXI/Ll9pZCB9KTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xuICB9XG59O1xuIl19