import React from "react";

const ListUnstyled = (props) => {
  const { children } = props;

  return <ul className="list-unstyled">{children}</ul>;
};

export default ListUnstyled;
