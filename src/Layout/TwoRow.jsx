import React from "react";
import PropTypes from "prop-types";

import SplitPane, { paneSizes, orientations } from "../SplitPane";

export const responsiveRows = {
  TOP: "top",
  BOTTOM: "bottom"
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

const mapResponsiveDataToOverlayTupel = ({ isResponsive, responsiveRow }) =>
  isResponsive
    ? responsiveRow === responsiveRows.TOP
      ? [true, false]
      : [false, true]
    : [false, false];

const mapResponsiveDataToVisibilityTupel = ({
  isResponsive,
  responsiveRow,
  isResponsiveColFocused
}) => {
  const isResponsiveColVisible = !isResponsive || isResponsiveColFocused;
  return responsiveRow === responsiveRows.TOP
    ? [isResponsiveColVisible, true]
    : [true, isResponsiveColVisible];
};

const TwoColLayout = (props) => {
  const {
    isResponsive,
    responsiveRow,
    isResponsiveColFocused,
    colsStretchBehavior,
    ...restProps
  } = props;

  const responsiveData = {
    isResponsive,
    responsiveRow,
    isResponsiveColFocused
  };

  const newProps = {
    ...restProps,
    orientation: orientations.Y,
    panesSize: mapColsStretchBehaviorsToPaneSizesTupel(colsStretchBehavior),
    panesAsOverlay: mapResponsiveDataToOverlayTupel(responsiveData),
    panesVisibility: mapResponsiveDataToVisibilityTupel(responsiveData)
  };
  return <SplitPane {...newProps} />;
};

TwoColLayout.propTypes = {
  isResponsive: PropTypes.bool,
  responsiveRow: PropTypes.oneOf(Object.values(responsiveRows)),
  isResponsiveColFocused: PropTypes.bool,
  colsStretchBehavior: PropTypes.array
};

TwoColLayout.defaultProps = {
  isResponsive: false,
  responsiveRow: responsiveRows.TOP,
  isResponsiveColFocused: false,
  colsStretchBehavior: [colStretchBehaviors.GROW, colStretchBehaviors.GROW]
};

export default TwoColLayout;
