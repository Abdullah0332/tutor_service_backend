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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWJyYXJpZXMvZW1haWxzL2VtYWlsLnNlbmRlci5qcyJdLCJuYW1lcyI6WyJ0cmFuc3BvcnRlciIsIm5vZGVtYWlsZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJhdXRoIiwiYXBpX2tleSIsImZvcmdvdF9wYXNzd29yZF9lbWFpbCIsIm9wdGlvbnMiLCJlanMiLCJyZW5kZXJGaWxlIiwiX19kaXJuYW1lIiwibmFtZSIsIk9UUCIsIm90cCIsImVtYWlsVGVtcGxhdGUiLCJkYXRhIiwidG8iLCJlbWFpbCIsImZyb20iLCJjb25maWciLCJTRU5ESU5HX0VNQUlMIiwic3ViamVjdCIsImh0bWwiLCJzZW5kTWFpbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHQyx1QkFBV0MsZUFBWCxDQUNsQiw2Q0FBa0I7QUFDaEJDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxPQUFPLEVBQ0w7QUFGRTtBQURVLENBQWxCLENBRGtCLENBQXBCOztBQVNBLElBQU1DLHFCQUFxQjtBQUFBLDJGQUFHLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0FDLGdCQUFJQyxVQUFKLENBQzFCQyxTQUFTLEdBQUcsc0NBRGMsRUFFMUI7QUFBRUMsY0FBQUEsSUFBSSxFQUFFSixPQUFPLENBQUNJLElBQWhCO0FBQXNCQyxjQUFBQSxHQUFHLEVBQUVMLE9BQU8sQ0FBQ007QUFBbkMsYUFGMEIsQ0FEQTs7QUFBQTtBQUN0QkMsWUFBQUEsYUFEc0I7QUFNdEJDLFlBQUFBLElBTnNCLEdBTWY7QUFDWEMsY0FBQUEsRUFBRSxFQUFFVCxPQUFPLENBQUNVLEtBREQ7QUFFWEMsY0FBQUEsSUFBSSxZQUFLQyxrQkFBT0MsYUFBWixtQkFGTztBQUdYQyxjQUFBQSxPQUFPLEVBQUVkLE9BQU8sQ0FBQ2MsT0FITjtBQUlYQyxjQUFBQSxJQUFJLEVBQUVSO0FBSkssYUFOZTtBQUFBO0FBQUEsbUJBYXRCYixXQUFXLENBQUNzQixRQUFaLENBQXFCUixJQUFyQixDQWJzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFyQlQscUJBQXFCO0FBQUE7QUFBQTtBQUFBLEdBQTNCOztBQWdCQWtCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmbkIsRUFBQUEscUJBQXFCLEVBQXJCQTtBQURlLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2luZGV4XCI7XHJcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gXCJub2RlbWFpbGVyXCI7XHJcbmltcG9ydCBlanMgZnJvbSBcImVqc1wiO1xyXG5pbXBvcnQgc2VuZGdyaWRUcmFuc3BvcnQgZnJvbSBcIm5vZGVtYWlsZXItc2VuZGdyaWQtdHJhbnNwb3J0XCI7XHJcblxyXG5jb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KFxyXG4gIHNlbmRncmlkVHJhbnNwb3J0KHtcclxuICAgIGF1dGg6IHtcclxuICAgICAgYXBpX2tleTpcclxuICAgICAgICBcIlNHLkQxUFVaSU5OUTBDTkpFYXB3Q1ZNamcudUgxSVhzaVBJUzlZNGhwdl8zdWJZTzdQNTRDbG5ndUFKYklnUHFTbWtwd1wiLFxyXG4gICAgfSxcclxuICB9KVxyXG4pO1xyXG5cclxuY29uc3QgZm9yZ290X3Bhc3N3b3JkX2VtYWlsID0gYXN5bmMgKG9wdGlvbnMpID0+IHtcclxuICBjb25zdCBlbWFpbFRlbXBsYXRlID0gYXdhaXQgZWpzLnJlbmRlckZpbGUoXHJcbiAgICBfX2Rpcm5hbWUgKyBcIi9lbWFpbF90ZW1wbGF0ZXMvZm9yZ290X3Bhc3N3b3JkLmVqc1wiLFxyXG4gICAgeyBuYW1lOiBvcHRpb25zLm5hbWUsIE9UUDogb3B0aW9ucy5vdHAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICB0bzogb3B0aW9ucy5lbWFpbCxcclxuICAgIGZyb206IGAke2NvbmZpZy5TRU5ESU5HX0VNQUlMfSBUdXRvciBTZXJ2aWNlYCxcclxuICAgIHN1YmplY3Q6IG9wdGlvbnMuc3ViamVjdCxcclxuICAgIGh0bWw6IGVtYWlsVGVtcGxhdGUsXHJcbiAgfTtcclxuXHJcbiAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwoZGF0YSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBmb3Jnb3RfcGFzc3dvcmRfZW1haWwsXHJcbn07XHJcbiJdfQ==