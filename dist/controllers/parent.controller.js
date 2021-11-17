"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_parent_profile = exports.update_kid = exports.remove_kid = exports.get_all_kid = exports.add_kid = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _tutor = _interopRequireDefault(require("../models/tutor.model"));

var _parent = _interopRequireDefault(require("../models/parent.model"));

var _parentService = require("../services/parent.service.js");

// ---------------------------------------------------------------
// --------------------- UPDATE PARENT PROFILE -----------------------------
// ---------------------------------------------------------------
var update_parent_profile = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$user, _req$user2, _req$user3, _yield$update_parent_, update_parent_object, update_user_object, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _parentService.update_parent_profile_service)(req);

          case 3:
            _yield$update_parent_ = _context.sent;
            update_parent_object = _yield$update_parent_.update_parent_object;
            update_user_object = _yield$update_parent_.update_user_object;
            _context.next = 8;
            return _parent["default"].updateOne({
              user_id: req === null || req === void 0 ? void 0 : (_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user._id
            }, {
              $set: update_parent_object
            });

          case 8:
            _context.next = 10;
            return _user["default"].updateOne({
              _id: req === null || req === void 0 ? void 0 : (_req$user2 = req.user) === null || _req$user2 === void 0 ? void 0 : _req$user2._id
            }, {
              $set: update_user_object
            });

          case 10:
            _context.next = 12;
            return _parent["default"].findOne({
              user_id: req === null || req === void 0 ? void 0 : (_req$user3 = req.user) === null || _req$user3 === void 0 ? void 0 : _req$user3._id
            });

          case 12:
            data = _context.sent;
            res.status(200).json(data);
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function update_parent_profile(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- ADD KID -----------------------------
// ---------------------------------------------------------------


exports.update_parent_profile = update_parent_profile;

var add_kid = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _req$user4, _req$body, first_name, last_name, age, class_name, gender, parent;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, first_name = _req$body.first_name, last_name = _req$body.last_name, age = _req$body.age, class_name = _req$body.class_name, gender = _req$body.gender;
            _context2.next = 4;
            return _parent["default"].findOne({
              user_id: req === null || req === void 0 ? void 0 : (_req$user4 = req.user) === null || _req$user4 === void 0 ? void 0 : _req$user4._id
            });

          case 4:
            parent = _context2.sent;

            if (parent) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(500).json({
              message: "Parent Not Found!!!"
            }));

          case 7:
            parent === null || parent === void 0 ? void 0 : parent.kids.push({
              first_name: first_name,
              last_name: last_name,
              age: age,
              class_name: class_name,
              gender: gender,
              profile_picture: req === null || req === void 0 ? void 0 : req.file.path
            });
            _context2.next = 10;
            return parent.save();

          case 10:
            res.status(200).json({
              message: "Kid Add Successfully!!!"
            });
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message
            });

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));

  return function add_kid(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- REMOVE KID -----------------------------
// ---------------------------------------------------------------


exports.add_kid = add_kid;

var remove_kid = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var _req$user5, id, parent, updated_kids;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _parent["default"].findOne({
              user_id: req === null || req === void 0 ? void 0 : (_req$user5 = req.user) === null || _req$user5 === void 0 ? void 0 : _req$user5._id
            });

          case 4:
            parent = _context3.sent;

            if (parent) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              message: "Parent Not Found!!!"
            }));

          case 7:
            updated_kids = parent.kids.filter(function (kid) {
              return (kid === null || kid === void 0 ? void 0 : kid._id.toString()) !== id.toString();
            });
            parent.kids = updated_kids;
            _context3.next = 11;
            return parent.save();

          case 11:
            res.status(200).json({
              message: "Kid Removed Successfully!!!"
            });
            _context3.next = 17;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              message: _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message
            });

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 14]]);
  }));

  return function remove_kid(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- UPDATE KID -----------------------------
// ---------------------------------------------------------------


exports.remove_kid = remove_kid;

var update_kid = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var _req$user6, _req$file, id, _req$body2, first_name, last_name, age, class_name, gender, parent;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, first_name = _req$body2.first_name, last_name = _req$body2.last_name, age = _req$body2.age, class_name = _req$body2.class_name, gender = _req$body2.gender;
            _context4.next = 5;
            return _parent["default"].findOne({
              user_id: req === null || req === void 0 ? void 0 : (_req$user6 = req.user) === null || _req$user6 === void 0 ? void 0 : _req$user6._id
            });

          case 5:
            parent = _context4.sent;

            if (parent) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(500).json({
              message: "Parent Not Found!!!"
            }));

          case 8:
            _context4.next = 10;
            return _parent["default"].updateOne({
              "kids._id": id
            }, {
              $set: {
                "kids.$.first_name": first_name,
                "kids.$.last_name": last_name,
                "kids.$.age": age,
                "kids.$.class_name": class_name,
                "kids.$.gender": gender,
                "kids.$.profile_picture": req === null || req === void 0 ? void 0 : (_req$file = req.file) === null || _req$file === void 0 ? void 0 : _req$file.path
              }
            });

          case 10:
            res.status(200).json({
              message: "Kid Updated Successfully!!!"
            });
            _context4.next = 16;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: _context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.message
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 13]]);
  }));

  return function update_kid(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}(); // ---------------------------------------------------------------
