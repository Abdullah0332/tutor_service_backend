"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_tutor_profile_service = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

// ---------------------------------------------------------------
// ---------------- UPDATE TUTOR PROFILE SERVICE -------------------
// ---------------------------------------------------------------
var update_tutor_profile_service = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var _req$body, first_name, last_name, email, phone_number, location, intro, about_you, education, experience, teach_language, teach_type, main_field, you_teach, level_you_teach, student_age_you_teach, class_type, pricing, bank_info, update_tutor_object, update_user_object, images_path;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req === null || req === void 0 ? void 0 : req.body, first_name = _req$body.first_name, last_name = _req$body.last_name, email = _req$body.email, phone_number = _req$body.phone_number, location = _req$body.location, intro = _req$body.intro, about_you = _req$body.about_you, education = _req$body.education, experience = _req$body.experience, teach_language = _req$body.teach_language, teach_type = _req$body.teach_type, main_field = _req$body.main_field, you_teach = _req$body.you_teach, level_you_teach = _req$body.level_you_teach, student_age_you_teach = _req$body.student_age_you_teach, class_type = _req$body.class_type, pricing = _req$body.pricing, bank_info = _req$body.bank_info;
            update_tutor_object = {};
            update_user_object = {};

            if (first_name) {
              update_user_object.first_name = first_name;
            }

            if (last_name) {
              update_user_object.last_name = last_name;
            }

            if (email) {
              update_tutor_object.email = email;
              update_user_object.email = email;
            }

            if (phone_number) {
              update_tutor_object.phone_number = phone_number;
            }

            if (location) {
              update_tutor_object.location = location;
            }

            if (intro) {
              update_tutor_object.intro = intro;
            }

            if (about_you) {
              update_tutor_object.about_you = about_you;
            }

            if (education) {
              update_tutor_object.education = education;
            }

            if (experience) {
              update_tutor_object.experience = experience;
            }

            if (teach_language) {
              update_tutor_object.teach_language = teach_language;
            }

            if (teach_type) {
              update_tutor_object.teach_type = teach_type;
            }

            if (main_field) {
              update_tutor_object.main_field = main_field;
            }

            if (you_teach) {
              update_tutor_object.you_teach = you_teach;
            }

            if (level_you_teach) {
              update_tutor_object.level_you_teach = level_you_teach;
            }

            if (student_age_you_teach) {
              update_tutor_object.student_age_you_teach = student_age_you_teach;
            }

            if (class_type) {
              update_tutor_object.class_type = class_type;
            }

            if (pricing) {
              update_tutor_object.pricing = pricing;
            }

            if (bank_info) {
              update_tutor_object.bank_info = bank_info;
            }

            if (req !== null && req !== void 0 && req.files) {
              images_path = req.files.map(function (_ref2) {
                var path = _ref2.path;
                return path;
              });
              update_tutor_object.gallery = images_path;
            }

            return _context.abrupt("return", {
              update_tutor_object: update_tutor_object,
              update_user_object: update_user_object
            });

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function update_tutor_profile_service(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.update_tutor_profile_service = update_tutor_profile_service;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy90dXRvci5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInVwZGF0ZV90dXRvcl9wcm9maWxlX3NlcnZpY2UiLCJyZXEiLCJib2R5IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGhvbmVfbnVtYmVyIiwibG9jYXRpb24iLCJpbnRybyIsImFib3V0X3lvdSIsImVkdWNhdGlvbiIsImV4cGVyaWVuY2UiLCJ0ZWFjaF9sYW5ndWFnZSIsInRlYWNoX3R5cGUiLCJtYWluX2ZpZWxkIiwieW91X3RlYWNoIiwibGV2ZWxfeW91X3RlYWNoIiwic3R1ZGVudF9hZ2VfeW91X3RlYWNoIiwiY2xhc3NfdHlwZSIsInByaWNpbmciLCJiYW5rX2luZm8iLCJ1cGRhdGVfdHV0b3Jfb2JqZWN0IiwidXBkYXRlX3VzZXJfb2JqZWN0IiwiZmlsZXMiLCJpbWFnZXNfcGF0aCIsIm1hcCIsInBhdGgiLCJnYWxsZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsNEJBQTRCO0FBQUEsMkZBQUcsaUJBQU9DLEdBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQW9CdENBLEdBcEJzQyxhQW9CdENBLEdBcEJzQyx1QkFvQnRDQSxHQUFHLENBQUVDLElBcEJpQyxFQUV4Q0MsVUFGd0MsYUFFeENBLFVBRndDLEVBR3hDQyxTQUh3QyxhQUd4Q0EsU0FId0MsRUFJeENDLEtBSndDLGFBSXhDQSxLQUp3QyxFQUt4Q0MsWUFMd0MsYUFLeENBLFlBTHdDLEVBTXhDQyxRQU53QyxhQU14Q0EsUUFOd0MsRUFPeENDLEtBUHdDLGFBT3hDQSxLQVB3QyxFQVF4Q0MsU0FSd0MsYUFReENBLFNBUndDLEVBU3hDQyxTQVR3QyxhQVN4Q0EsU0FUd0MsRUFVeENDLFVBVndDLGFBVXhDQSxVQVZ3QyxFQVd4Q0MsY0FYd0MsYUFXeENBLGNBWHdDLEVBWXhDQyxVQVp3QyxhQVl4Q0EsVUFad0MsRUFh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QWQsQ0FESjtBQUVkTCxjQUFBQSxtQkFBbUIsQ0FBQ00sT0FBcEIsR0FBOEJILFdBQTlCO0FBQ0Q7O0FBckZ5Qyw2Q0F1Rm5DO0FBQ0xILGNBQUFBLG1CQUFtQixFQUFuQkEsbUJBREs7QUFFTEMsY0FBQUEsa0JBQWtCLEVBQWxCQTtBQUZLLGFBdkZtQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUE1QnRCLDRCQUE0QjtBQUFBO0FBQUE7QUFBQSxHQUFsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLSBVUERBVEUgVFVUT1IgUFJPRklMRSBTRVJWSUNFIC0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IHVwZGF0ZV90dXRvcl9wcm9maWxlX3NlcnZpY2UgPSBhc3luYyAocmVxKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaXJzdF9uYW1lLFxuICAgIGxhc3RfbmFtZSxcbiAgICBlbWFpbCxcbiAgICBwaG9uZV9udW1iZXIsXG4gICAgbG9jYXRpb24sXG4gICAgaW50cm8sXG4gICAgYWJvdXRfeW91LFxuICAgIGVkdWNhdGlvbixcbiAgICBleHBlcmllbmNlLFxuICAgIHRlYWNoX2xhbmd1YWdlLFxuICAgIHRlYWNoX3R5cGUsXG4gICAgbWFpbl9maWVsZCxcbiAgICB5b3VfdGVhY2gsXG4gICAgbGV2ZWxfeW91X3RlYWNoLFxuICAgIHN0dWRlbnRfYWdlX3lvdV90ZWFjaCxcbiAgICBjbGFzc190eXBlLFxuICAgIHByaWNpbmcsXG4gICAgYmFua19pbmZvLFxuICB9ID0gcmVxPy5ib2R5O1xuXG4gIGNvbnN0IHVwZGF0ZV90dXRvcl9vYmplY3QgPSB7fTtcbiAgY29uc3QgdXBkYXRlX3VzZXJfb2JqZWN0ID0ge307XG5cbiAgaWYgKGZpcnN0X25hbWUpIHtcbiAgICB1cGRhdGVfdXNlcl9vYmplY3QuZmlyc3RfbmFtZSA9IGZpcnN0X25hbWU7XG4gIH1cbiAgaWYgKGxhc3RfbmFtZSkge1xuICAgIHVwZGF0ZV91c2VyX29iamVjdC5sYXN0X25hbWUgPSBsYXN0X25hbWU7XG4gIH1cbiAgaWYgKGVtYWlsKSB7XG4gICAgdXBkYXRlX3R1dG9yX29iamVjdC5lbWFpbCA9IGVtYWlsO1xuICAgIHVwZGF0ZV91c2VyX29iamVjdC5lbWFpbCA9IGVtYWlsO1xuICB9XG4gIGlmIChwaG9uZV9udW1iZXIpIHtcbiAgICB1cGRhdGVfdHV0b3Jfb2JqZWN0LnBob25lX251bWJlciA9IHBob25lX251bWJlcjtcbiAgfVxuICBpZiAobG9jYXRpb24pIHtcbiAgICB1cGRhdGVfdHV0b3Jfb2JqZWN0LmxvY2F0aW9uID0gbG9jYXRpb247XG4gIH1cbiAgaWYgKGludHJvKSB7XG4gICAgdXBkYXRlX3R1dG9yX29iamVjdC5pbnRybyA9IGludHJvO1xuICB9XG4gIGlmIChhYm91dF95b3UpIHtcbiAgICB1cGRhdGVfdHV0b3Jfb2JqZWN0LmFib3V0X3lvdSA9IGFib3V0X3lvdTtcbiAgfVxuICBpZiAoZWR1Y2F0aW9uKSB7XG4gICAgdXBkYXRlX3R1dG9yX29iamVjdC5lZHVjYXRpb24gPSBlZHVjYXRpb247XG4gIH1cbiAgaWYgKGV4cGVyaWVuY2UpIHtcbiAgICB1cGRhdGVfdHV0b3Jfb2JqZWN0LmV4cGVyaWVuY2UgPSBleHBlcmllbmNlO1xuICB9XG5cbiAgaWYgKHRlYWNoX2xhbmd1YWdlKSB7XG4gICAgdXBkYXRlX3R1dG9yX29iamVjdC50ZWFjaF9sYW5ndWFnZSA9IHRlYWNoX2xhbmd1YWdlO1xuICB9XG4gIGlmICh0ZWFjaF90eXBlKSB7XG4gICAgdXBkYXRlX3R1dG9yX29iamVjdC50ZWFjaF90eXBlID0gdGVhY2hfdHlwZTtcbiAgfVxuICBpZiAobWFpbl9maWVsZCkge1xuICAgIHVwZGF0ZV90dXRvcl9vYmplY3QubWFpbl9maWVsZCA9IG1haW5fZmllbGQ7XG4gIH1cbiAgaWYgKHlvdV90ZWFjaCkge1xuICAgIHVwZGF0ZV90dXRvcl9vYmplY3QueW91X3RlYWNoID0geW91X3RlYWNoO1xuICB9XG5cbiAgaWYgKGxldmVsX3lvdV90ZWFjaCkge1xuICAgIHVwZGF0ZV90dXRvcl9vYmplY3QubGV2ZWxfeW91X3RlYWNoID0gbGV2ZWxfeW91X3RlYWNoO1xuICB9XG4gIGlmIChzdHVkZW50X2FnZV95b3VfdGVhY2gpIHtcbiAgICB1cGRhdGVfdHV0b3Jfb2JqZWN0LnN0dWRlbnRfYWdlX3lvdV90ZWFjaCA9IHN0dWRlbnRfYWdlX3lvdV90ZWFjaDtcbiAgfVxuICBpZiAoY2xhc3NfdHlwZSkge1xuICAgIHVwZGF0ZV90dXRvcl9vYmplY3QuY2xhc3NfdHlwZSA9IGNsYXNzX3R5cGU7XG4gIH1cbiAgaWYgKHByaWNpbmcpIHtcbiAgICB1cGRhdGVfdHV0b3Jfb2JqZWN0LnByaWNpbmcgPSBwcmljaW5nO1xuICB9XG4gIGlmIChiYW5rX2luZm8pIHtcbiAgICB1cGRhdGVfdHV0b3Jfb2JqZWN0LmJhbmtfaW5mbyA9IGJhbmtfaW5mbztcbiAgfVxuICBpZiAocmVxPy5maWxlcykge1xuICAgIGxldCBpbWFnZXNfcGF0aCA9IHJlcS5maWxlcy5tYXAoKHsgcGF0aCB9KSA9PiBwYXRoKTtcbiAgICB1cGRhdGVfdHV0b3Jfb2JqZWN0LmdhbGxlcnkgPSBpbWFnZXNfcGF0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlX3R1dG9yX29iamVjdCxcbiAgICB1cGRhdGVfdXNlcl9vYmplY3QsXG4gIH07XG59O1xuIl19