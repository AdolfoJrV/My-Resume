import React from "react";

const CardTitle = (props) => {
  const { children } = props;

  return <h2 className="card-title">{ children }</h2>;
};

export default CardTitle;
