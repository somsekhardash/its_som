import * as React from "react";
import { FormContainer } from "src/components/formHelper/FormContainer";
import { useRoutes } from "hookrouter";
import NotFoundPage from "src/components/NotFoundPage";
import HomePage from "src/components/HomePage";
import Login from "./siteHelper/SiteLogin";

const routes = {
  "/": () => <HomePage />,
  "/admin": () => <Login />,
};

const App = () => {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />;
};

export default App;
