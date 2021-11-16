"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _sanitize = _interopRequireDefault(require("../middlewares/sanitize.js"));

var _auth = require("../middlewares/auth.js");

var _multer = require("../middlewares/multer.js");

var _tutorController = require("../controllers/tutor.controller.js");

var router = _express["default"].Router();

router.put("/update-profile", _sanitize["default"], _auth.auth, _multer.file.array("gallery", "30"), _tutorController.update_tutor_profile);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdHV0b3Iucm91dGVzLmpzIl0sIm5hbWVzIjpbInJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJwdXQiLCJzYW5pdGl6ZURhdGEiLCJhdXRoIiwiZmlsZSIsImFycmF5IiwidXBkYXRlX3R1dG9yX3Byb2ZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBLElBQU1BLE1BQU0sR0FBR0Msb0JBQVFDLE1BQVIsRUFBZjs7QUFFQUYsTUFBTSxDQUFDRyxHQUFQLENBQ0UsaUJBREYsRUFFRUMsb0JBRkYsRUFHRUMsVUFIRixFQUlFQyxhQUFLQyxLQUFMLENBQVcsU0FBWCxFQUFzQixJQUF0QixDQUpGLEVBS0VDLHFDQUxGO2VBUWVSLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHNhbml0aXplRGF0YSBmcm9tIFwiLi4vbWlkZGxld2FyZXMvc2FuaXRpemUuanNcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vbWlkZGxld2FyZXMvYXV0aC5qc1wiO1xuaW1wb3J0IHsgZmlsZSB9IGZyb20gXCIuLi9taWRkbGV3YXJlcy9tdWx0ZXIuanNcIjtcblxuaW1wb3J0IHsgdXBkYXRlX3R1dG9yX3Byb2ZpbGUgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvdHV0b3IuY29udHJvbGxlci5qc1wiO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIucHV0KFxuICBcIi91cGRhdGUtcHJvZmlsZVwiLFxuICBzYW5pdGl6ZURhdGEsXG4gIGF1dGgsXG4gIGZpbGUuYXJyYXkoXCJnYWxsZXJ5XCIsIFwiMzBcIiksXG4gIHVwZGF0ZV90dXRvcl9wcm9maWxlXG4pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=