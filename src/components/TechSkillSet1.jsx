import React from "react";
import ListUnstyled from "./ListUnstyled";
import Description from "./Description";
import Card from "./Card";

const TechSkillSet3 = () => {
  return (
    <Card>
      <ListUnstyled>
        <li>
          <Description>HTML</Description>
          <Description>CSS / Sass</Description>
          <Description>Javascript</Description>
          <Description>Node.js</Description>
          <Description>Express.js</Description>
          <Description>SQL</Description>
          <Description>Postman / Swagger</Description>
          <Description>Bootstrap</Description>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default TechSkillSet3;
