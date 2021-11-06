"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authRoutes = _interopRequireDefault(require("./auth.routes.js"));

var apiRouter = _express["default"].Router();

apiRouter.use("/auth", _authRoutes["default"]);
var _default = apiRouter;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvcm91dGVzLmpzIl0sIm5hbWVzIjpbImFwaVJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJhdXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9CQUFRQyxNQUFSLEVBQWxCOztBQUVBRixTQUFTLENBQUNHLEdBQVYsQ0FBYyxPQUFkLEVBQXVCQyxzQkFBdkI7ZUFFZUosUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBhdXRoUm91dGVyIGZyb20gXCIuL2F1dGgucm91dGVzLmpzXCI7XHJcblxyXG5jb25zdCBhcGlSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxuYXBpUm91dGVyLnVzZShcIi9hdXRoXCIsIGF1dGhSb3V0ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpUm91dGVyO1xyXG4iXX0=