import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Head from './components/Head/Head';
import Home from './components/Home/Home';
import { createContext, useState } from 'react';
import Destination from './components/Destination/Destination';
import LoginPage from './components/LoginPage/LoginPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import TicketConfirmed from './components/TicketConfirmed/TicketConfirmed';
import BlogContainer from './components/BlogContainer/BlogContainer';

export const ContextApi = createContext();

function App() {
  const [transportType, setTransportType] = useState("bike");
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <ContextApi.Provider value={[transportType, setTransportType, loggedInUser, setLoggedInUser]}>
      <Router>
        <Head></Head>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/blog">
            <BlogContainer></BlogContainer>
          </Route>
          <PrivateRoute path="/ticketConfirmed">
            <TicketConfirmed></TicketConfirmed>
          </PrivateRoute>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </ContextApi.Provider>
  );
}

export default App;
