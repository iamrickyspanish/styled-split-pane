import React, { useState, useCallback } from "react";
import { Box } from "reflexbox";
import SplitPane, { orientations, paneSizes } from "../SplitPane";
import Backdrop from "../Backdrop";

export default () => {
  const isMobile = false;
  const orientation = orientations.X;
  const [isPaneVisible, setPaneVisible] = useState(false);

  const togglePaneVisibility = useCallback(() => {
    setPaneVisible(!isPaneVisible);
  }, [isPaneVisible]);

  return (
    <SplitPane
      orientation={orientation}
      panesAsOverlay={[isMobile, false]}
      panesVisibility={[isPaneVisible, true]}
      panesSize={[paneSizes.AUTO, paneSizes.FULL]}
    >
      <Box
        p={2}
        flex={1}
        minHeight={0}
        style={{ borderRight: "1px solid black" }}
      >
        <button onClick={togglePaneVisibility}>toggle</button>
      </Box>
      <Box p={2} flex={1} minHeight={0}>
        {isMobile && isPaneVisible && (
          <Backdrop onClick={togglePaneVisibility} />
        )}
        <Box>
          <button onClick={togglePaneVisibility}>toggle</button>
        </Box>
        <Box flex={1}>
          <Box my={3} mx={3}></Box>
        </Box>
      </Box>
    </SplitPane>
  );
};
