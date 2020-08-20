import React from "react";
import classnames from "classnames";

import styles from "./paginatorButton.module.css";

export const PaginatorButton = ({
  children, onClick, isActive, disabled,
}) => (
  <button
    className={classnames(styles.button, { [styles.button__active]: isActive })}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
