import * as React from 'react';
import './App.scss';
import FormContainer from './components/formHelper/FormContainer';
import { useRoutes } from 'hookrouter';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';

const routes = {
  '/': () => <HomePage />,
  '/admin': () => <FormContainer />
};

const App = () => {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />;
}

export default App;
