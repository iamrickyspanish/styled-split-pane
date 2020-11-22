import React, { useState, useCallback } from "react";

import { Box, Flex } from "reflexbox";

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
  const [isDetailsVisible, setDetailsVisible] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarVisible(!isSidebarVisible);
  }, [isSidebarVisible]);

  const toggleDetails = useCallback(() => {
    setDetailsVisible(!isDetailsVisible);
  }, [isDetailsVisible]);

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
      <Box
        width="200px"
        p={2}
        flex={1}
        minHeight={0}
        style={{ borderRight: "1px solid black" }}
      >
        Sidebar
        <br />
        <button onClick={toggleSidebar}>close</button>
      </Box>
      <Flex flexDirection="column" flex={1} minHeight={0} bg="white">
        <Box p={2} style={{ borderBottom: "1px solid black" }}>
          <button onClick={toggleSidebar}>open sidebar</button> HEADER
        </Box>
        <Box p={2}>
          Click to see details{" "}
          <button onClick={toggleDetails}>
            {isDetailsVisible ? "close" : "open"} details
          </button>
        </Box>
        <TwoRowLayout
          isResponsive
          responsiveRow={responsiveRows.TOP}
          isResponsiveRowFocused={isDetailsVisible}
        >
          <Box
            flex={1}
            minHeight={0}
            style={{ borderBottom: "1px solid black" }}
            p={2}
          >
            Details!
          </Box>
          <Box flex={1} minHeight={0} p={2}>
            Lorem ipsum
          </Box>
        </TwoRowLayout>
      </Flex>
    </TwoColLayout>
  );
};

export default ComplexLayoutExample;
