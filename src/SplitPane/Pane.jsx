import PropTypes from "prop-types";
import styled from "styled-components";

export const slideDirections = Object.freeze({
  UP: "up",
  DOWN: "down",
  RIGHT: "right",
  LEFT: "left"
});

export const sizes = Object.freeze({
  AUTO: "auto",
  FULL: "full"
});

const mapSlideDirectionToOffset = (slideDirection) => {
  switch (slideDirection) {
    case slideDirections.DOWN:
    case slideDirections.RIGHT:
      return "+100%";
    case slideDirections.UP:
    case slideDirections.LEFT:
      return "-100%";
    default:
      return 0;
  }
};

const mapPropsToDimensions = ({ slideDirection, isVisible, size }) => {
  switch (slideDirection) {
    case slideDirections.LEFT:
    case slideDirections.RIGHT:
      return `
        height: 100%;
        width: ${size === sizes.FULL ? "100%" : "auto"};
        max-width: ${isVisible ? "9000px" : "0"};
      `;
    case slideDirections.UP:
    case slideDirections.DOWN:
      return `
        width: 100%;
        // height: ${size === sizes.FULL ? "100%" : "auto"};
        max-height: ${isVisible ? "5000px" : "0"};
      `;
    default:
      return "";
  }
};

const mapSizeToFlexProps = (size) => {
  switch (size) {
    case sizes.FULL:
      return "flex-shrink : 0";
    default:
      return "";
  }
};

const overlayStyles = (props) => `
  position: absolute;
  top: 0;
  ${props.slideDirection}: 0;
  z-index: 200;
`;

const mapSlideDirectionToTranslateAttribute = (slideDirection) => {
  switch (slideDirection) {
    case slideDirections.UP:
    case slideDirections.DOWN:
      return "translateY";
    case slideDirections.LEFT:
    case slideDirections.RIGHT:
      return "translateX";
    default:
      return "translate";
  }
};

const Pane = styled.div`
  align-content: space-between;
  background-color: inherit;
  min-height: 0;
  ${(props) => (props.size === sizes.FULL ? "flex: 1;" : "")}
  display: flex;
  flex-direction: column;
  position:relative;
  ${(props) => props.asOverlay && overlayStyles(props)}
transform: ${(props) =>
  mapSlideDirectionToTranslateAttribute(props.slideDirection)}(${(props) =>
  !props.isVisible ? mapSlideDirectionToOffset(props.slideDirection) : 0});
  transition: all 0.25s ease-in-out;
  ${mapPropsToDimensions};
  /* ${(props) => mapSizeToFlexProps(props.size)} */
  overflow: ${(props) => (props.asOverlay ? "hidden" : "visible")};
`;

Pane.propTypes = {
  asOverlay: PropTypes.bool,
  slideDirection: PropTypes.oneOf(Object.values(slideDirections)).isRequired,
  isVisible: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(sizes))
};

Pane.defaultProps = {
  asOverlay: false,
  isVisible: true,
  size: sizes.FULL
};

export default Pane;
