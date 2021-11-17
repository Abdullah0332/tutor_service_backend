"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _sanitize = _interopRequireDefault(require("../middlewares/sanitize.js"));

var _auth = require("../middlewares/auth.js");

var _multer = require("../middlewares/multer");

var _parentController = require("../controllers/parent.controller.js");

var router = _express["default"].Router();

router.put("/update-profile", _sanitize["default"], _auth.auth, _parentController.update_parent_profile); // ---------------------------------------------------------------
// --------------------- KID CRUD ROUTES -----------------------------
// ---------------------------------------------------------------

router.get("/get-all-kids", _sanitize["default"], _auth.auth, _parentController.get_all_kid);
router.put("/add-kid", _sanitize["default"], _auth.auth, _multer.file.single("image"), _parentController.add_kid);
router.put("/update-kid/:id", _sanitize["default"], _auth.auth, _multer.file.single("image"), _parentController.update_kid);
router.put("/remove-kid/:id", _sanitize["default"], _auth.auth, _parentController.remove_kid);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvcGFyZW50LnJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwicHV0Iiwic2FuaXRpemVEYXRhIiwiYXV0aCIsInVwZGF0ZV9wYXJlbnRfcHJvZmlsZSIsImdldCIsImdldF9hbGxfa2lkIiwiZmlsZSIsInNpbmdsZSIsImFkZF9raWQiLCJ1cGRhdGVfa2lkIiwicmVtb3ZlX2tpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBUUEsSUFBTUEsTUFBTSxHQUFHQyxvQkFBUUMsTUFBUixFQUFmOztBQUVBRixNQUFNLENBQUNHLEdBQVAsQ0FBVyxpQkFBWCxFQUE4QkMsb0JBQTlCLEVBQTRDQyxVQUE1QyxFQUFrREMsdUNBQWxELEUsQ0FFQTtBQUNBO0FBQ0E7O0FBQ0FOLE1BQU0sQ0FBQ08sR0FBUCxDQUFXLGVBQVgsRUFBNEJILG9CQUE1QixFQUEwQ0MsVUFBMUMsRUFBZ0RHLDZCQUFoRDtBQUNBUixNQUFNLENBQUNHLEdBQVAsQ0FBVyxVQUFYLEVBQXVCQyxvQkFBdkIsRUFBcUNDLFVBQXJDLEVBQTJDSSxhQUFLQyxNQUFMLENBQVksT0FBWixDQUEzQyxFQUFpRUMseUJBQWpFO0FBQ0FYLE1BQU0sQ0FBQ0csR0FBUCxDQUNFLGlCQURGLEVBRUVDLG9CQUZGLEVBR0VDLFVBSEYsRUFJRUksYUFBS0MsTUFBTCxDQUFZLE9BQVosQ0FKRixFQUtFRSw0QkFMRjtBQU9BWixNQUFNLENBQUNHLEdBQVAsQ0FBVyxpQkFBWCxFQUE4QkMsb0JBQTlCLEVBQTRDQyxVQUE1QyxFQUFrRFEsNEJBQWxEO2VBRWViLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHNhbml0aXplRGF0YSBmcm9tIFwiLi4vbWlkZGxld2FyZXMvc2FuaXRpemUuanNcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vbWlkZGxld2FyZXMvYXV0aC5qc1wiO1xuXG5pbXBvcnQgeyBmaWxlIH0gZnJvbSBcIi4uL21pZGRsZXdhcmVzL211bHRlclwiO1xuXG5pbXBvcnQge1xuICB1cGRhdGVfcGFyZW50X3Byb2ZpbGUsXG4gIGFkZF9raWQsXG4gIHJlbW92ZV9raWQsXG4gIHVwZGF0ZV9raWQsXG4gIGdldF9hbGxfa2lkLFxufSBmcm9tIFwiLi4vY29udHJvbGxlcnMvcGFyZW50LmNvbnRyb2xsZXIuanNcIjtcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLnB1dChcIi91cGRhdGUtcHJvZmlsZVwiLCBzYW5pdGl6ZURhdGEsIGF1dGgsIHVwZGF0ZV9wYXJlbnRfcHJvZmlsZSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEtJRCBDUlVEIFJPVVRFUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5yb3V0ZXIuZ2V0KFwiL2dldC1hbGwta2lkc1wiLCBzYW5pdGl6ZURhdGEsIGF1dGgsIGdldF9hbGxfa2lkKTtcbnJvdXRlci5wdXQoXCIvYWRkLWtpZFwiLCBzYW5pdGl6ZURhdGEsIGF1dGgsIGZpbGUuc2luZ2xlKFwiaW1hZ2VcIiksIGFkZF9raWQpO1xucm91dGVyLnB1dChcbiAgXCIvdXBkYXRlLWtpZC86aWRcIixcbiAgc2FuaXRpemVEYXRhLFxuICBhdXRoLFxuICBmaWxlLnNpbmdsZShcImltYWdlXCIpLFxuICB1cGRhdGVfa2lkXG4pO1xucm91dGVyLnB1dChcIi9yZW1vdmUta2lkLzppZFwiLCBzYW5pdGl6ZURhdGEsIGF1dGgsIHJlbW92ZV9raWQpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=