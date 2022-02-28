"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _tabButtonModule = _interopRequireDefault(require("./tab-button.module.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TabButton = _ref => {
  let {
    isActive = false,
    clickEvent = () => null,
    className = "",
    text
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_tabButtonModule.default.tab__container, " ").concat(className, " ").concat(isActive ? _tabButtonModule.default.active__class : '', " font-bold")
  }, text);
};

TabButton.propTypes = {
  isActive: _propTypes.default.bool,
  clickEvent: _propTypes.default.func,
  className: _propTypes.default.string,
  text: _propTypes.default.string
};
var _default = TabButton;
exports.default = _default;