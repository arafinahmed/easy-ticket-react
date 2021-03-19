import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Head from './components/Head/Head';
import Home from './components/Home/Home';
import { createContext, useState } from 'react';
export const ContextApi = createContext();

function App() {
  const [transportType, setTransportType] = useState("");
  return (
    <ContextApi.Provider value={[[transportType, setTransportType]]}>
      <Router>
        <Head></Head>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </ContextApi.Provider>
  );
}

export default App;
