import PropTypes from "prop-types";
import { useRef } from "react";
import React from "react";

import classes from "./plain-button.scss";

const PlainButton = ({ isActive, isDisabled, children, clickEvent, defaultClass, activeClass, buttonColor, className, style }) => {
	/**
	 * DOM элемент для сняти фокуса
	 * @type {React.MutableRefObject<undefined>}
	 */
	const buttonElement = useRef();

	return (
		<button
			ref={buttonElement}
			style={{
				...style,
				opacity: isDisabled ? "0.5" : "1",
			}}
			disabled={isDisabled}
			onClick={() => {
				clickEvent();
				buttonElement.current.focus();
			}}
			className={`${classes.button__default__D015} ${
				isActive ? `${classes.button__active__D015} ${activeClass}` : defaultClass
			} ${className} button__regular-text`}
			onMouseLeave={() => buttonElement.current.blur()}
		>
			{children}
		</button>
	);
};

PlainButton.propTypes = {
	/**
	 * статус активности
	 */
	isActive: PropTypes.bool,
	/**
	 * статус блокировки
	 */
	isDisabled: PropTypes.bool,
	/**
	 * DOM элементы внутри кнопки
	 */
	children: PropTypes.node,
	/**
	 * событие по клику
	 */
	clickEvent: PropTypes.func,
	/**
	 * Класс неактивной кнопки
	 */
	defaultClass: PropTypes.string,
	/**
	 * Класс активной кнопки
	 */
	activeClass: PropTypes.string,
	/**
	 * Выбор цвета кнопки
	 */
	buttonColor: PropTypes.string,
	/**
	 * Простой класс кнопки
	 */
	className: PropTypes.string,
	/**
	 * Стили через JSX
	 */
	style: PropTypes.object,
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
	style: {},
};

export default PlainButton;
