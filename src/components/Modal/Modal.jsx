import { useEffect } from "react";
import PortalReactDOM from "react-dom";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Overlay, ModalImage } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ collection, currentImage, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return PortalReactDOM.createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Carousel
        className="presentation-mode"
        autoFocus={true}
        centerSlidePercentage={100}
        infiniteLoop={true}
        renderIndicator={false}
        useKeyboardArrows
        selectedItem={collection.indexOf(currentImage)}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        {collection.map((item) => {
          return <ModalImage key={item} src={item} alt={item} />;
        })}
      </Carousel>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  collection: PropTypes.array.isRequired,
  currentImage: PropTypes.string.isRequired,
};

export default Modal;
