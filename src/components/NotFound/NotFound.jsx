import Dragon from "../../assets/images/dragon.jpg";
import { Wrapper, ImageWrapper, Text } from "./NotFound.styled";

const NotFound = () => (
  <Wrapper>
    <ImageWrapper>
      <img src={Dragon} alt="Dragon" />
    </ImageWrapper>
    <Text>Something went wrong...</Text>
  </Wrapper>
);

export default NotFound;
