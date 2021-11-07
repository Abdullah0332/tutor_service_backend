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
  },
  is_profile_completed: {
    type: Boolean,
    "default": false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJ1c2VyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJmaXJzdF9uYW1lIiwidHlwZSIsIlN0cmluZyIsImxhc3RfbmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyX3R5cGUiLCJvdHAiLCJOdW1iZXIiLCJpc19wcm9maWxlX2NvbXBsZXRlZCIsIkJvb2xlYW4iLCJ0aW1lc3RhbXBzIiwicHJlIiwibmV4dCIsImlzTW9kaWZpZWQiLCJiY3J5cHQiLCJoYXNoIiwibWV0aG9kcyIsImNvbXBhcmVQYXNzd29yZCIsImVudGVyZWRQYXNzd29yZCIsImNvbXBhcmUiLCJnZXRKd3RUb2tlbiIsImp3dCIsInNpZ24iLCJpZCIsIl9pZCIsImNvbmZpZyIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJKV1RfRVhQSVJFX1RJTUUiLCJVc2VyIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHFCQUFTQyxNQUFULENBQ2pCO0FBQ0VDLEVBQUFBLFVBQVUsRUFBRTtBQUFFQyxJQUFBQSxJQUFJLEVBQUVDO0FBQVIsR0FEZDtBQUVFQyxFQUFBQSxTQUFTLEVBQUU7QUFBRUYsSUFBQUEsSUFBSSxFQUFFQztBQUFSLEdBRmI7QUFHRUUsRUFBQUEsS0FBSyxFQUFFO0FBQUVILElBQUFBLElBQUksRUFBRUM7QUFBUixHQUhUO0FBSUVHLEVBQUFBLFFBQVEsRUFBRTtBQUFFSixJQUFBQSxJQUFJLEVBQUVDO0FBQVIsR0FKWjtBQUtFSSxFQUFBQSxTQUFTLEVBQUU7QUFBRUwsSUFBQUEsSUFBSSxFQUFFQyxNQUFSO0FBQWdCLFlBQU0sQ0FBQyxRQUFELEVBQVcsWUFBWCxFQUF5QixPQUF6QjtBQUF0QixHQUxiO0FBTUVLLEVBQUFBLEdBQUcsRUFBRTtBQUFFTixJQUFBQSxJQUFJLEVBQUVPO0FBQVIsR0FOUDtBQU9FQyxFQUFBQSxvQkFBb0IsRUFBRTtBQUFFUixJQUFBQSxJQUFJLEVBQUVTLE9BQVI7QUFBaUIsZUFBUztBQUExQjtBQVB4QixDQURpQixFQVVqQjtBQUFFQyxFQUFBQSxVQUFVLEVBQUU7QUFBZCxDQVZpQixDQUFuQixDLENBYUE7OztBQUNBZCxVQUFVLENBQUNlLEdBQVgsQ0FBZSxNQUFmO0FBQUEsMkZBQXVCLGlCQUFnQkMsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQixnQkFBSSxDQUFDLEtBQUtDLFVBQUwsQ0FBZ0IsVUFBaEIsQ0FBTCxFQUFrQztBQUNoQ0QsY0FBQUEsSUFBSTtBQUNMOztBQUhvQjtBQUFBLG1CQUtDRSxxQkFBT0MsSUFBUCxDQUFZLEtBQUtYLFFBQWpCLEVBQTJCLEVBQTNCLENBTEQ7O0FBQUE7QUFLckIsaUJBQUtBLFFBTGdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEssQ0FRQTs7QUFDQVIsVUFBVSxDQUFDb0IsT0FBWCxDQUFtQkMsZUFBbkI7QUFBQSw0RkFBcUMsa0JBQWdCQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDdEJKLHFCQUFPSyxPQUFQLENBQWVELGVBQWYsRUFBZ0MsS0FBS2QsUUFBckMsQ0FEc0I7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFyQzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJLENBSUE7OztBQUNBUixVQUFVLENBQUNvQixPQUFYLENBQW1CSSxXQUFuQixHQUFpQyxZQUFZO0FBQzNDLFNBQU9DLHlCQUFJQyxJQUFKLENBQVM7QUFBRUMsSUFBQUEsRUFBRSxFQUFFLEtBQUtDO0FBQVgsR0FBVCxFQUEyQkMsa0JBQU9DLFVBQWxDLEVBQThDO0FBQ25EQyxJQUFBQSxTQUFTLEVBQUVGLGtCQUFPRztBQURpQyxHQUE5QyxDQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNQyxJQUFJLEdBQUdoQyxxQkFBU2lDLEtBQVQsQ0FBZSxNQUFmLEVBQXVCbEMsVUFBdkIsQ0FBYjs7ZUFDZWlDLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWcvaW5kZXguanNcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgZmlyc3RfbmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGxhc3RfbmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGVtYWlsOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICB1c2VyX3R5cGU6IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBbXCJwYXJlbnRcIiwgXCJpbmRpdmlkdWFsXCIsIFwidHV0b3JcIl0gfSxcclxuICAgIG90cDogeyB0eXBlOiBOdW1iZXIgfSxcclxuICAgIGlzX3Byb2ZpbGVfY29tcGxldGVkOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5cclxuLy9FbmNyeXB0aW5nIFBhc3N3b3JkIEJlZm9yZSBTYXZpbmcgVXNlclxyXG51c2VyU2NoZW1hLnByZShcInNhdmVcIiwgYXN5bmMgZnVuY3Rpb24gKG5leHQpIHtcclxuICBpZiAoIXRoaXMuaXNNb2RpZmllZChcInBhc3N3b3JkXCIpKSB7XHJcbiAgICBuZXh0KCk7XHJcbiAgfVxyXG5cclxuICB0aGlzLnBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2godGhpcy5wYXNzd29yZCwgMTApO1xyXG59KTtcclxuXHJcbi8vIENvbXBhcmUgdXNlciBwYXNzd29yZFxyXG51c2VyU2NoZW1hLm1ldGhvZHMuY29tcGFyZVBhc3N3b3JkID0gYXN5bmMgZnVuY3Rpb24gKGVudGVyZWRQYXNzd29yZCkge1xyXG4gIHJldHVybiBhd2FpdCBiY3J5cHQuY29tcGFyZShlbnRlcmVkUGFzc3dvcmQsIHRoaXMucGFzc3dvcmQpO1xyXG59O1xyXG5cclxuLy8gUmV0dXJuIEpXVFxyXG51c2VyU2NoZW1hLm1ldGhvZHMuZ2V0Snd0VG9rZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKHsgaWQ6IHRoaXMuX2lkIH0sIGNvbmZpZy5KV1RfU0VDUkVULCB7XHJcbiAgICBleHBpcmVzSW46IGNvbmZpZy5KV1RfRVhQSVJFX1RJTUUsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIHVzZXJTY2hlbWEpO1xyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iXX0=