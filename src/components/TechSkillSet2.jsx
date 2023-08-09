import React from "react";
import ListUnstyled from "./ListUnstyled";
import Description from "./Description";
import Card from "./Card";

const TechSkillSet2 = () => {
  return (
    <Card>
      <ListUnstyled>
        <li>
          <Description>Civil 3D</Description>
          <Description>Bluebeam Revu</Description>
          <Description>STAAD</Description>
          <Description>CADWorx</Description>
          <Description>ETABS</Description>
          <Description>Photoshop/Canva</Description>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default TechSkillSet2;
