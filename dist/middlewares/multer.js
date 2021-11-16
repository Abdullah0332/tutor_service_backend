"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.file = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _fs = _interopRequireDefault(require("fs"));

var dir = "./src/data";

if (!_fs["default"].existsSync(dir)) {
  _fs["default"].mkdirSync(dir);
}

var file = (0, _multer["default"])({
  storage: _multer["default"].diskStorage({
    destination: function destination(req, file, cb) {
      cb(null, "./src/data");
    },
    filename: function filename(req, file, cb) {
      cb(null, "".concat(new Date().getTime(), "_").concat(file.originalname));
    }
  })
});
exports.file = file;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9tdWx0ZXIuanMiXSwibmFtZXMiOlsiZGlyIiwiZnMiLCJleGlzdHNTeW5jIiwibWtkaXJTeW5jIiwiZmlsZSIsInN0b3JhZ2UiLCJtdWx0ZXIiLCJkaXNrU3RvcmFnZSIsImRlc3RpbmF0aW9uIiwicmVxIiwiY2IiLCJmaWxlbmFtZSIsIkRhdGUiLCJnZXRUaW1lIiwib3JpZ2luYWxuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFJQSxHQUFHLEdBQUcsWUFBVjs7QUFFQSxJQUFJLENBQUNDLGVBQUdDLFVBQUgsQ0FBY0YsR0FBZCxDQUFMLEVBQXlCO0FBQ3ZCQyxpQkFBR0UsU0FBSCxDQUFhSCxHQUFiO0FBQ0Q7O0FBRU0sSUFBTUksSUFBSSxHQUFHLHdCQUFPO0FBQ3pCQyxFQUFBQSxPQUFPLEVBQUVDLG1CQUFPQyxXQUFQLENBQW1CO0FBQzFCQyxJQUFBQSxXQUQwQix1QkFDZEMsR0FEYyxFQUNUTCxJQURTLEVBQ0hNLEVBREcsRUFDQztBQUN6QkEsTUFBQUEsRUFBRSxDQUFDLElBQUQsRUFBTyxZQUFQLENBQUY7QUFDRCxLQUh5QjtBQUkxQkMsSUFBQUEsUUFKMEIsb0JBSWpCRixHQUppQixFQUlaTCxJQUpZLEVBSU5NLEVBSk0sRUFJRjtBQUN0QkEsTUFBQUEsRUFBRSxDQUFDLElBQUQsWUFBVSxJQUFJRSxJQUFKLEdBQVdDLE9BQVgsRUFBVixjQUFrQ1QsSUFBSSxDQUFDVSxZQUF2QyxFQUFGO0FBQ0Q7QUFOeUIsR0FBbkI7QUFEZ0IsQ0FBUCxDQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG11bHRlciBmcm9tIFwibXVsdGVyXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5cbnZhciBkaXIgPSBcIi4vc3JjL2RhdGFcIjtcblxuaWYgKCFmcy5leGlzdHNTeW5jKGRpcikpIHtcbiAgZnMubWtkaXJTeW5jKGRpcik7XG59XG5cbmV4cG9ydCBjb25zdCBmaWxlID0gbXVsdGVyKHtcbiAgc3RvcmFnZTogbXVsdGVyLmRpc2tTdG9yYWdlKHtcbiAgICBkZXN0aW5hdGlvbihyZXEsIGZpbGUsIGNiKSB7XG4gICAgICBjYihudWxsLCBcIi4vc3JjL2RhdGFcIik7XG4gICAgfSxcbiAgICBmaWxlbmFtZShyZXEsIGZpbGUsIGNiKSB7XG4gICAgICBjYihudWxsLCBgJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1fJHtmaWxlLm9yaWdpbmFsbmFtZX1gKTtcbiAgICB9LFxuICB9KSxcbn0pO1xuIl19