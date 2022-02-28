import React from "react";
import classes from "./tab-button.module.scss";
import PropTypes from "prop-types";

const TabButton = ({
    isActive= false,
    clickEvent = () => null,
    className = "",
    text
}) => {

    return (
        <div className={`${classes.tab__container__D015} ${className} ${isActive ? classes.active__class__D015 : ''} font-bold`}>
            {text}
        </div>
    )
};

TabButton.propTypes = {
    isActive: PropTypes.bool,
    clickEvent: PropTypes.func,
    className: PropTypes.string,
    text: PropTypes.string
}

export default TabButton;
