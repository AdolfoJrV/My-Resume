import React from "react";

const Row = (props) => {
  const { children } = props;

  return <div className="row mt-2">{children}</div>;
};

export default Row;
