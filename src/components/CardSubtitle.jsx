import React from "react";

const CardSubtitle = (props) => {
  const { children } = props;
  return <h6 className="fw-bold">{children}</h6>;
};

export default CardSubtitle;
