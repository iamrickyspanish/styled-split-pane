import React from "react";
import PropTypes from "prop-types";

import SplitPane, { paneSizes, orientations } from "../SplitPane";

export const responsiveRows = {
  TOP: "top",
  BOTTOM: "bottom"
};

export const rowStretchBehaviors = {
  SHRINK: "shrink",
  GROW: "grow"
};

const mapRowStretchBehaviorToPaneSize = (colStretchBehavior) => {
  switch (colStretchBehavior) {
    case rowStretchBehaviors.SHRINK:
      return paneSizes.AUTO;
    case rowStretchBehaviors.GROW:
    default:
      return paneSizes.FULL;
  }
};

const mapRowsStretchBehaviorsToPaneSizesTupel = (rowsStretchBehaviors) => {
  return [
    mapRowStretchBehaviorToPaneSize(rowsStretchBehaviors[0]),
    mapRowStretchBehaviorToPaneSize(rowsStretchBehaviors[1])
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
  isResponsiveRowFocused
}) => {
  const isResponsiveRowVisible = !isResponsive || isResponsiveRowFocused;
  return responsiveRow === responsiveRows.TOP
    ? [isResponsiveRowVisible, true]
    : [true, isResponsiveRowVisible];
};

const TwoColLayout = (props) => {
  const {
    isResponsive,
    responsiveRow,
    isResponsiveRowFocused,
    rowsStretchBehavior,
    ...restProps
  } = props;

  const responsiveData = {
    isResponsive,
    responsiveRow,
    isResponsiveRowFocused
  };

  const newProps = {
    ...restProps,
    orientation: orientations.Y,
    panesSize: mapRowsStretchBehaviorsToPaneSizesTupel(rowsStretchBehavior),
    panesAsOverlay: mapResponsiveDataToOverlayTupel(responsiveData),
    panesVisibility: mapResponsiveDataToVisibilityTupel(responsiveData)
  };
  return <SplitPane {...newProps} />;
};

TwoColLayout.propTypes = {
  isResponsive: PropTypes.bool,
  responsiveRow: PropTypes.oneOf(Object.values(responsiveRows)),
  isResponsiveColFocused: PropTypes.bool,
  rowsStretchBehavior: PropTypes.array
};

TwoColLayout.defaultProps = {
  isResponsive: false,
  responsiveRow: responsiveRows.TOP,
  isResponsiveRowFocused: false,
  rowsStretchBehavior: [rowStretchBehaviors.GROW, rowStretchBehaviors.GROW]
};

export default TwoColLayout;
