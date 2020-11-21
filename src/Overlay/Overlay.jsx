import styled from "styled-system";
import PropTypes from "prop-types";

export const scopes = {
  GLOBAL: "global",
  LOCAL: "local"
};

const mapScopeToPosition = (overlay) =>
  overlay === scopes.LOCAL ? "absolute" : "fixed";

const Overlay = styled.div`
  position: ${(props) => mapScopeToPosition(props.scope)};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

Overlay.propTypes = {
  scope: PropTypes.oneOf(Object.values(scopes))
};

Overlay.defaultProps = {
  scope: scopes.GLOBAL
};

export default Overlay;
