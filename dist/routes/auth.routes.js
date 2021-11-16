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

var _authController = require("../controllers/auth.controller.js");

var router = _express["default"].Router();

router.post("/sign-up", _sanitize["default"], _authController.sign_up);
router.post("/login", _sanitize["default"], _authController.login);
router.get("/me", _auth.auth, _authController.me);
router.put("/forgot-password", _sanitize["default"], _authController.forgot_password);
router.put("/otp-verify", _sanitize["default"], _authController.otp_verify);
router.put("/reset-password", _sanitize["default"], _authController.reset_password);
router.get("/refresh-token", _auth.auth, _authController.refresh_token);
router.put("/update-profile-pic", _auth.auth, _multer.file.single("image"), _authController.update_user_profile_picture);
router.put("/update-password-from-profile", _sanitize["default"], _auth.auth, _authController.udpate_password_from_profile);
router.put("/add-payment-method", _sanitize["default"], _auth.auth, _authController.add_payment_method);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYXV0aC5yb3V0ZXMuanMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsInBvc3QiLCJzYW5pdGl6ZURhdGEiLCJzaWduX3VwIiwibG9naW4iLCJnZXQiLCJhdXRoIiwibWUiLCJwdXQiLCJmb3Jnb3RfcGFzc3dvcmQiLCJvdHBfdmVyaWZ5IiwicmVzZXRfcGFzc3dvcmQiLCJyZWZyZXNoX3Rva2VuIiwiZmlsZSIsInNpbmdsZSIsInVwZGF0ZV91c2VyX3Byb2ZpbGVfcGljdHVyZSIsInVkcGF0ZV9wYXNzd29yZF9mcm9tX3Byb2ZpbGUiLCJhZGRfcGF5bWVudF9tZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQWFBLElBQU1BLE1BQU0sR0FBR0Msb0JBQVFDLE1BQVIsRUFBZjs7QUFFQUYsTUFBTSxDQUFDRyxJQUFQLENBQVksVUFBWixFQUF3QkMsb0JBQXhCLEVBQXNDQyx1QkFBdEM7QUFDQUwsTUFBTSxDQUFDRyxJQUFQLENBQVksUUFBWixFQUFzQkMsb0JBQXRCLEVBQW9DRSxxQkFBcEM7QUFDQU4sTUFBTSxDQUFDTyxHQUFQLENBQVcsS0FBWCxFQUFrQkMsVUFBbEIsRUFBd0JDLGtCQUF4QjtBQUNBVCxNQUFNLENBQUNVLEdBQVAsQ0FBVyxrQkFBWCxFQUErQk4sb0JBQS9CLEVBQTZDTywrQkFBN0M7QUFDQVgsTUFBTSxDQUFDVSxHQUFQLENBQVcsYUFBWCxFQUEwQk4sb0JBQTFCLEVBQXdDUSwwQkFBeEM7QUFDQVosTUFBTSxDQUFDVSxHQUFQLENBQVcsaUJBQVgsRUFBOEJOLG9CQUE5QixFQUE0Q1MsOEJBQTVDO0FBQ0FiLE1BQU0sQ0FBQ08sR0FBUCxDQUFXLGdCQUFYLEVBQTZCQyxVQUE3QixFQUFtQ00sNkJBQW5DO0FBQ0FkLE1BQU0sQ0FBQ1UsR0FBUCxDQUNFLHFCQURGLEVBRUVGLFVBRkYsRUFHRU8sYUFBS0MsTUFBTCxDQUFZLE9BQVosQ0FIRixFQUlFQywyQ0FKRjtBQU1BakIsTUFBTSxDQUFDVSxHQUFQLENBQ0UsK0JBREYsRUFFRU4sb0JBRkYsRUFHRUksVUFIRixFQUlFVSw0Q0FKRjtBQU1BbEIsTUFBTSxDQUFDVSxHQUFQLENBQVcscUJBQVgsRUFBa0NOLG9CQUFsQyxFQUFnREksVUFBaEQsRUFBc0RXLGtDQUF0RDtlQUVlbkIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgc2FuaXRpemVEYXRhIGZyb20gXCIuLi9taWRkbGV3YXJlcy9zYW5pdGl6ZS5qc1wiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9taWRkbGV3YXJlcy9hdXRoLmpzXCI7XG5pbXBvcnQgeyBmaWxlIH0gZnJvbSBcIi4uL21pZGRsZXdhcmVzL211bHRlclwiO1xuXG5pbXBvcnQge1xuICBzaWduX3VwLFxuICBsb2dpbixcbiAgbWUsXG4gIGZvcmdvdF9wYXNzd29yZCxcbiAgb3RwX3ZlcmlmeSxcbiAgcmVzZXRfcGFzc3dvcmQsXG4gIHJlZnJlc2hfdG9rZW4sXG4gIHVwZGF0ZV91c2VyX3Byb2ZpbGVfcGljdHVyZSxcbiAgdWRwYXRlX3Bhc3N3b3JkX2Zyb21fcHJvZmlsZSxcbiAgYWRkX3BheW1lbnRfbWV0aG9kLFxufSBmcm9tIFwiLi4vY29udHJvbGxlcnMvYXV0aC5jb250cm9sbGVyLmpzXCI7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5wb3N0KFwiL3NpZ24tdXBcIiwgc2FuaXRpemVEYXRhLCBzaWduX3VwKTtcbnJvdXRlci5wb3N0KFwiL2xvZ2luXCIsIHNhbml0aXplRGF0YSwgbG9naW4pO1xucm91dGVyLmdldChcIi9tZVwiLCBhdXRoLCBtZSk7XG5yb3V0ZXIucHV0KFwiL2ZvcmdvdC1wYXNzd29yZFwiLCBzYW5pdGl6ZURhdGEsIGZvcmdvdF9wYXNzd29yZCk7XG5yb3V0ZXIucHV0KFwiL290cC12ZXJpZnlcIiwgc2FuaXRpemVEYXRhLCBvdHBfdmVyaWZ5KTtcbnJvdXRlci5wdXQoXCIvcmVzZXQtcGFzc3dvcmRcIiwgc2FuaXRpemVEYXRhLCByZXNldF9wYXNzd29yZCk7XG5yb3V0ZXIuZ2V0KFwiL3JlZnJlc2gtdG9rZW5cIiwgYXV0aCwgcmVmcmVzaF90b2tlbik7XG5yb3V0ZXIucHV0KFxuICBcIi91cGRhdGUtcHJvZmlsZS1waWNcIixcbiAgYXV0aCxcbiAgZmlsZS5zaW5nbGUoXCJpbWFnZVwiKSxcbiAgdXBkYXRlX3VzZXJfcHJvZmlsZV9waWN0dXJlXG4pO1xucm91dGVyLnB1dChcbiAgXCIvdXBkYXRlLXBhc3N3b3JkLWZyb20tcHJvZmlsZVwiLFxuICBzYW5pdGl6ZURhdGEsXG4gIGF1dGgsXG4gIHVkcGF0ZV9wYXNzd29yZF9mcm9tX3Byb2ZpbGVcbik7XG5yb3V0ZXIucHV0KFwiL2FkZC1wYXltZW50LW1ldGhvZFwiLCBzYW5pdGl6ZURhdGEsIGF1dGgsIGFkZF9wYXltZW50X21ldGhvZCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==