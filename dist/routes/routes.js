"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authRoutes = _interopRequireDefault(require("./auth.routes.js"));

var _tutorRoutes = _interopRequireDefault(require("./tutor.routes.js"));

var _parentRoutes = _interopRequireDefault(require("./parent.routes.js"));

var apiRouter = _express["default"].Router();

apiRouter.use("/auth", _authRoutes["default"]);
apiRouter.use("/tutor", _tutorRoutes["default"]);
apiRouter.use("/parent", _parentRoutes["default"]);
var _default = apiRouter;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvcm91dGVzLmpzIl0sIm5hbWVzIjpbImFwaVJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJhdXRoUm91dGVyIiwidHV0b3JSb3V0ZXIiLCJwYXJlbnRSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0JBQVFDLE1BQVIsRUFBbEI7O0FBRUFGLFNBQVMsQ0FBQ0csR0FBVixDQUFjLE9BQWQsRUFBdUJDLHNCQUF2QjtBQUNBSixTQUFTLENBQUNHLEdBQVYsQ0FBYyxRQUFkLEVBQXdCRSx1QkFBeEI7QUFDQUwsU0FBUyxDQUFDRyxHQUFWLENBQWMsU0FBZCxFQUF5Qkcsd0JBQXpCO2VBRWVOLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGF1dGhSb3V0ZXIgZnJvbSBcIi4vYXV0aC5yb3V0ZXMuanNcIjtcbmltcG9ydCB0dXRvclJvdXRlciBmcm9tIFwiLi90dXRvci5yb3V0ZXMuanNcIjtcbmltcG9ydCBwYXJlbnRSb3V0ZXIgZnJvbSBcIi4vcGFyZW50LnJvdXRlcy5qc1wiO1xuXG5jb25zdCBhcGlSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5hcGlSb3V0ZXIudXNlKFwiL2F1dGhcIiwgYXV0aFJvdXRlcik7XG5hcGlSb3V0ZXIudXNlKFwiL3R1dG9yXCIsIHR1dG9yUm91dGVyKTtcbmFwaVJvdXRlci51c2UoXCIvcGFyZW50XCIsIHBhcmVudFJvdXRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaVJvdXRlcjtcbiJdfQ==