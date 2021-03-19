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
export const ContextApi = createContext();

function App() {
  const [transportType, setTransportType] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <ContextApi.Provider value={[transportType, setTransportType, loggedInUser, setLoggedInUser]}>
      <Router>
        <Head></Head>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* <Route path="/destination">
            <Destination></Destination>
          </Route> */}
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
        </Switch>
      </Router>
    </ContextApi.Provider>
  );
}

export default App;
