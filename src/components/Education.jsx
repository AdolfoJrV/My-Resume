import React from "react";
import Card from "./Card";
import CardTitle from "./CardTitle";
import ListUnstyled from "./ListUnstyled";
import CardSubtitle from "./CardSubtitle";
import Description from "./Description";

const Education = () => {
  return (
    <Card>
      <CardTitle>Education</CardTitle>
      <ListUnstyled>
        <li>
          <CardSubtitle>
            Full Stack Software Developer | Current
          </CardSubtitle>
          <Description>Southern Alberta Institute of Technology (SAIT)</Description>
        </li>
        <li>
          <CardSubtitle>Engineering Design and Drafting Technology (EDDT) | 2020-2021</CardSubtitle>
          <Description>Southern Alberta Institute of Technology (SAIT)</Description>
        </li>
        <li>
        <CardSubtitle>Petroleum Land Administration | 2019</CardSubtitle>
        <Description>Soutthern Alberta Institute of Technoclogy (SAIT)</Description>
        </li>
        <li>
        <CardSubtitle>Bachelor's Degree in Civil Engineering | 1990-1995</CardSubtitle>
        <Description>University of Santo Tomas (UST)</Description>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default Education;
