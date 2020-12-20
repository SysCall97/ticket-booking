import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import './App.css';
import AddMovie from './components/AddMovie/AddMovie';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = React.createContext();

function App() {
  const [loggedinUser, setLoggedinUser] = useState({isLoggedIn: false});
  return (
    <userContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <BrowserRouter>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path="/addMovie">
            <AddMovie />
          </Route>

          <PrivateRoute path='/book/:id'>
            <Booking />
          </PrivateRoute>

        </Switch>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
