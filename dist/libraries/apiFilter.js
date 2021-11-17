"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var APIFilter = /*#__PURE__*/function () {
  function APIFilter(document, query) {
    (0, _classCallCheck2["default"])(this, APIFilter);
    this.document = document;
    this.query = query;
  }

  (0, _createClass2["default"])(APIFilter, [{
    key: "tutor_language",
    value: function tutor_language() {
      var keywords = this.query.tutor_language && {
        teach_language: {
          $regex: this.query.tutor_language,
          $options: "i"
        }
      };
      this.document = this.document.find(_objectSpread({}, keywords));
      return this;
    }
  }, {
    key: "main_field",
    value: function main_field() {
      var keywords = this.query.main_field && {
        teach_language: {
          $regex: this.query.main_field,
          $options: "i"
        }
      };
      this.document = this.document.find(_objectSpread({}, keywords));
      return this;
    }
  }]);
  return APIFilter;
}();

module.exports = APIFilter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJyYXJpZXMvYXBpRmlsdGVyLmpzIl0sIm5hbWVzIjpbIkFQSUZpbHRlciIsImRvY3VtZW50IiwicXVlcnkiLCJrZXl3b3JkcyIsInR1dG9yX2xhbmd1YWdlIiwidGVhY2hfbGFuZ3VhZ2UiLCIkcmVnZXgiLCIkb3B0aW9ucyIsImZpbmQiLCJtYWluX2ZpZWxkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsUztBQUNKLHFCQUFZQyxRQUFaLEVBQXNCQyxLQUF0QixFQUE2QjtBQUFBO0FBQzNCLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7V0EwQkQsMEJBQWlCO0FBQ2YsVUFBTUMsUUFBUSxHQUFHLEtBQUtELEtBQUwsQ0FBV0UsY0FBWCxJQUE2QjtBQUM1Q0MsUUFBQUEsY0FBYyxFQUFFO0FBQ2RDLFVBQUFBLE1BQU0sRUFBRSxLQUFLSixLQUFMLENBQVdFLGNBREw7QUFFZEcsVUFBQUEsUUFBUSxFQUFFO0FBRkk7QUFENEIsT0FBOUM7QUFPQSxXQUFLTixRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY08sSUFBZCxtQkFBd0JMLFFBQXhCLEVBQWhCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OztXQXRCRCxzQkFBYTtBQUNYLFVBQU1BLFFBQVEsR0FBRyxLQUFLRCxLQUFMLENBQVdPLFVBQVgsSUFBeUI7QUFDeENKLFFBQUFBLGNBQWMsRUFBRTtBQUNkQyxVQUFBQSxNQUFNLEVBQUUsS0FBS0osS0FBTCxDQUFXTyxVQURMO0FBRWRGLFVBQUFBLFFBQVEsRUFBRTtBQUZJO0FBRHdCLE9BQTFDO0FBT0EsV0FBS04sUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNPLElBQWQsbUJBQXdCTCxRQUF4QixFQUFoQjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7OztBQWVITyxNQUFNLENBQUNDLE9BQVAsR0FBaUJYLFNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQVBJRmlsdGVyIHtcbiAgY29uc3RydWN0b3IoZG9jdW1lbnQsIHF1ZXJ5KSB7XG4gICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50O1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHR1dG9yX2xhbmd1YWdlKCkge1xuICAgIGNvbnN0IGtleXdvcmRzID0gdGhpcy5xdWVyeS50dXRvcl9sYW5ndWFnZSAmJiB7XG4gICAgICB0ZWFjaF9sYW5ndWFnZToge1xuICAgICAgICAkcmVnZXg6IHRoaXMucXVlcnkudHV0b3JfbGFuZ3VhZ2UsXG4gICAgICAgICRvcHRpb25zOiBcImlcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuZG9jdW1lbnQgPSB0aGlzLmRvY3VtZW50LmZpbmQoeyAuLi5rZXl3b3JkcyB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1haW5fZmllbGQoKSB7XG4gICAgY29uc3Qga2V5d29yZHMgPSB0aGlzLnF1ZXJ5Lm1haW5fZmllbGQgJiYge1xuICAgICAgdGVhY2hfbGFuZ3VhZ2U6IHtcbiAgICAgICAgJHJlZ2V4OiB0aGlzLnF1ZXJ5Lm1haW5fZmllbGQsXG4gICAgICAgICRvcHRpb25zOiBcImlcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuZG9jdW1lbnQgPSB0aGlzLmRvY3VtZW50LmZpbmQoeyAuLi5rZXl3b3JkcyB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHR1dG9yX2xhbmd1YWdlKCkge1xuICAgIGNvbnN0IGtleXdvcmRzID0gdGhpcy5xdWVyeS50dXRvcl9sYW5ndWFnZSAmJiB7XG4gICAgICB0ZWFjaF9sYW5ndWFnZToge1xuICAgICAgICAkcmVnZXg6IHRoaXMucXVlcnkudHV0b3JfbGFuZ3VhZ2UsXG4gICAgICAgICRvcHRpb25zOiBcImlcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuZG9jdW1lbnQgPSB0aGlzLmRvY3VtZW50LmZpbmQoeyAuLi5rZXl3b3JkcyB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFQSUZpbHRlcjtcbiJdfQ==