// --------------------- GET ALL KID -----------------------------
// ---------------------------------------------------------------


exports.update_kid = update_kid;

var get_all_kid = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var _req$user7, parent;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _parent["default"].findOne({
              user_id: req === null || req === void 0 ? void 0 : (_req$user7 = req.user) === null || _req$user7 === void 0 ? void 0 : _req$user7._id
            });

          case 3:
            parent = _context5.sent;

            if (parent) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", res.status(500).json({
              message: "Parent Not Found!!!"
            }));

          case 6:
            res.status(200).json({
              kids: parent === null || parent === void 0 ? void 0 : parent.kids
            });
            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              message: _context5.t0 === null || _context5.t0 === void 0 ? void 0 : _context5.t0.message
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 9]]);
  }));

  return function get_all_kid(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.get_all_kid = get_all_kid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9wYXJlbnQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJ1cGRhdGVfcGFyZW50X3Byb2ZpbGUiLCJyZXEiLCJyZXMiLCJuZXh0IiwidXBkYXRlX3BhcmVudF9vYmplY3QiLCJ1cGRhdGVfdXNlcl9vYmplY3QiLCJQYXJlbnRNb2RlbCIsInVwZGF0ZU9uZSIsInVzZXJfaWQiLCJ1c2VyIiwiX2lkIiwiJHNldCIsIlVzZXJNb2RlbCIsImZpbmRPbmUiLCJkYXRhIiwic3RhdHVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiYWRkX2tpZCIsImJvZHkiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiYWdlIiwiY2xhc3NfbmFtZSIsImdlbmRlciIsInBhcmVudCIsImtpZHMiLCJwdXNoIiwicHJvZmlsZV9waWN0dXJlIiwiZmlsZSIsInBhdGgiLCJzYXZlIiwicmVtb3ZlX2tpZCIsImlkIiwicGFyYW1zIiwidXBkYXRlZF9raWRzIiwiZmlsdGVyIiwia2lkIiwidG9TdHJpbmciLCJ1cGRhdGVfa2lkIiwiZ2V0X2FsbF9raWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxxQkFBcUI7QUFBQSwyRkFBRyxpQkFBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUd6QixrREFBOEJGLEdBQTlCLENBSHlCOztBQUFBO0FBQUE7QUFFekJHLFlBQUFBLG9CQUZ5Qix5QkFFekJBLG9CQUZ5QjtBQUVIQyxZQUFBQSxrQkFGRyx5QkFFSEEsa0JBRkc7QUFBQTtBQUFBLG1CQUszQkMsbUJBQVlDLFNBQVosQ0FDSjtBQUFFQyxjQUFBQSxPQUFPLEVBQUVQLEdBQUYsYUFBRUEsR0FBRixvQ0FBRUEsR0FBRyxDQUFFUSxJQUFQLDhDQUFFLFVB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LENBQXFCO0FBQUVHLGNBQUFBLE9BQU8sRUFBRTtBQUFYLGFBQXJCLENBTGM7O0FBQUE7QUFRdkJqQixZQUFBQSxHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFWSxjQUFBQSxJQUFJLEVBQUVELE1BQUYsYUFBRUEsTUFBRix1QkFBRUEsTUFBTSxDQUFFQztBQUFoQixhQUFyQjtBQVJ1QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVV2QjFCLFlBQUFBLEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVHLGNBQUFBLE9BQU8sOERBQUUsYUFBT0E7QUFBbEIsYUFBckI7O0FBVnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVh1QixXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJNb2RlbCBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcbmltcG9ydCBUdXRvck1vZGVsIGZyb20gXCIuLi9tb2RlbHMvdHV0b3IubW9kZWxcIjtcbmltcG9ydCBQYXJlbnRNb2RlbCBmcm9tIFwiLi4vbW9kZWxzL3BhcmVudC5tb2RlbFwiO1xuXG5pbXBvcnQgeyB1cGRhdGVfcGFyZW50X3Byb2ZpbGVfc2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wYXJlbnQuc2VydmljZS5qc1wiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBVUERBVEUgUEFSRU5UIFBST0ZJTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IHVwZGF0ZV9wYXJlbnRfcHJvZmlsZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdXBkYXRlX3BhcmVudF9vYmplY3QsIHVwZGF0ZV91c2VyX29iamVjdCB9ID1cbiAgICAgIGF3YWl0IHVwZGF0ZV9wYXJlbnRfcHJvZmlsZV9zZXJ2aWNlKHJlcSk7XG5cbiAgICBhd2FpdCBQYXJlbnRNb2RlbC51cGRhdGVPbmUoXG4gICAgICB7IHVzZXJfaWQ6IHJlcT8udXNlcj8uX2lkIH0sXG4gICAgICB7ICRzZXQ6IHVwZGF0ZV9wYXJlbnRfb2JqZWN0IH1cbiAgICApO1xuXG4gICAgYXdhaXQgVXNlck1vZGVsLnVwZGF0ZU9uZShcbiAgICAgIHsgX2lkOiByZXE/LnVzZXI/Ll9pZCB9LFxuICAgICAgeyAkc2V0OiB1cGRhdGVfdXNlcl9vYmplY3QgfVxuICAgICk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgUGFyZW50TW9kZWwuZmluZE9uZSh7IHVzZXJfaWQ6IHJlcT8udXNlcj8uX2lkIH0pO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFERCBLSUQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IGFkZF9raWQgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgYWdlLCBjbGFzc19uYW1lLCBnZW5kZXIgfSA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3QgcGFyZW50ID0gYXdhaXQgUGFyZW50TW9kZWwuZmluZE9uZSh7IHVzZXJfaWQ6IHJlcT8udXNlcj8uX2lkIH0pO1xuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiUGFyZW50IE5vdCBGb3VuZCEhIVwiIH0pO1xuICAgIH1cblxuICAgIHBhcmVudD8ua2lkcy5wdXNoKHtcbiAgICAgIGZpcnN0X25hbWUsXG4gICAgICBsYXN0X25hbWUsXG4gICAgICBhZ2UsXG4gICAgICBjbGFzc19uYW1lLFxuICAgICAgZ2VuZGVyLFxuICAgICAgcHJvZmlsZV9waWN0dXJlOiByZXE/LmZpbGUucGF0aCxcbiAgICB9KTtcblxuICAgIGF3YWl0IHBhcmVudC5zYXZlKCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiS2lkIEFkZCBTdWNjZXNzZnVsbHkhISFcIiB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSRU1PVkUgS0lEIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBjb25zdCByZW1vdmVfa2lkID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcblxuICAgIGNvbnN0IHBhcmVudCA9IGF3YWl0IFBhcmVudE1vZGVsLmZpbmRPbmUoeyB1c2VyX2lkOiByZXE/LnVzZXI/Ll9pZCB9KTtcblxuICAgIGlmICghcGFyZW50KSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIlBhcmVudCBOb3QgRm91bmQhISFcIiB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkX2tpZHMgPSBwYXJlbnQua2lkcy5maWx0ZXIoXG4gICAgICAoa2lkKSA9PiBraWQ/Ll9pZC50b1N0cmluZygpICE9PSBpZC50b1N0cmluZygpXG4gICAgKTtcbiAgICBwYXJlbnQua2lkcyA9IHVwZGF0ZWRfa2lkcztcbiAgICBhd2FpdCBwYXJlbnQuc2F2ZSgpO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIktpZCBSZW1vdmVkIFN1Y2Nlc3NmdWxseSEhIVwiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UgfSk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFVQREFURSBLSUQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IHVwZGF0ZV9raWQgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xuICAgIGNvbnN0IHsgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBhZ2UsIGNsYXNzX25hbWUsIGdlbmRlciB9ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCBwYXJlbnQgPSBhd2FpdCBQYXJlbnRNb2RlbC5maW5kT25lKHsgdXNlcl9pZDogcmVxPy51c2VyPy5faWQgfSk7XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJQYXJlbnQgTm90IEZvdW5kISEhXCIgfSk7XG4gICAgfVxuXG4gICAgYXdhaXQgUGFyZW50TW9kZWwudXBkYXRlT25lKFxuICAgICAgeyBcImtpZHMuX2lkXCI6IGlkIH0sXG4gICAgICB7XG4gICAgICAgICRzZXQ6IHtcbiAgICAgICAgICBcImtpZHMuJC5maXJzdF9uYW1lXCI6IGZpcnN0X25hbWUsXG4gICAgICAgICAgXCJraWRzLiQubGFzdF9uYW1lXCI6IGxhc3RfbmFtZSxcbiAgICAgICAgICBcImtpZHMuJC5hZ2VcIjogYWdlLFxuICAgICAgICAgIFwia2lkcy4kLmNsYXNzX25hbWVcIjogY2xhc3NfbmFtZSxcbiAgICAgICAgICBcImtpZHMuJC5nZW5kZXJcIjogZ2VuZGVyLFxuICAgICAgICAgIFwia2lkcy4kLnByb2ZpbGVfcGljdHVyZVwiOiByZXE/LmZpbGU/LnBhdGgsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJLaWQgVXBkYXRlZCBTdWNjZXNzZnVsbHkhISFcIiB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlIH0pO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBHRVQgQUxMIEtJRCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgY29uc3QgZ2V0X2FsbF9raWQgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJlbnQgPSBhd2FpdCBQYXJlbnRNb2RlbC5maW5kT25lKHsgdXNlcl9pZDogcmVxPy51c2VyPy5faWQgfSk7XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJQYXJlbnQgTm90IEZvdW5kISEhXCIgfSk7XG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBraWRzOiBwYXJlbnQ/LmtpZHMgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvcj8ubWVzc2FnZSB9KTtcbiAgfVxufTtcbiJdfQ==