import React, { useMemo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Pane, { slideDirections, sizes as paneSizes } from "./Pane";

export const orientations = {
  X: "x",
  Y: "y"
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
  flex-direction: ${(props) =>
    props.orientation === orientations.Y ? "column" : "row"};
`;

Wrapper.propTypes = {
  orientation: PropTypes.oneOf(Object.values(orientations)).isRequired
};

const SplitPaneLayout = (props) => {
  const {
    orientation,
    children,
    panesVisibility,
    panesAsOverlay,
    panesSize,
    ...restProps
  } = props;

  const [paneAContent, paneBContent] = Array.isArray(children) ? children : [];

  const [isPaneAVisible, isPaneBVisible] = panesVisibility;
  const [isPaneAOverlay, isPaneBOverlay] = panesAsOverlay;
  const [paneASize, paneBSize] = panesSize;

  const renderedPaneA = useMemo(() => {
    if (!paneAContent) return null;
    return (
      <Pane
        asOverlay={isPaneAOverlay}
        slideDirection={
          orientation === orientations.Y
            ? slideDirections.UP
            : slideDirections.LEFT
        }
        isVisible={isPaneAVisible}
        size={paneASize}
      >
        {paneAContent}
      </Pane>
    );
  }, [paneAContent, isPaneAVisible, orientation, isPaneAOverlay, paneASize]);

  const renderedPaneB = useMemo(() => {
    if (!paneBContent) return null;
    return (
      <Pane
        asOverlay={isPaneBOverlay}
        slideDirection={
          orientation === orientations.Y
            ? slideDirections.DOWN
            : slideDirections.RIGHT
        }
        isVisible={isPaneBVisible}
        size={paneBSize}
      >
        {paneBContent}
      </Pane>
    );
  }, [paneBContent, isPaneBVisible, orientation, isPaneBOverlay, paneBSize]);

  const newProps = {
    ...restProps,
    orientation
  };

  return (
    <Wrapper {...newProps}>
      {renderedPaneA}
      {renderedPaneB}
    </Wrapper>
  );
};

SplitPaneLayout.propTypes = {
  orientation: PropTypes.oneOf(Object.values(orientations)),
  panesVisibility: PropTypes.arrayOf(PropTypes.bool),
  panesAsOverlay: PropTypes.arrayOf(PropTypes.bool),
  panesSize: PropTypes.arrayOf(PropTypes.oneOf(Object.values(paneSizes)))
};

SplitPaneLayout.defaultProps = {
  orientation: orientations.X,
  panesVisibility: [true, true],
  panesAsOverlay: [false, false],
  panesSize: [paneSizes.FULL, paneSizes.FULL]
};

export default SplitPaneLayout;
