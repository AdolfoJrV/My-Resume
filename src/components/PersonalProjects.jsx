import React from "react";
import Card from "./Card";
import CardTitle from "./CardTitle";
import ListUnstyled from "./ListUnstyled";
import CardSubtitle from "./CardSubtitle";
import Description from "./Description";

const PersonalProjects = () => {
  return (
    <Card>
      <CardTitle>Personal Projects</CardTitle>
      <ListUnstyled>
        <li>
          <CardSubtitle>AI & Neural Network</CardSubtitle>
          <Description>
            Built a simple neural network and an artificial intelligence that
            can recognize handwritten numbers utilizing python library (i.e.
            numpy, matplotlib).
          </Description>
        </li>
        <li>
          <CardSubtitle>Simon Game</CardSubtitle>
          <Description>
            Built a simon game using HTML, CSS, and Javascript.
          </Description>
        </li>
        <li>
          <CardSubtitle>Dice Game</CardSubtitle>
          <Description>
            Built a simple dice game using HTML, CSS, and Javascript.
          </Description>
        </li>
        <li>
          <CardSubtitle>Alien Invasion Game</CardSubtitle>
          <Description>
            Built a simple alien invasion game utlizing python dyango library.
          </Description>
        </li>
        <li>
          <CardSubtitle>To-Do-List</CardSubtitle>
          <Description>
            Built a to-do-list app utilizing React, MongoDB and Mongoose for
            data management.
          </Description>
        </li>
        <li>
          <CardSubtitle>Newsletter-Signup Form</CardSubtitle>
          <Description>
            Built a sign-up form implement OAuth security and deployed it using
            Heroku.
          </Description>
        </li>
        <li>
          <CardSubtitle>Blockchain</CardSubtitle>
          <Description>
            Implemented a simple blockchain using Javascript and node modules
            (i.e. crypto-js, elliptic, inherits, etc.).
          </Description>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default PersonalProjects;
