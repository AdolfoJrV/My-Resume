import React from "react";
import ListUnstyled from "./ListUnstyled";
import Description from "./Description";
import Card from "./Card";

const TechSkillSet2 = () => {
  return (
    <Card>
      <ListUnstyled>
        <li>
          <Description>Autodesk Revit</Description>
          <Description>Navisworks</Description>
          <Description>Risa 3D</Description>
          <Description>CSS</Description>
          <Description>Express.js</Description>
          <Description>Python</Description>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default TechSkillSet2;
