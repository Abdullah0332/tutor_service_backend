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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJ1c2VyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJmaXJzdF9uYW1lIiwidHlwZSIsIlN0cmluZyIsImxhc3RfbmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyX3R5cGUiLCJvdHAiLCJOdW1iZXIiLCJpc19wcm9maWxlX2NvbXBsZXRlZCIsIkJvb2xlYW4iLCJyZWdpc3Rlcl90eXBlIiwic29jaWFsSWQiLCJhY3RpdmUiLCJ0aW1lc3RhbXBzIiwicHJlIiwibmV4dCIsImlzTW9kaWZpZWQiLCJiY3J5cHQiLCJoYXNoIiwibWV0aG9kcyIsImNvbXBhcmVQYXNzd29yZCIsImVudGVyZWRQYXNzd29yZCIsImNvbXBhcmUiLCJnZXRKd3RUb2tlbiIsImp3dCIsInNpZ24iLCJpZCIsIl9pZCIsImNvbmZpZyIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJKV1RfRVhQSVJFX1RJTUUiLCJVc2VyIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHFCQUFTQyxNQUFULENBQ2pCO0FBQ0VDLEVBQUFBLFVBQVUsRUFBRTtBQUFFQyxJQUFBQSxJQUFJLEVBQUVDO0FBQVIsR0FEZDtBQUVFQyxFQUFBQSxTQUFTLEVBQUU7QUFBRUYsSUFBQUEsSUFBSSxFQUFFQztBQUFSLEdBRmI7QUFHRUUsRUFBQUEsS0FBSyxFQUFFO0FBQUVILElBQUFBLElBQUksRUFBRUM7QUFBUixHQUhUO0FBSUVHLEVBQUFBLFFBQVEsRUFBRTtBQUFFSixJQUFBQSxJQUFJLEVBQUVDO0FBQVIsR0FKWjtBQUtFSSxFQUFBQSxTQUFTLEVBQUU7QUFBRUwsSUFBQUEsSUFBSSxFQUFFQyxNQUFSO0FBQWdCLFlBQU0sQ0FBQyxRQUFELEVBQVcsWUFBWCxFQUF5QixPQUF6QjtBQUF0QixHQUxiO0FBTUVLLEVBQUFBLEdBQUcsRUFBRTtBQUFFTixJQUFBQSxJQUFJLEVBQUVPO0FBQVIsR0FOUDtBQU9FQyxFQUFBQSxvQkFBb0IsRUFBRTtBQUFFUixJQUFBQSxJQUFJLEVBQUVTLE9BQVI7QUFBaUIsZUFBUztBQUExQixHQVB4QjtBQVFFQyxFQUFBQSxhQUFhLEVBQUU7QUFDYlYsSUFBQUEsSUFBSSxFQUFFQyxNQURPO0FBRWIsWUFBTSxDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLFVBQXBCLENBRk87QUFHYixlQUFTO0FBSEksR0FSakI7QUFhRVUsRUFBQUEsUUFBUSxFQUFFO0FBQUVYLElBQUFBLElBQUksRUFBRUM7QUFBUixHQWJaO0FBY0VXLEVBQUFBLE1BQU0sRUFBRTtBQUFFWixJQUFBQSxJQUFJLEVBQUVTLE9BQVI7QUFBaUIsZUFBUztBQUExQjtBQWRWLENBRGlCLEVBaUJqQjtBQUFFSSxFQUFBQSxVQUFVLEVBQUU7QUFBZCxDQWpCaUIsQ0FBbkIsQyxDQW9CQTs7O0FBQ0FqQixVQUFVLENBQUNrQixHQUFYLENBQWUsTUFBZjtBQUFBLDJGQUF1QixpQkFBZ0JDLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckIsZ0JBQUksQ0FBQyxLQUFLQyxVQUFMLENBQWdCLFVBQWhCLENBQUwsRUFBa0M7QUFDaENELGNBQUFBLElBQUk7QUFDTDs7QUFIb0I7QUFBQSxtQkFLQ0UscUJBQU9DLElBQVAsQ0FBWSxLQUFLZCxRQUFqQixFQUEyQixFQUEzQixDQUxEOztBQUFBO0FBS3JCLGlCQUFLQSxRQUxnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxLLENBUUE7O0FBQ0FSLFVBQVUsQ0FBQ3VCLE9BQVgsQ0FBbUJDLGVBQW5CO0FBQUEsNEZBQXFDLGtCQUFnQkMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3RCSixxQkFBT0ssT0FBUCxDQUFlRCxlQUFmLEVBQWdDLEtBQUtqQixRQUFyQyxDQURzQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXJDOztBQUFBO0FBQUE7QUFBQTtBQUFBLEksQ0FJQTs7O0FBQ0FSLFVBQVUsQ0FBQ3VCLE9BQVgsQ0FBbUJJLFdBQW5CLEdBQWlDLFlBQVk7QUFDM0MsU0FBT0MseUJBQUlDLElBQUosQ0FBUztBQUFFQyxJQUFBQSxFQUFFLEVBQUUsS0FBS0M7QUFBWCxHQUFULEVBQTJCQyxrQkFBT0MsVUFBbEMsRUFBOEM7QUFDbkRDLElBQUFBLFNBQVMsRUFBRUYsa0JBQU9HO0FBRGlDLEdBQTlDLENBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1DLElBQUksR0FBR25DLHFCQUFTb0MsS0FBVCxDQUFlLE1BQWYsRUFBdUJyQyxVQUF2QixDQUFiOztlQUNlb0MsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBmaXJzdF9uYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgbGFzdF9uYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIHVzZXJfdHlwZTogeyB0eXBlOiBTdHJpbmcsIGVudW06IFtcInBhcmVudFwiLCBcImluZGl2aWR1YWxcIiwgXCJ0dXRvclwiXSB9LFxyXG4gICAgb3RwOiB7IHR5cGU6IE51bWJlciB9LFxyXG4gICAgaXNfcHJvZmlsZV9jb21wbGV0ZWQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuICAgIHJlZ2lzdGVyX3R5cGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBlbnVtOiBbXCJsb2NhbFwiLCBcImdvb2dsZVwiLCBcImZhY2Vib29rXCJdLFxyXG4gICAgICBkZWZhdWx0OiBcImxvY2FsXCIsXHJcbiAgICB9LFxyXG4gICAgc29jaWFsSWQ6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBhY3RpdmU6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbi8vRW5jcnlwdGluZyBQYXNzd29yZCBCZWZvcmUgU2F2aW5nIFVzZXJcclxudXNlclNjaGVtYS5wcmUoXCJzYXZlXCIsIGFzeW5jIGZ1bmN0aW9uIChuZXh0KSB7XHJcbiAgaWYgKCF0aGlzLmlzTW9kaWZpZWQoXCJwYXNzd29yZFwiKSkge1xyXG4gICAgbmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIDEwKTtcclxufSk7XHJcblxyXG4vLyBDb21wYXJlIHVzZXIgcGFzc3dvcmRcclxudXNlclNjaGVtYS5tZXRob2RzLmNvbXBhcmVQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uIChlbnRlcmVkUGFzc3dvcmQpIHtcclxuICByZXR1cm4gYXdhaXQgYmNyeXB0LmNvbXBhcmUoZW50ZXJlZFBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkKTtcclxufTtcclxuXHJcbi8vIFJldHVybiBKV1RcclxudXNlclNjaGVtYS5tZXRob2RzLmdldEp3dFRva2VuID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBqd3Quc2lnbih7IGlkOiB0aGlzLl9pZCB9LCBjb25maWcuSldUX1NFQ1JFVCwge1xyXG4gICAgZXhwaXJlc0luOiBjb25maWcuSldUX0VYUElSRV9USU1FLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCB1c2VyU2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIl19