import * as React from "react";
import "./App.scss";
import { FormContainer } from "src/components/formHelper/FormContainer";
import { useRoutes } from "hookrouter";
import NotFoundPage from "src/components/NotFoundPage";
import HomePage from "src/components/HomePage";

const routes = {
  "/": () => <HomePage />,
  "/admin": () => <FormContainer />,
};

const App = () => {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />;
};

export default App;
