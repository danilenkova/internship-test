import React from "react";
import { Link } from "react-router-dom";

import {
  Wrapper,
  List,
  ListItem,
  ImgWrapper,
  Image,
  Name,
} from "./DragonsList.styled";

const DragonsList = ({ dragons, location }) => {
  return (
    <Wrapper>
      {dragons && (
        <List>
          {dragons.map((item) => (
            <ListItem key={item.id}>
              <Link to={`/dragon/${item.id}`} state={{ from: location }}>
                <ImgWrapper>
                  <Image src={item.flickr_images[0]} alt={item.name} />
                  <Name>{item.name}</Name>
                </ImgWrapper>
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

export default DragonsList;
