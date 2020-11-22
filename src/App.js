import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import { Flex, Box } from "reflexbox";

import { SplitPane, TwoCol, TwoRow, ComplexLayout } from "./Examples";

const routes = [
  {
    path: "/two-col",
    label: "TwoCol"
  },
  {
    path: "/two-row",
    label: "TwoRow"
  },
  {
    path: "/split-pane",
    label: "SplitPane"
  },
  {
    path: "/complex",
    label: "Complex Layout"
  }
];

export default () => (
  <Router>
    <Flex flexDirection="column" flex={1} minHeight={0}>
      <Flex>
        {routes.map((route) => (
          <Box as={NavLink} to={route.path} p={2}>
            {route.label}
          </Box>
        ))}
      </Flex>
      <Flex
        flexDirection="column"
        flex={1}
        minHeight={0}
        bg="white"
        style={{ border: "1px solid black" }}
      >
        <Switch>
          <Route path="/two-col">
            <TwoCol />
          </Route>
          <Route path="/split-pane">
            <SplitPane />
          </Route>
          <Route path="/two-row">
            <TwoRow />
          </Route>
          <Route path="/complex">
            <ComplexLayout />
          </Route>
          <Redirect to="/two-col" />
        </Switch>
      </Flex>
    </Flex>
  </Router>
);
