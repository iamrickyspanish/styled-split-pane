import React from "react";
import PropTypes from "prop-types";

import SplitPane, { paneSizes, orientations } from "../SplitPane";

export const responsiveCols = {
  LEFT: "left",
  RIGHT: "right"
};

export const colStretchBehaviors = {
  SHRINK: "shrink",
  GROW: "grow"
};

const mapColStretchBehaviorToPaneSize = (colStretchBehavior) => {
  switch (colStretchBehavior) {
    case colStretchBehaviors.SHRINK:
      return paneSizes.AUTO;
    case colStretchBehaviors.GROW:
    default:
      return paneSizes.FULL;
  }
};

const mapColsStretchBehaviorsToPaneSizesTupel = (colsStretchBehaviors) => {
  return [
    mapColStretchBehaviorToPaneSize(colsStretchBehaviors[0]),
    mapColStretchBehaviorToPaneSize(colsStretchBehaviors[1])
  ];
};

const mapResponsiveDataToOverlayTupel = ({ isResponsive, responsiveCol }) =>
  isResponsive
    ? responsiveCol === responsiveCols.LEFT
      ? [true, false]
      : [false, true]
    : [false, false];

const mapResponsiveDataToVisibilityTupel = ({
  isResponsive,
  responsiveCol,
  isResponsiveColFocused
}) => {
  const isResponsiveColVisible = !isResponsive || isResponsiveColFocused;
  return responsiveCol === responsiveCols.LEFT
    ? [isResponsiveColVisible, true]
    : [true, isResponsiveColVisible];
};

const TwoColLayout = (props) => {
  const {
    isResponsive,
    responsiveCol,
    isResponsiveColFocused,
    colsStretchBehavior,
    ...restProps
  } = props;

  const responsiveData = {
    isResponsive,
    responsiveCol,
    isResponsiveColFocused
  };

  const newProps = {
    ...restProps,
    orientation: orientations.X,
    panesSize: mapColsStretchBehaviorsToPaneSizesTupel(colsStretchBehavior),
    panesAsOverlay: mapResponsiveDataToOverlayTupel(responsiveData),
    panesVisibility: mapResponsiveDataToVisibilityTupel(responsiveData)
  };
  return <SplitPane {...newProps} />;
};

TwoColLayout.propTypes = {
  isResponsive: PropTypes.bool,
  responsiveCol: PropTypes.oneOf(Object.values(responsiveCols)),
  isResponsiveColFocused: PropTypes.bool,
  colsStretchBehavior: PropTypes.array
};

TwoColLayout.defaultProps = {
  isResponsive: false,
  responsiveCol: responsiveCols.LEFT,
  isResponsiveColFocused: false,
  colsStretchBehavior: [colStretchBehaviors.GROW, colStretchBehaviors.GROW]
};

export default TwoColLayout;
