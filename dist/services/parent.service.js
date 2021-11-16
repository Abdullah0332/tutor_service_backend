"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_parent_profile_service = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

// ---------------------------------------------------------------
// ---------------- UPDATE PARENT PROFILE SERVICE -------------------
// ---------------------------------------------------------------
var update_parent_profile_service = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var _req$body, first_name, last_name, email, phone_number, location, name_on_card, card_number, exp_date, cvv, update_parent_object, update_user_object;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req === null || req === void 0 ? void 0 : req.body, first_name = _req$body.first_name, last_name = _req$body.last_name, email = _req$body.email, phone_number = _req$body.phone_number, location = _req$body.location, name_on_card = _req$body.name_on_card, card_number = _req$body.card_number, exp_date = _req$body.exp_date, cvv = _req$body.cvv;
            update_parent_object = {};
            update_user_object = {};

            if (first_name) {
              update_user_object.first_name = first_name;
            }

            if (last_name) {
              update_user_object.last_name = last_name;
            }

            if (email) {
              update_parent_object.email = email;
              update_user_object.email = email;
            }

            if (phone_number) {
              update_parent_object.phone_number = phone_number;
            }

            if (location) {
              update_parent_object.location = location;
            }

            if (name_on_card) {
              update_parent_object.payment_detail.name_on_card = name_on_card;
            }

            if (card_number) {
              update_parent_object.payment_detail.card_number = card_number;
            }

            if (exp_date) {
              update_parent_object.payment_detail.exp_date = exp_date;
            }

            if (cvv) {
              update_parent_object.payment_detail.cvv = cvv;
            }

            return _context.abrupt("return", {
              update_parent_object: update_parent_object,
              update_user_object: update_user_object
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function update_parent_profile_service(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.update_parent_profile_service = update_parent_profile_service;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9wYXJlbnQuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ1cGRhdGVfcGFyZW50X3Byb2ZpbGVfc2VydmljZSIsInJlcSIsImJvZHkiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZV9udW1iZXIiLCJsb2NhdGlvbiIsIm5hbWVfb25fY2FyZCIsImNhcmRfbnVtYmVyIiwiZXhwX2RhdGUiLCJjdnYiLCJ1cGRhdGVfcGFyZW50X29iamVjdCIsInVwZGF0ZV91c2VyX29iamVjdCIsInBheW1lbnRfZGV0YWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsNkJBQTZCO0FBQUEsMkZBQUcsaUJBQU9DLEdBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVd2Q0EsR0FYdUMsYUFXdkNBLEdBWHVDLHVCQVd2Q0EsR0FBRyxDQUFFQyxJQVhrQyxFQUV6Q0MsVUFGeUMsYUFFekNBLFVBRnlDLEVBR3pDQyxTQUh5QyxhQUd6Q0EsU0FIeUMsRUFJekNDLEtBSnlDLGFBSXpDQSxLQUp5QyxFQUt6Q0MsWUFMeUMsYUFLekNBLFlBTHlDLEVBTXpDQyxRQU55QyxhQU16Q0EsUUFOeUMsRUFPekNDLFlBUHlDLGFBT3pDQSxZQVB5QyxFQVF6Q0MsV0FSeUMsYUFRekNBLFdBUnlDLEVBU3pDQyxRQVR5QyxhQVN6Q0EsUUFUeUMsRUFVekNDLEdBVnlDLGFBVXpDQSxHQVZ5QztBQWFyQ0MsWUFBQUEsb0JBYnFDLEdBYWQsRUFiYztBQWNyQ0MsWUFBQUEsa0JBZHFDLEdBY2hCLEVBZGdCOztBQWdCM0MsZ0JBQUlWLFVBQUosRUFBZ0I7QUFDZFUsY0FBQUEsa0JBQWtCLENBQUNWLFVBQW5CLEdBQWdDQSxVQUFoQztBQUNEOztBQUNELGdCQUFJQyxTQUFKLEVBQWU7QUFDYlMsY0FBQUEsa0JBQWtCLENBQUNULFNBQW5CLEdBQStCQSxTQUEvQjtBQUNEOztBQUNELGdCQUFJQyxLQUFKLEVBQVc7QUFDVE8sY0FBQUEsb0JBQW9CLENBQUNQLEtBQXJCLEdBQTZCQSxLQUE3QjtBQUNBUSxjQUFBQSxrQkFBa0IsQ0FBQ1IsS0FBbkIsR0FBMkJBLEtBQTNCO0FBQ0Q7O0FBQ0QsZ0JBQUlDLFlBQUosRUFBa0I7QUFDaEJNLGNBQUFBLG9CQUFvQixDQUFDTixZQUFyQixHQUFvQ0EsWUFBcEM7QUFDRDs7QUFDRCxnQkFBSUMsUUFBSixFQUFjO0FBQ1pLLGNBQUFBLG9CQUFvQixDQUFDTCxRQUFyQixHQUFnQ0EsUUFBaEM7QUFDRDs7QUFDRCxnQkFBSUMsWUFBSixFQUFrQjtBQUNoQkksY0FBQUEsb0JBQW9CLENBQUNFLGNBQXJCLENBQW9DTixZQUFwQyxHQUFtREEsWUFBbkQ7QUFDRDs7QUFDRCxnQkFBSUMsV0FBSixFQUFpQjtBQUNmRyxjQUFBQSxvQkFBb0IsQ0FBQ0UsY0FBckIsQ0FBb0NMLFdBQXBDLEdBQWtEQSxXQUFsRDtBQUNEOztBQUNELGdCQUFJQyxRQUFKLEVBQWM7QUFDWkUsY0FBQUEsb0JBQW9CLENBQUNFLGNBQXJCLENBQW9DSixRQUFwQyxHQUErQ0EsUUFBL0M7QUFDRDs7QUFDRCxnQkFBSUMsR0FBSixFQUFTO0FBQ1BDLGNBQUFBLG9CQUFvQixDQUFDRSxjQUFyQixDQUFvQ0gsR0FBcEMsR0FBMENBLEdBQTFDO0FBQ0Q7O0FBM0MwQyw2Q0E2Q3BDO0FBQ0xDLGNBQUFBLG9CQUFvQixFQUFwQkEsb0JBREs7QUFFTEMsY0FBQUEsa0JBQWtCLEVBQWxCQTtBQUZLLGFBN0NvQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUE3QmIsNkJBQTZCO0FBQUE7QUFBQTtBQUFBLEdBQW5DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tIFVQREFURSBQQVJFTlQgUFJPRklMRSBTRVJWSUNFIC0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IHVwZGF0ZV9wYXJlbnRfcHJvZmlsZV9zZXJ2aWNlID0gYXN5bmMgKHJlcSkgPT4ge1xuICBjb25zdCB7XG4gICAgZmlyc3RfbmFtZSxcbiAgICBsYXN0X25hbWUsXG4gICAgZW1haWwsXG4gICAgcGhvbmVfbnVtYmVyLFxuICAgIGxvY2F0aW9uLFxuICAgIG5hbWVfb25fY2FyZCxcbiAgICBjYXJkX251bWJlcixcbiAgICBleHBfZGF0ZSxcbiAgICBjdnYsXG4gIH0gPSByZXE/LmJvZHk7XG5cbiAgY29uc3QgdXBkYXRlX3BhcmVudF9vYmplY3QgPSB7fTtcbiAgY29uc3QgdXBkYXRlX3VzZXJfb2JqZWN0ID0ge307XG5cbiAgaWYgKGZpcnN0X25hbWUpIHtcbiAgICB1cGRhdGVfdXNlcl9vYmplY3QuZmlyc3RfbmFtZSA9IGZpcnN0X25hbWU7XG4gIH1cbiAgaWYgKGxhc3RfbmFtZSkge1xuICAgIHVwZGF0ZV91c2VyX29iamVjdC5sYXN0X25hbWUgPSBsYXN0X25hbWU7XG4gIH1cbiAgaWYgKGVtYWlsKSB7XG4gICAgdXBkYXRlX3BhcmVudF9vYmplY3QuZW1haWwgPSBlbWFpbDtcbiAgICB1cGRhdGVfdXNlcl9vYmplY3QuZW1haWwgPSBlbWFpbDtcbiAgfVxuICBpZiAocGhvbmVfbnVtYmVyKSB7XG4gICAgdXBkYXRlX3BhcmVudF9vYmplY3QucGhvbmVfbnVtYmVyID0gcGhvbmVfbnVtYmVyO1xuICB9XG4gIGlmIChsb2NhdGlvbikge1xuICAgIHVwZGF0ZV9wYXJlbnRfb2JqZWN0LmxvY2F0aW9uID0gbG9jYXRpb247XG4gIH1cbiAgaWYgKG5hbWVfb25fY2FyZCkge1xuICAgIHVwZGF0ZV9wYXJlbnRfb2JqZWN0LnBheW1lbnRfZGV0YWlsLm5hbWVfb25fY2FyZCA9IG5hbWVfb25fY2FyZDtcbiAgfVxuICBpZiAoY2FyZF9udW1iZXIpIHtcbiAgICB1cGRhdGVfcGFyZW50X29iamVjdC5wYXltZW50X2RldGFpbC5jYXJkX251bWJlciA9IGNhcmRfbnVtYmVyO1xuICB9XG4gIGlmIChleHBfZGF0ZSkge1xuICAgIHVwZGF0ZV9wYXJlbnRfb2JqZWN0LnBheW1lbnRfZGV0YWlsLmV4cF9kYXRlID0gZXhwX2RhdGU7XG4gIH1cbiAgaWYgKGN2dikge1xuICAgIHVwZGF0ZV9wYXJlbnRfb2JqZWN0LnBheW1lbnRfZGV0YWlsLmN2diA9IGN2djtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlX3BhcmVudF9vYmplY3QsXG4gICAgdXBkYXRlX3VzZXJfb2JqZWN0LFxuICB9O1xufTtcbiJdfQ==