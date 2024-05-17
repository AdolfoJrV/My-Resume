import React from "react";
import ListUnstyled from "./ListUnstyled";
import Description from "./Description";
import Card from "./Card";

const TechSkillSet1 = () => {
  return (
    <Card>
      <ListUnstyled>
        <li>
          <Description>ETABS</Description>
          <Description>STAAD</Description>
          <Description>SAFE</Description>
          <Description>Risa 3D</Description>
          <Description>ArcGIS</Description>
          <Description>Bluebeam Revu</Description>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default TechSkillSet1;
