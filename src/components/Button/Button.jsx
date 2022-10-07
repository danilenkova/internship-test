import { ImArrowLeft2 } from "react-icons/im";
import { GoBack } from "./Button.styled";

const Button = ({ goToMain }) => (
  <GoBack to={goToMain}>
    <ImArrowLeft2 />
    Go Back
  </GoBack>
);

export default Button;
