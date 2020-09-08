import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import FindProfile from "../pages/FindProfile";

import GlobalStyle from "../GlobalStyle";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/find-profile" component={FindProfile} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default Routes;
