import React, { useState } from "react";

import { Box } from "reflexbox";

import TwoColLayout, {
  responsiveCols,
  colStretchBehaviors
} from "./Layout/TwoCol";

import Backdrop from "./Backdrop";

export default function App() {
  const isMobile = true;
  const [isPaneVisible, setPaneVisible] = useState(false);

  return (
    <TwoColLayout
      responsiveCol={responsiveCols.LEFT}
      isResponsive={isMobile}
      isResponsiveColFocused={isPaneVisible}
      colsStretchBehavior={[
        colStretchBehaviors.SHRINK,
        colStretchBehaviors.GROW
      ]}
    >
      <Box
        p={2}
        bg="green"
        height="100%"
        style={{ borderRight: "1px solid black" }}
      >
        Plane 1<br />
        <button onClick={() => setPaneVisible(false)}>close</button>
      </Box>
      <Box bg="yellow" height="100%">
        {isMobile && isPaneVisible && (
          <Backdrop onClick={() => setPaneVisible(false)} />
        )}
        <Box p={2}>
          Plane 2<br />
          <button onClick={() => setPaneVisible(true)}>open</button>
        </Box>
      </Box>
    </TwoColLayout>
  );
}
