import React from "react";
import ListUnstyled from "./ListUnstyled";
import Description from "./Description";
import Card from "./Card";

const SoftSkillSet2 = () => {
  return (
    <Card>
      <ListUnstyled>
        <li>
          <Description>Communication</Description>
          <Description>Adaptability</Description>
          <Description>Creativity</Description>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default SoftSkillSet2;
