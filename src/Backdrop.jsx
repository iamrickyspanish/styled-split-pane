import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  margin: 0;
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 100;
  overflow: hidden;
`;

export default Backdrop;
