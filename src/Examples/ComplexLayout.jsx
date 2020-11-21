import React, { useState, useCallback } from "react";

import { Box } from "reflexbox";

import TwoColLayout, {
  responsiveCols,
  colStretchBehaviors
} from "../Layout/TwoCol";

import TwoRowLayout, {
  responsiveRows,
  rowStretchBehaviors
} from "../Layout/TwoRow";

const ComplexLayoutExample = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarVisible(!isSidebarVisible);
  }, [isSidebarVisible]);

  return (
    <TwoColLayout
      isResponsive
      responsiveCol={responsiveCols.LEFT}
      isResponsiveColFocused={isSidebarVisible}
      colsStretchBehavior={[
        colStretchBehaviors.SHRINK,
        colStretchBehaviors.GROW
      ]}
    >
      <Box p={2}>
        Sidebar
        <br />
        <button onClick={toggleSidebar}>close</button>
      </Box>
      <Box>
        <Box>
          <button onClick={toggleSidebar}>open sidebar</button> HEADER
        </Box>
        <Box>Click to see more</Box>
        <TwoRowLayout isResponsive responsiveRow={responsiveRows.TOP}>
          <Box flex={1} minHeight={0}></Box>
        </TwoRowLayout>
      </Box>
    </TwoColLayout>
  );
};

export default ComplexLayoutExample;
