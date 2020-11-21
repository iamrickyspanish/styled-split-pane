import React, { useState } from "react";

import { Box } from "reflexbox";

import TwoColLayout, {
  responsiveCols,
  colStretchBehaviors
} from "../Layout/TwoCol";

import Backdrop from "../Backdrop";

export default () => {
  const isMobile = true;
  const [isPaneVisible, setPaneVisible] = useState(false);

  return (
    <TwoColLayout
      responsiveCol={responsiveCols.LEFT}
      isResponsive={isMobile}
      isResponsiveColFocused={isPaneVisible}
      colsStretchBehavior={[colStretchBehaviors.GROW, colStretchBehaviors.GROW]}
    >
      <Box
        p={2}
        flex={1}
        bg="white"
        minHeight={0}
        style={{ borderRight: "1px solid black" }}
      >
        Plane 1<br />
        <button onClick={() => setPaneVisible(false)}>toggle</button>
      </Box>
      <Box bg="yellow" flex={1} minHeight={0}>
        {isMobile && isPaneVisible && (
          <Backdrop onClick={() => setPaneVisible(false)} />
        )}
        <Box p={2}>
          Plane 2<br />
          <button onClick={() => setPaneVisible(true)}>toggle</button>
        </Box>
      </Box>
    </TwoColLayout>
  );
};
