import React from "react";

const Description = (props) => {
  const { children } = props;
  const paragraphStyle = {
    textAlign: 'justify',
  };

  return <p style={paragraphStyle}>{children}</p>;
};

export default Description;
