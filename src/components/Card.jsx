import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Card = (props) => {
  const { children } = props;
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="col-md mb-3">
      <div className={isDarkMode ? "card-dm" : "card"}>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Card;
