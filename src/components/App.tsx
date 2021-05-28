import * as React from "react";
import { FormContainer } from "src/components/formHelper/FormContainer";
import { useRoutes } from "hookrouter";
import NotFoundPage from "src/components/NotFoundPage";
import HomePage from "src/components/HomePage";
import Login from "./siteHelper/SiteLogin";

import {
  HashRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/admin">
          <Login />
        </Route>
        <Route path="/*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
