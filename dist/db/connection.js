"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chalk = _interopRequireDefault(require("chalk"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _index = _interopRequireDefault(require("../config/index.js"));

var dbConnection = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _mongoose["default"].connect(_index["default"].MONGO_URI || process.env.MONGO_URI, {
              connectTimeoutMS: 20000,
              useNewUrlParser: true
            }, function () {
              console.log(_chalk["default"].bold.green("✓"), "Db Connected");
            });

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));

  return function dbConnection() {
    return _ref.apply(this, arguments);
  };
}();

var _default = dbConnection;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYi9jb25uZWN0aW9uLmpzIl0sIm5hbWVzIjpbImRiQ29ubmVjdGlvbiIsIm1vbmdvb3NlIiwiY29ubmVjdCIsImNvbmZpZyIsIk1PTkdPX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJjb25uZWN0VGltZW91dE1TIiwidXNlTmV3VXJsUGFyc2VyIiwiY29uc29sZSIsImxvZyIsImNoYWxrIiwiYm9sZCIsImdyZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsWUFBWTtBQUFBLDJGQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRVhDLHFCQUFTQyxPQUFULENBQ0pDLGtCQUFPQyxTQUFQLElBQW9CQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsU0FENUIsRUFFSjtBQUNFRyxjQUFBQSxnQkFBZ0IsRUFBRSxLQURwQjtBQUVFQyxjQUFBQSxlQUFlLEVBQUU7QUFGbkIsYUFGSSxFQU1KLFlBQU07QUFDSkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGtCQUFNQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUIsR0FBakIsQ0FBWixFQUFtQyxjQUFuQztBQUNELGFBUkcsQ0FGVzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYWpCSixZQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBYmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVpWLFlBQVk7QUFBQTtBQUFBO0FBQUEsR0FBbEI7O2VBaUJlQSxZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gXCJjaGFsa1wiO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnL2luZGV4LmpzXCI7XG5cbmNvbnN0IGRiQ29ubmVjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KFxuICAgICAgY29uZmlnLk1PTkdPX1VSSSB8fCBwcm9jZXNzLmVudi5NT05HT19VUkksXG4gICAgICB7XG4gICAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDIwMDAwLFxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhjaGFsay5ib2xkLmdyZWVuKFwi4pyTXCIpLCBcIkRiIENvbm5lY3RlZFwiKTtcbiAgICAgIH1cbiAgICApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0aW9uO1xuIl19