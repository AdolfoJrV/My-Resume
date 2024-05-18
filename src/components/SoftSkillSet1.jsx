import React from "react";
import ListUnstyled from "./ListUnstyled";
import Description from "./Description";
import Card from "./Card";

const SoftSkillSet1 = () => {
  return (
    <Card>
      <ListUnstyled>
        <li>
          <Description>Leadership</Description>
          <Description>Problem-Solving</Description>
          <Description>Critical Thinking</Description>
          <Description>Conflict Resolution</Description>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default SoftSkillSet1;
