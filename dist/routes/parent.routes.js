"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _sanitize = _interopRequireDefault(require("../middlewares/sanitize.js"));

var _auth = require("../middlewares/auth.js");

var _parentController = require("../controllers/parent.controller.js");

var router = _express["default"].Router();

router.put("/update-profile", _sanitize["default"], _auth.auth, _parentController.update_parent_profile);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvcGFyZW50LnJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwicHV0Iiwic2FuaXRpemVEYXRhIiwiYXV0aCIsInVwZGF0ZV9wYXJlbnRfcHJvZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxvQkFBUUMsTUFBUixFQUFmOztBQUVBRixNQUFNLENBQUNHLEdBQVAsQ0FBVyxpQkFBWCxFQUE4QkMsb0JBQTlCLEVBQTRDQyxVQUE1QyxFQUFrREMsdUNBQWxEO2VBRWVOLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHNhbml0aXplRGF0YSBmcm9tIFwiLi4vbWlkZGxld2FyZXMvc2FuaXRpemUuanNcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vbWlkZGxld2FyZXMvYXV0aC5qc1wiO1xuXG5pbXBvcnQgeyB1cGRhdGVfcGFyZW50X3Byb2ZpbGUgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvcGFyZW50LmNvbnRyb2xsZXIuanNcIjtcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLnB1dChcIi91cGRhdGUtcHJvZmlsZVwiLCBzYW5pdGl6ZURhdGEsIGF1dGgsIHVwZGF0ZV9wYXJlbnRfcHJvZmlsZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==