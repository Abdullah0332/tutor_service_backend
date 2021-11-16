"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _index = _interopRequireDefault(require("../../config/index"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _ejs = _interopRequireDefault(require("ejs"));

var _nodemailerSendgridTransport = _interopRequireDefault(require("nodemailer-sendgrid-transport"));

var transporter = _nodemailer["default"].createTransport((0, _nodemailerSendgridTransport["default"])({
  auth: {
    api_key: "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"
  }
}));

var forgot_password_email = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(options) {
    var emailTemplate, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _ejs["default"].renderFile(__dirname + "/email_templates/forgot_password.ejs", {
              name: options.name,
              OTP: options.otp
            });

          case 2:
            emailTemplate = _context.sent;
            data = {
              to: options.email,
              from: "".concat(_index["default"].SENDING_EMAIL, " Tutor Service"),
              subject: options.subject,
              html: emailTemplate
            };
            _context.next = 6;
            return transporter.sendMail(data);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function forgot_password_email(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  forgot_password_email: forgot_password_email
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWJyYXJpZXMvZW1haWxzL2VtYWlsLnNlbmRlci5qcyJdLCJuYW1lcyI6WyJ0cmFuc3BvcnRlciIsIm5vZGVtYWlsZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJhdXRoIiwiYXBpX2tleSIsImZvcmdvdF9wYXNzd29yZF9lbWFpbCIsIm9wdGlvbnMiLCJlanMiLCJyZW5kZXJGaWxlIiwiX19kaXJuYW1lIiwibmFtZSIsIk9UUCIsIm90cCIsImVtYWlsVGVtcGxhdGUiLCJkYXRhIiwidG8iLCJlbWFpbCIsImZyb20iLCJjb25maWciLCJTRU5ESU5HX0VNQUlMIiwic3ViamVjdCIsImh0bWwiLCJzZW5kTWFpbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHQyx1QkFBV0MsZUFBWCxDQUNsQiw2Q0FBa0I7QUFDaEJDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxPQUFPLEVBQ0w7QUFGRTtBQURVLENBQWxCLENBRGtCLENBQXBCOztBQVNBLElBQU1DLHFCQUFxQjtBQUFBLDJGQUFHLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0FDLGdCQUFJQyxVQUFKLENBQzFCQyxTQUFTLEdBQUcsc0NBRGMsRUFFMUI7QUFBRUMsY0FBQUEsSUFBSSxFQUFFSixPQUFPLENBQUNJLElBQWhCO0FBQXNCQyxjQUFBQSxHQUFHLEVBQUVMLE9BQU8sQ0FBQ007QUFBbkMsYUFGMEIsQ0FEQTs7QUFBQTtBQUN0QkMsWUFBQUEsYUFEc0I7QUFNdEJDLFlBQUFBLElBTnNCLEdBTWY7QUFDWEMsY0FBQUEsRUFBRSxFQUFFVCxPQUFPLENBQUNVLEtBREQ7QUFFWEMsY0FBQUEsSUFBSSxZQUFLQyxrQkFBT0MsYUFBWixtQkFGTztBQUdYQyxjQUFBQSxPQUFPLEVBQUVkLE9BQU8sQ0FBQ2MsT0FITjtBQUlYQyxjQUFBQSxJQUFJLEVBQUVSO0FBSkssYUFOZTtBQUFBO0FBQUEsbUJBYXRCYixXQUFXLENBQUNzQixRQUFaLENBQXFCUixJQUFyQixDQWJzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFyQlQscUJBQXFCO0FBQUE7QUFBQTtBQUFBLEdBQTNCOztBQWdCQWtCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmbkIsRUFBQUEscUJBQXFCLEVBQXJCQTtBQURlLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2luZGV4XCI7XG5pbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xuaW1wb3J0IGVqcyBmcm9tIFwiZWpzXCI7XG5pbXBvcnQgc2VuZGdyaWRUcmFuc3BvcnQgZnJvbSBcIm5vZGVtYWlsZXItc2VuZGdyaWQtdHJhbnNwb3J0XCI7XG5cbmNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoXG4gIHNlbmRncmlkVHJhbnNwb3J0KHtcbiAgICBhdXRoOiB7XG4gICAgICBhcGlfa2V5OlxuICAgICAgICBcIlNHLkQxUFVaSU5OUTBDTkpFYXB3Q1ZNamcudUgxSVhzaVBJUzlZNGhwdl8zdWJZTzdQNTRDbG5ndUFKYklnUHFTbWtwd1wiLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBmb3Jnb3RfcGFzc3dvcmRfZW1haWwgPSBhc3luYyAob3B0aW9ucykgPT4ge1xuICBjb25zdCBlbWFpbFRlbXBsYXRlID0gYXdhaXQgZWpzLnJlbmRlckZpbGUoXG4gICAgX19kaXJuYW1lICsgXCIvZW1haWxfdGVtcGxhdGVzL2ZvcmdvdF9wYXNzd29yZC5lanNcIixcbiAgICB7IG5hbWU6IG9wdGlvbnMubmFtZSwgT1RQOiBvcHRpb25zLm90cCB9XG4gICk7XG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICB0bzogb3B0aW9ucy5lbWFpbCxcbiAgICBmcm9tOiBgJHtjb25maWcuU0VORElOR19FTUFJTH0gVHV0b3IgU2VydmljZWAsXG4gICAgc3ViamVjdDogb3B0aW9ucy5zdWJqZWN0LFxuICAgIGh0bWw6IGVtYWlsVGVtcGxhdGUsXG4gIH07XG5cbiAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwoZGF0YSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZm9yZ290X3Bhc3N3b3JkX2VtYWlsLFxufTtcbiJdfQ==