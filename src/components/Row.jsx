import React from "react";

const Row = (props) => {
  const { children } = props;

  return <div className="row mt-3">{children}</div>;
};

export default Row;
