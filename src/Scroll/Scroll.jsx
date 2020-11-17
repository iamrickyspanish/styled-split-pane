import styled from "styled-components";
import PropTypes from "prop-types";

export const directions = {
  X: "x",
  Y: "y"
};

const Scrollable = styled.div`
  overflow-x: ${props =>
    props.directions.includes(directions.X) ? "auto" : "hidden"};
  overflow-y: ${props =>
    props.directions.includes(directions.Y) ? "auto" : "hidden"};
`;

Scrollable.propTypes = {
  directions: PropTypes.arrayOf[Object.values(directions)]
};

Scrollable.defaultProps = {
  directions: [directions.Y]
};

export default Scrollable;
