import React from "react";
import Card from "./Card";
import CardTitle from "./CardTitle";
import ListUnstyled from "./ListUnstyled";
import CardSubtitle from "./CardSubtitle";
import Description from "./Description";

const TechnologySummary = () => {
  return (
    <Card>
      <CardTitle>Technology Summary</CardTitle>
      <ListUnstyled>
        <li>
          <CardSubtitle>
            Senior Web Developer / Digital Agency 2016-2020
          </CardSubtitle>
          <Description>
            Phasellus et tellus iaculis, interdum augue vel, luctus nulla.
            Aenean viverra, magna a ultricies elementum, dui mi tristique
            ligula, non euismod leo mauris ac metus.
          </Description>
        </li>
        <li>
          <CardSubtitle>Web Developer / Big Firm 2010-2015</CardSubtitle>
          <Description>
            Mauris volutpat, ex condimentum fringilla imperdiet, nulla turpis
            semper diam, ac semper risus urna quis libero. Fusce non nunc quam.
            Ut vulputate, magna eget molestie luctus, elit est posuere lorem,
            quis dapibus dolor felis id mi.
          </Description>
        </li>
        <li>
          <CardSubtitle>
            Junior Web Developer / Websites 'R' Us 2004-2009
          </CardSubtitle>
          <Description>
            Sed eu turpis placerat, posuere odio a, viverra velit. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas.
          </Description>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default TechnologySummary;
