import React from "react";
import Card from "./Card";
import CardTitle from "./CardTitle";
import ListUnstyled from "./ListUnstyled";
import CardSubtitle from "./CardSubtitle";
import Row from "./Row";
import TechSkillSet1 from "./TechSkillSet1";
import TechSkillSet2 from "./TechSkillSet2";
import TechSkillSet3 from "./TechSkillSet3";
import TechSkillSet4 from "./TechSkillSet4";
import SoftSkillSet1 from "./SoftSkillSet1";
import SoftSkillSet2 from "./SoftSkillSet2";
import SoftSkillSet3 from "./SoftSkillSet3";

const Skills = () => {
  return (
    <Card>
      <CardTitle>Skills</CardTitle>
      <ListUnstyled>
        <li>
          <CardSubtitle>Technical Skills</CardSubtitle>
          <Row>
            <TechSkillSet1 />
            <TechSkillSet2 />
            <TechSkillSet3 />
            <TechSkillSet4 />
          </Row>
        </li>
      </ListUnstyled>
      <ListUnstyled>
        <li>
          <CardSubtitle>Soft Skills</CardSubtitle>
          <Row>
            <SoftSkillSet1 />
            <SoftSkillSet2 />
            <SoftSkillSet3 />
          </Row>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default Skills;
