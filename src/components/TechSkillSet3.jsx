import React from "react";
import ListUnstyled from "./ListUnstyled";
import Description from "./Description";
import Card from "./Card";

const TechSkillSet1 = () => {
  return (
    <Card>
      <ListUnstyled>
        <li>
          <Description>AutoCAD</Description>
          <Description>ArcGIS</Description>
          <Description>SAFE</Description>
          <Description>Autodesk Revit</Description>
          <Description>Navisworks</Description>
          <Description>Risa 3D</Description>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default TechSkillSet1;
