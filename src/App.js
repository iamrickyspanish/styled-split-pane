import React, { useState, useCallback } from "react";
import "./styles.css";
import { Box } from "reflexbox";
import SplitPane, { orientations, paneSizes } from "./SplitPane";
import Backdrop from "./Backdrop";
import Scroll from "./Scroll";

export default function App() {
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
      <Box p={2} bg="red" flex={1} minHeight={0}>
        <button onClick={togglePaneVisibility}>toggle</button>
      </Box>
      <Box bg="blue" p={2} flex={1} minHeight={0}>
        {isMobile && isPaneVisible && (
          <Backdrop onClick={togglePaneVisibility} />
        )}
        <Box>
          <button onClick={togglePaneVisibility}>toggle</button>
        </Box>
        <Box flex={1}>
          <Scroll>
            <Box my={3} mx={3}></Box>
          </Scroll>
        </Box>
      </Box>
    </SplitPane>
  );
}
