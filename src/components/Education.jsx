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
            Computer Science / University Name 2001-2004
          </CardSubtitle>
          <Description>
            Sed et ornare quam. Cras scelerisque ex ultricies neque sodales
            tristique. Phasellus mattis dui ut enim tincidunt auctor. Maecenas
            euismod, orci eget varius elementum, nunc massa dignissim sapien, ac
            sagittis libero dolor vitae elit.
          </Description>
        </li>
        <li>
          <CardSubtitle>Testville High School 1994-2000</CardSubtitle>
          <Description>
            Aenean nisl enim, dictum in odio ut, suscipit efficitur diam. Nam
            nec velit a odio porta efficitur nec at magna.
          </Description>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default Education;
