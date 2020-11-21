import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import { Flex, Box } from "reflexbox";

import { SplitPane, TwoCol, TwoRow } from "./Examples";

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
  }
];

export default () => (
  <Router>
    <Flex flexDirection="column" flex={1} minHeight={0}>
      <Flex alignItems="sace-between">
        {routes.map((route) => (
          <Box as={NavLink} to={route.path} p={2}>
            {route.label}
          </Box>
        ))}
      </Flex>
      <Flex flexDirection="column" flex={1} minHeight={0}>
        <Switch>
          <Route path="/two-col">
            <TwoCol />
          </Route>
          <Route path="split-pane">
            <SplitPane />
          </Route>
          <Route path="/two-row">
            <TwoRow />
          </Route>
          <Redirect to="/two-col" />
        </Switch>
      </Flex>
    </Flex>
  </Router>
);
