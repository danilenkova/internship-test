import React, { useState } from "react";

import DragonGallery from "./DragonGallery";
import Modal from "../Modal";

import {
  Wrapper,
  Title,
  Info,
  InfoContent,
  Description,
  Param,
  DescriptionBox,
} from "./DragonInfo.styled";

const DragonInfo = ({ dragon }) => {
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };
  const getImage = (image) => {
    setModalImage(image);
    toggleModal();
  };

  return (
    <Wrapper>
      <Info>
        <DragonGallery
          onClick={getImage}
          collection={dragon.flickr_images}
          name={dragon.name}
        />
        <InfoContent>
          <Title>{dragon.name}</Title>
          <Param>
            <p>Height: {dragon.height_w_trunk.meters} meters</p>
            <p>Weight: {dragon.dry_mass_kg} kg</p>
            <p>
              The first flight: {new Date(dragon.first_flight).getFullYear()}
            </p>
          </Param>
          <DescriptionBox>
            <Description>{dragon.description}</Description>
            <a href={dragon.wikipedia} target="blank">
              {dragon.wikipedia}
            </a>
          </DescriptionBox>
        </InfoContent>
      </Info>
      {modal && (
        <Modal
          onClose={toggleModal}
          currentImage={modalImage}
          collection={dragon.flickr_images}
        />
      )}
    </Wrapper>
  );
};

export default DragonInfo;
