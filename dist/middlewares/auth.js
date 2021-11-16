"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _index = _interopRequireDefault(require("../config/index.js"));

var _userModel = _interopRequireDefault(require("../models/user.model.js"));

// Check it the user is authenticated or not
var auth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$headers, _req$headers$authoriz, token, decoded, user;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers["x-access-token"] || (req === null || req === void 0 ? void 0 : (_req$headers = req.headers) === null || _req$headers === void 0 ? void 0 : (_req$headers$authoriz = _req$headers.authorization) === null || _req$headers$authoriz === void 0 ? void 0 : _req$headers$authoriz.split(" ")[1]);

            if (!(!token || token === "null")) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              message: "Login first to access the resource."
            }));

          case 4:
            decoded = _jsonwebtoken["default"] === null || _jsonwebtoken["default"] === void 0 ? void 0 : _jsonwebtoken["default"].verify(token, _index["default"].JWT_SECRET);
            _context.next = 7;
            return _userModel["default"].findOne({
              _id: decoded.id
            });

          case 7:
            user = _context.sent;

            if (user) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              message: "Token expired, please generate new one"
            }));

          case 10:
            _context.next = 12;
            return _userModel["default"].findById(decoded.id);

          case 12:
            req.user = _context.sent;
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(401).json({
              message: "There is a problem with your token, please login again",
              error: _context.t0
            }));

          case 18:
            next();

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));

  return function auth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.auth = auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9hdXRoLmpzIl0sIm5hbWVzIjpbImF1dGgiLCJyZXEiLCJyZXMiLCJuZXh0IiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInNwbGl0Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJkZWNvZGVkIiwiand0IiwidmVyaWZ5IiwiY29uZmlnIiwiSldUX1NFQ1JFVCIsIlVzZXIiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJ1c2VyIiwiZmluZEJ5SWQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBO0FBQ08sSUFBTUEsSUFBSTtBQUFBLDJGQUFHLGlCQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVWQyxZQUFBQSxLQUZVLEdBR2RILEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGdCQUFaLE1BQ0FKLEdBREEsYUFDQUEsR0FEQSx1Q0FDQUEsR0FBRyxDQUFFSSxPQURMLDBFQUNBLGFBQWNDLGFBRGQsMERBQ0Esc0JBQTZCQyxLQUE3QixDQUFtQyxHQUFuQyxFQUF3QyxDQUF4QyxDQURBLENBSGM7O0FBQUEsa0JBTVosQ0FBQ0gsS0FBRCxJQUFVQSxLQUFLLEtBQUssTUFOUjtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FPUEYsR0FBRyxDQUNQTSxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsY0FBQUEsT0FBTyxFQUFFO0FBQVgsYUFGRCxDQVBPOztBQUFBO0FBWVZDLFlBQUFBLE9BWlUsR0FZQUMsd0JBWkEsYUFZQUEsd0JBWkEsdUJBWUFBLHlCQUFLQyxNQUFMLENBQVlULEtBQVosRUFBbUJVLGtCQUFPQyxVQUExQixDQVpBO0FBQUE7QUFBQSxtQkFhR0Msc0JBQUtDLE9BQUwsQ0FBYTtBQUFFQyxjQUFBQSxHQUFHLEVBQUVQLE9BQU8sQ0FBQ1E7QUFBZixhQUFiLENBYkg7O0FBQUE7QUFhVkMsWUFBQUEsSUFiVTs7QUFBQSxnQkFlWEEsSUFmVztBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FnQlBsQixHQUFHLENBQ1BNLE1BREksQ0FDRyxHQURILEVBRUpDLElBRkksQ0FFQztBQUFFQyxjQUFBQSxPQUFPLEVBQUU7QUFBWCxhQUZELENBaEJPOztBQUFBO0FBQUE7QUFBQSxtQkFxQkNNLHNCQUFLSyxRQUFMLENBQWNWLE9BQU8sQ0FBQ1EsRUFBdEIsQ0FyQkQ7O0FBQUE7QUFxQmhCbEIsWUFBQUEsR0FBRyxDQUFDbUIsSUFyQlk7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQXVCVGxCLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCQyxjQUFBQSxPQUFPLEVBQUUsd0RBRGlCO0FBRTFCWSxjQUFBQSxLQUFLO0FBRnFCLGFBQXJCLENBdkJTOztBQUFBO0FBNkJsQm5CLFlBQUFBLElBQUk7O0FBN0JjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQUpILElBQUk7QUFBQTtBQUFBO0FBQUEsR0FBViIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnL2luZGV4LmpzXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWwuanNcIjtcblxuLy8gQ2hlY2sgaXQgdGhlIHVzZXIgaXMgYXV0aGVudGljYXRlZCBvciBub3RcbmV4cG9ydCBjb25zdCBhdXRoID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdG9rZW4gPVxuICAgICAgcmVxLmhlYWRlcnNbXCJ4LWFjY2Vzcy10b2tlblwiXSB8fFxuICAgICAgcmVxPy5oZWFkZXJzPy5hdXRob3JpemF0aW9uPy5zcGxpdChcIiBcIilbMV07XG5cbiAgICBpZiAoIXRva2VuIHx8IHRva2VuID09PSBcIm51bGxcIikge1xuICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAuc3RhdHVzKDQwMSlcbiAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIkxvZ2luIGZpcnN0IHRvIGFjY2VzcyB0aGUgcmVzb3VyY2UuXCIgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dD8udmVyaWZ5KHRva2VuLCBjb25maWcuSldUX1NFQ1JFVCk7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IF9pZDogZGVjb2RlZC5pZCB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAuc3RhdHVzKDQwMSlcbiAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIlRva2VuIGV4cGlyZWQsIHBsZWFzZSBnZW5lcmF0ZSBuZXcgb25lXCIgfSk7XG4gICAgfVxuXG4gICAgcmVxLnVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKGRlY29kZWQuaWQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7XG4gICAgICBtZXNzYWdlOiBcIlRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIHlvdXIgdG9rZW4sIHBsZWFzZSBsb2dpbiBhZ2FpblwiLFxuICAgICAgZXJyb3IsXG4gICAgfSk7XG4gIH1cblxuICBuZXh0KCk7XG59O1xuIl19