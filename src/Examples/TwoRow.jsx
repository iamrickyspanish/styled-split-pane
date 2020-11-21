import React, { useState } from "react";

import { Box } from "reflexbox";

import TwoRowLayout, {
  responsiveRows,
  rowStretchBehaviors
} from "../Layout/TwoRow";

import Backdrop from "../Backdrop";

export default () => {
  const isMobile = true;
  const [isPaneVisible, setPaneVisible] = useState(false);

  return (
    <TwoRowLayout
      bg="white"
      responsiveRow={responsiveRows.TOP}
      isResponsive={isMobile}
      isResponsiveRowFocused={isPaneVisible}
      rowsStretchBehavior={[rowStretchBehaviors.GROW, rowStretchBehaviors.GROW]}
    >
      <Box
        p={2}
        flex={1}
        minHeight={0}
        style={{ borderBottom: "1px solid black" }}
      >
        Plane 1<br />
        <button onClick={() => setPaneVisible(false)}>toggle</button>
      </Box>
      <Box flex={1} minHeight={0}>
        {isMobile && isPaneVisible && (
          <Backdrop onClick={() => setPaneVisible(false)} />
        )}
        <Box p={2}>
          Plane 2<br />
          <button onClick={() => setPaneVisible(true)}>toggle</button>
        </Box>
      </Box>
    </TwoRowLayout>
  );
};
