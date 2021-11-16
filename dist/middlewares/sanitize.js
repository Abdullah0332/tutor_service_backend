"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoSanitize = _interopRequireDefault(require("mongo-sanitize"));

var sanitizeData = function sanitizeData(req, res, next) {
  try {
    req.body = (0, _mongoSanitize["default"])(req === null || req === void 0 ? void 0 : req.body);
    req.params = (0, _mongoSanitize["default"])(req === null || req === void 0 ? void 0 : req.params);
    req.file = (0, _mongoSanitize["default"])(req === null || req === void 0 ? void 0 : req.file);
    req.query = (0, _mongoSanitize["default"])(req === null || req === void 0 ? void 0 : req.query);
    next();
  } catch (error) {
    res.json(error.message);
  }
};

var _default = sanitizeData;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9zYW5pdGl6ZS5qcyJdLCJuYW1lcyI6WyJzYW5pdGl6ZURhdGEiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYm9keSIsInBhcmFtcyIsImZpbGUiLCJxdWVyeSIsImVycm9yIiwianNvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLElBQUlBLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEVBQW9CO0FBQ3JDLE1BQUk7QUFDRkYsSUFBQUEsR0FBRyxDQUFDRyxJQUFKLEdBQVcsK0JBQVNILEdBQVQsYUFBU0EsR0FBVCx1QkFBU0EsR0FBRyxDQUFFRyxJQUFkLENBQVg7QUFDQUgsSUFBQUEsR0FBRyxDQUFDSSxNQUFKLEdBQWEsK0JBQVNKLEdBQVQsYUFBU0EsR0FBVCx1QkFBU0EsR0FBRyxDQUFFSSxNQUFkLENBQWI7QUFDQUosSUFBQUEsR0FBRyxDQUFDSyxJQUFKLEdBQVcsK0JBQVNMLEdBQVQsYUFBU0EsR0FBVCx1QkFBU0EsR0FBRyxDQUFFSyxJQUFkLENBQVg7QUFDQUwsSUFBQUEsR0FBRyxDQUFDTSxLQUFKLEdBQVksK0JBQVNOLEdBQVQsYUFBU0EsR0FBVCx1QkFBU0EsR0FBRyxDQUFFTSxLQUFkLENBQVo7QUFDQUosSUFBQUEsSUFBSTtBQUNMLEdBTkQsQ0FNRSxPQUFPSyxLQUFQLEVBQWM7QUFDZE4sSUFBQUEsR0FBRyxDQUFDTyxJQUFKLENBQVNELEtBQUssQ0FBQ0UsT0FBZjtBQUNEO0FBQ0YsQ0FWRDs7ZUFZZVYsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYW5pdGl6ZSBmcm9tIFwibW9uZ28tc2FuaXRpemVcIjtcblxudmFyIHNhbml0aXplRGF0YSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIHJlcS5ib2R5ID0gc2FuaXRpemUocmVxPy5ib2R5KTtcbiAgICByZXEucGFyYW1zID0gc2FuaXRpemUocmVxPy5wYXJhbXMpO1xuICAgIHJlcS5maWxlID0gc2FuaXRpemUocmVxPy5maWxlKTtcbiAgICByZXEucXVlcnkgPSBzYW5pdGl6ZShyZXE/LnF1ZXJ5KTtcbiAgICBuZXh0KCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLmpzb24oZXJyb3IubWVzc2FnZSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNhbml0aXplRGF0YTtcbiJdfQ==