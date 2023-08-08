import React from "react";
import ListUnstyled from "./ListUnstyled";
import Description from "./Description";
import Card from "./Card";

const TechSkillSet3 = () => {
  return (
    <Card>
      <ListUnstyled>
        <li>
          <Description>Civil 3D</Description>
          <Description>Bluebeam Revu</Description>
          <Description>STAAD</Description>
          <Description>Javascript</Description>
          <Description>MongoDB</Description>
          <Description>Linux</Description>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default TechSkillSet3;
