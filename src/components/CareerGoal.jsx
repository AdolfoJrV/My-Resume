import React from "react";
import Card from "./Card";
import CardTitle from "./CardTitle";
import ListUnstyled from "./ListUnstyled";
import CardSubtitle from "./CardSubtitle";
import Description from "./Description";

const CareerGoal = () => {
  return (
    <Card>
      <CardTitle>Career Goal</CardTitle>
      <ListUnstyled>
        <li>
          <CardSubtitle>Summary</CardSubtitle>
          <Description>
            My goal is to bring growth to the company by combining my extensive
            experience as a civil-structural designer, spanning over 10 years,
            with my passion for software development. I aspire to become a
            skilled software developer, leveraging my existing knowledge in the
            field to excel in creating innovative and efficient solutions. As I
            progress in my journey, my aim is to specialize in backend
            development, transitioning into the role of a software engineer. By
            focusing on backend technologies, I strive to contribute to the
            development of robust and scalable software systems that drive
            technological advancements and positively impact the lives of users.
          </Description>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default CareerGoal;
