"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _plainButtonModule = _interopRequireDefault(require("./plain-button.module.scss"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const PlainButton = _ref => {
  let {
    isActive,
    isDisabled,
    children,
    clickEvent,
    defaultClass,
    activeClass,
    buttonColor,
    className,
    style
  } = _ref;

  /**
   * DOM элемент для сняти фокуса
   * @type {React.MutableRefObject<undefined>}
   */
  const buttonElement = (0, _react.useRef)();
  return /*#__PURE__*/_react.default.createElement("button", {
    ref: buttonElement,
    style: _objectSpread(_objectSpread({}, style), {}, {
      opacity: isDisabled ? "0.5" : "1"
    }),
    disabled: isDisabled,
    onClick: () => {
      clickEvent();
      buttonElement.current.focus();
    },
    className: "".concat(_plainButtonModule.default.button__default__D015, " ").concat(isActive ? "".concat(_plainButtonModule.default.button__active__D015, " ").concat(activeClass) : defaultClass, " ").concat(className, " button__regular-text"),
    onMouseLeave: () => buttonElement.current.blur()
  }, children);
};

PlainButton.propTypes = {
  /**
   * статус активности
   */
  isActive: _propTypes.default.bool,

  /**
   * статус блокировки
   */
  isDisabled: _propTypes.default.bool,

  /**
   * DOM элементы внутри кнопки
   */
  children: _propTypes.default.node,

  /**
   * событие по клику
   */
  clickEvent: _propTypes.default.func,

  /**
   * Класс неактивной кнопки
   */
  defaultClass: _propTypes.default.string,

  /**
   * Класс активной кнопки
   */
  activeClass: _propTypes.default.string,

  /**
   * Выбор цвета кнопки
   */
  buttonColor: _propTypes.default.string,

  /**
   * Простой класс кнопки
   */
  className: _propTypes.default.string,

  /**
   * Стили через JSX
   */
  style: _propTypes.default.object
};
PlainButton.defaultProps = {
  isActive: false,
  isDisabled: false,
  children: null,
  clickEvent: () => null,
  defaultStyles: {},
  activeStyles: {},
  defaultClass: "",
  activeClass: "",
  buttonColor: "",
  className: "black",
  style: {}
};
var _default = PlainButton;
exports.default = _default;