import React from "react";

const Card = (props) => {
  const { children } = props;

  return (
    <div className="col-md">
      <div className="card">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Card;
