import React from "react";

import "./styles.css";

function Button({ children, ...rest }) {
  return <button {...rest}>{children}</button>;
}

export default Button;
