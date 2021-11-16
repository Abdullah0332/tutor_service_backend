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
  profile_pic: {
    type: String
  },
  user_type: {
    type: String,
    "enum": ["parent", "individual", "tutor"]
  },
  otp: {
    type: Number
  },
  is_profile_completed: {
    type: Boolean,
    "default": false
  },
  register_type: {
    type: String,
    "enum": ["local", "google", "facebook"],
    "default": "local"
  },
  socialId: {
    type: String
  },
  active: {
    type: Boolean,
    "default": true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJ1c2VyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJmaXJzdF9uYW1lIiwidHlwZSIsIlN0cmluZyIsImxhc3RfbmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwcm9maWxlX3BpYyIsInVzZXJfdHlwZSIsIm90cCIsIk51bWJlciIsImlzX3Byb2ZpbGVfY29tcGxldGVkIiwiQm9vbGVhbiIsInJlZ2lzdGVyX3R5cGUiLCJzb2NpYWxJZCIsImFjdGl2ZSIsInRpbWVzdGFtcHMiLCJwcmUiLCJuZXh0IiwiaXNNb2RpZmllZCIsImJjcnlwdCIsImhhc2giLCJtZXRob2RzIiwiY29tcGFyZVBhc3N3b3JkIiwiZW50ZXJlZFBhc3N3b3JkIiwiY29tcGFyZSIsImdldEp3dFRva2VuIiwiand0Iiwic2lnbiIsImlkIiwiX2lkIiwiY29uZmlnIiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsIkpXVF9FWFBJUkVfVElNRSIsIlVzZXIiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBR0MscUJBQVNDLE1BQVQsQ0FDakI7QUFDRUMsRUFBQUEsVUFBVSxFQUFFO0FBQUVDLElBQUFBLElBQUksRUFBRUM7QUFBUixHQURkO0FBRUVDLEVBQUFBLFNBQVMsRUFBRTtBQUFFRixJQUFBQSxJQUFJLEVBQUVDO0FBQVIsR0FGYjtBQUdFRSxFQUFBQSxLQUFLLEVBQUU7QUFBRUgsSUFBQUEsSUFBSSxFQUFFQztBQUFSLEdBSFQ7QUFJRUcsRUFBQUEsUUFBUSxFQUFFO0FBQUVKLElBQUFBLElBQUksRUFBRUM7QUFBUixHQUpaO0FBS0VJLEVBQUFBLFdBQVcsRUFBRTtBQUFFTCxJQUFBQSxJQUFJLEVBQUVDO0FBQVIsR0FMZjtBQU1FSyxFQUFBQSxTQUFTLEVBQUU7QUFBRU4sSUFBQUEsSUFBSSxFQUFFQyxNQUFSO0FBQWdCLFlBQU0sQ0FBQyxRQUFELEVBQVcsWUFBWCxFQUF5QixPQUF6QjtBQUF0QixHQU5iO0FBT0VNLEVBQUFBLEdBQUcsRUFBRTtBQUFFUCxJQUFBQSxJQUFJLEVBQUVRO0FBQVIsR0FQUDtBQVFFQyxFQUFBQSxvQkFBb0IsRUFBRTtBQUFFVCxJQUFBQSxJQUFJLEVBQUVVLE9BQVI7QUFBaUIsZUFBUztBQUExQixHQVJ4QjtBQVNFQyxFQUFBQSxhQUFhLEVBQUU7QUFDYlgsSUFBQUEsSUFBSSxFQUFFQyxNQURPO0FBRWIsWUFBTSxDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLFVBQXBCLENBRk87QUFHYixlQUFTO0FBSEksR0FUakI7QUFjRVcsRUFBQUEsUUFBUSxFQUFFO0FBQUVaLElBQUFBLElBQUksRUFBRUM7QUFBUixHQWRaO0FBZUVZLEVBQUFBLE1BQU0sRUFBRTtBQUFFYixJQUFBQSxJQUFJLEVBQUVVLE9BQVI7QUFBaUIsZUFBUztBQUExQjtBQWZWLENBRGlCLEVBa0JqQjtBQUFFSSxFQUFBQSxVQUFVLEVBQUU7QUFBZCxDQWxCaUIsQ0FBbkIsQyxDQXFCQTs7O0FBQ0FsQixVQUFVLENBQUNtQixHQUFYLENBQWUsTUFBZjtBQUFBLDJGQUF1QixpQkFBZ0JDLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckIsZ0JBQUksQ0FBQyxLQUFLQyxVQUFMLENBQWdCLFVBQWhCLENBQUwsRUFBa0M7QUFDaENELGNBQUFBLElBQUk7QUFDTDs7QUFIb0I7QUFBQSxtQkFLQ0UscUJBQU9DLElBQVAsQ0FBWSxLQUFLZixRQUFqQixFQUEyQixFQUEzQixDQUxEOztBQUFBO0FBS3JCLGlCQUFLQSxRQUxnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxLLENBUUE7O0FBQ0FSLFVBQVUsQ0FBQ3dCLE9BQVgsQ0FBbUJDLGVBQW5CO0FBQUEsNEZBQXFDLGtCQUFnQkMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3RCSixxQkFBT0ssT0FBUCxDQUFlRCxlQUFmLEVBQWdDLEtBQUtsQixRQUFyQyxDQURzQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXJDOztBQUFBO0FBQUE7QUFBQTtBQUFBLEksQ0FJQTs7O0FBQ0FSLFVBQVUsQ0FBQ3dCLE9BQVgsQ0FBbUJJLFdBQW5CLEdBQWlDLFlBQVk7QUFDM0MsU0FBT0MseUJBQUlDLElBQUosQ0FBUztBQUFFQyxJQUFBQSxFQUFFLEVBQUUsS0FBS0M7QUFBWCxHQUFULEVBQTJCQyxrQkFBT0MsVUFBbEMsRUFBOEM7QUFDbkRDLElBQUFBLFNBQVMsRUFBRUYsa0JBQU9HO0FBRGlDLEdBQTlDLENBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1DLElBQUksR0FBR3BDLHFCQUFTcUMsS0FBVCxDQUFlLE1BQWYsRUFBdUJ0QyxVQUF2QixDQUFiOztlQUNlcUMsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnL2luZGV4LmpzXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgZmlyc3RfbmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBsYXN0X25hbWU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgcHJvZmlsZV9waWM6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgdXNlcl90eXBlOiB7IHR5cGU6IFN0cmluZywgZW51bTogW1wicGFyZW50XCIsIFwiaW5kaXZpZHVhbFwiLCBcInR1dG9yXCJdIH0sXG4gICAgb3RwOiB7IHR5cGU6IE51bWJlciB9LFxuICAgIGlzX3Byb2ZpbGVfY29tcGxldGVkOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXG4gICAgcmVnaXN0ZXJfdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZW51bTogW1wibG9jYWxcIiwgXCJnb29nbGVcIiwgXCJmYWNlYm9va1wiXSxcbiAgICAgIGRlZmF1bHQ6IFwibG9jYWxcIixcbiAgICB9LFxuICAgIHNvY2lhbElkOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGFjdGl2ZTogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0sXG4gIH0sXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pO1xuXG4vL0VuY3J5cHRpbmcgUGFzc3dvcmQgQmVmb3JlIFNhdmluZyBVc2VyXG51c2VyU2NoZW1hLnByZShcInNhdmVcIiwgYXN5bmMgZnVuY3Rpb24gKG5leHQpIHtcbiAgaWYgKCF0aGlzLmlzTW9kaWZpZWQoXCJwYXNzd29yZFwiKSkge1xuICAgIG5leHQoKTtcbiAgfVxuXG4gIHRoaXMucGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCh0aGlzLnBhc3N3b3JkLCAxMCk7XG59KTtcblxuLy8gQ29tcGFyZSB1c2VyIHBhc3N3b3JkXG51c2VyU2NoZW1hLm1ldGhvZHMuY29tcGFyZVBhc3N3b3JkID0gYXN5bmMgZnVuY3Rpb24gKGVudGVyZWRQYXNzd29yZCkge1xuICByZXR1cm4gYXdhaXQgYmNyeXB0LmNvbXBhcmUoZW50ZXJlZFBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkKTtcbn07XG5cbi8vIFJldHVybiBKV1RcbnVzZXJTY2hlbWEubWV0aG9kcy5nZXRKd3RUb2tlbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGp3dC5zaWduKHsgaWQ6IHRoaXMuX2lkIH0sIGNvbmZpZy5KV1RfU0VDUkVULCB7XG4gICAgZXhwaXJlc0luOiBjb25maWcuSldUX0VYUElSRV9USU1FLFxuICB9KTtcbn07XG5cbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl19