import React from "react";
import ListUnstyled from "./ListUnstyled";
import Description from "./Description";
import Card from "./Card";

const TechSkillSet4 = () => {
  return (
    <Card>
      <ListUnstyled>
        <li>
          <Description>Python (FastAPI)</Description>
          <Description>Linux</Description>
          <Description>MongoDB</Description>
          <Description>Mongoose</Description>
          <Description>React</Description>
          <Description>ASP.NET MVC</Description>
          <Description>Entity Framework Core</Description>
          <Description>Git</Description>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default TechSkillSet4;
