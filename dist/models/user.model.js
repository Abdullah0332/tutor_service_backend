"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _index = _interopRequireDefault(require("../config/index.js"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var userSchema = _mongoose["default"].Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  user_type: {
    type: String,
    "enum": ["parent", "individual", "tutor"]
  },
  otp: {
    type: Number
  }
}, {
  timestamps: true
}); //Encrypting Password Before Saving User


userSchema.pre("save", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!this.isModified("password")) {
              next();
            }

            _context.next = 3;
            return _bcryptjs["default"].hash(this.password, 10);

          case 3:
            this.password = _context.sent;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()); // Compare user password

userSchema.methods.comparePassword = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(enteredPassword) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _bcryptjs["default"].compare(enteredPassword, this.password);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}(); // Return JWT


userSchema.methods.getJwtToken = function () {
  return _jsonwebtoken["default"].sign({
    id: this._id
  }, _index["default"].JWT_SECRET, {
    expiresIn: _index["default"].JWT_EXPIRE_TIME
  });
};

var User = _mongoose["default"].model("User", userSchema);

var _default = User;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJ1c2VyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJmaXJzdF9uYW1lIiwidHlwZSIsIlN0cmluZyIsImxhc3RfbmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyX3R5cGUiLCJvdHAiLCJOdW1iZXIiLCJ0aW1lc3RhbXBzIiwicHJlIiwibmV4dCIsImlzTW9kaWZpZWQiLCJiY3J5cHQiLCJoYXNoIiwibWV0aG9kcyIsImNvbXBhcmVQYXNzd29yZCIsImVudGVyZWRQYXNzd29yZCIsImNvbXBhcmUiLCJnZXRKd3RUb2tlbiIsImp3dCIsInNpZ24iLCJpZCIsIl9pZCIsImNvbmZpZyIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJKV1RfRVhQSVJFX1RJTUUiLCJVc2VyIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHFCQUFTQyxNQUFULENBQ2pCO0FBQ0VDLEVBQUFBLFVBQVUsRUFBRTtBQUFFQyxJQUFBQSxJQUFJLEVBQUVDO0FBQVIsR0FEZDtBQUVFQyxFQUFBQSxTQUFTLEVBQUU7QUFBRUYsSUFBQUEsSUFBSSxFQUFFQztBQUFSLEdBRmI7QUFHRUUsRUFBQUEsS0FBSyxFQUFFO0FBQUVILElBQUFBLElBQUksRUFBRUM7QUFBUixHQUhUO0FBSUVHLEVBQUFBLFFBQVEsRUFBRTtBQUFFSixJQUFBQSxJQUFJLEVBQUVDO0FBQVIsR0FKWjtBQUtFSSxFQUFBQSxTQUFTLEVBQUU7QUFBRUwsSUFBQUEsSUFBSSxFQUFFQyxNQUFSO0FBQWdCLFlBQU0sQ0FBQyxRQUFELEVBQVcsWUFBWCxFQUF5QixPQUF6QjtBQUF0QixHQUxiO0FBTUVLLEVBQUFBLEdBQUcsRUFBRTtBQUFFTixJQUFBQSxJQUFJLEVBQUVPO0FBQVI7QUFOUCxDQURpQixFQVNqQjtBQUFFQyxFQUFBQSxVQUFVLEVBQUU7QUFBZCxDQVRpQixDQUFuQixDLENBWUE7OztBQUNBWixVQUFVLENBQUNhLEdBQVgsQ0FBZSxNQUFmO0FBQUEsMkZBQXVCLGlCQUFnQkMsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQixnQkFBSSxDQUFDLEtBQUtDLFVBQUwsQ0FBZ0IsVUFBaEIsQ0FBTCxFQUFrQztBQUNoQ0QsY0FBQUEsSUFBSTtBQUNMOztBQUhvQjtBQUFBLG1CQUtDRSxxQkFBT0MsSUFBUCxDQUFZLEtBQUtULFFBQWpCLEVBQTJCLEVBQTNCLENBTEQ7O0FBQUE7QUFLckIsaUJBQUtBLFFBTGdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEssQ0FRQTs7QUFDQVIsVUFBVSxDQUFDa0IsT0FBWCxDQUFtQkMsZUFBbkI7QUFBQSw0RkFBcUMsa0JBQWdCQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDdEJKLHFCQUFPSyxPQUFQLENBQWVELGVBQWYsRUFBZ0MsS0FBS1osUUFBckMsQ0FEc0I7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFyQzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJLENBSUE7OztBQUNBUixVQUFVLENBQUNrQixPQUFYLENBQW1CSSxXQUFuQixHQUFpQyxZQUFZO0FBQzNDLFNBQU9DLHlCQUFJQyxJQUFKLENBQVM7QUFBRUMsSUFBQUEsRUFBRSxFQUFFLEtBQUtDO0FBQVgsR0FBVCxFQUEyQkMsa0JBQU9DLFVBQWxDLEVBQThDO0FBQ25EQyxJQUFBQSxTQUFTLEVBQUVGLGtCQUFPRztBQURpQyxHQUE5QyxDQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNQyxJQUFJLEdBQUc5QixxQkFBUytCLEtBQVQsQ0FBZSxNQUFmLEVBQXVCaEMsVUFBdkIsQ0FBYjs7ZUFDZStCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWcvaW5kZXguanNcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgZmlyc3RfbmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGxhc3RfbmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGVtYWlsOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICB1c2VyX3R5cGU6IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBbXCJwYXJlbnRcIiwgXCJpbmRpdmlkdWFsXCIsIFwidHV0b3JcIl0gfSxcclxuICAgIG90cDogeyB0eXBlOiBOdW1iZXIgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG4vL0VuY3J5cHRpbmcgUGFzc3dvcmQgQmVmb3JlIFNhdmluZyBVc2VyXHJcbnVzZXJTY2hlbWEucHJlKFwic2F2ZVwiLCBhc3luYyBmdW5jdGlvbiAobmV4dCkge1xyXG4gIGlmICghdGhpcy5pc01vZGlmaWVkKFwicGFzc3dvcmRcIikpIHtcclxuICAgIG5leHQoKTtcclxuICB9XHJcblxyXG4gIHRoaXMucGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCh0aGlzLnBhc3N3b3JkLCAxMCk7XHJcbn0pO1xyXG5cclxuLy8gQ29tcGFyZSB1c2VyIHBhc3N3b3JkXHJcbnVzZXJTY2hlbWEubWV0aG9kcy5jb21wYXJlUGFzc3dvcmQgPSBhc3luYyBmdW5jdGlvbiAoZW50ZXJlZFBhc3N3b3JkKSB7XHJcbiAgcmV0dXJuIGF3YWl0IGJjcnlwdC5jb21wYXJlKGVudGVyZWRQYXNzd29yZCwgdGhpcy5wYXNzd29yZCk7XHJcbn07XHJcblxyXG4vLyBSZXR1cm4gSldUXHJcbnVzZXJTY2hlbWEubWV0aG9kcy5nZXRKd3RUb2tlbiA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gand0LnNpZ24oeyBpZDogdGhpcy5faWQgfSwgY29uZmlnLkpXVF9TRUNSRVQsIHtcclxuICAgIGV4cGlyZXNJbjogY29uZmlnLkpXVF9FWFBJUkVfVElNRSxcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiJdfQ==