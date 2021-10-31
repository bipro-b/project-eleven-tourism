
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddNew from './page/AddNew/AddNew';
import Booking from './page/Booking/Booking';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import ManageTour from './page/ManageTour/ManageTour';
import NotFound from './page/NotFound/NotFound';
import PrivateRoute from './page/NotFound/PrivateRoute';
import Spots from './page/Spots/Spots';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" >
              <Home></Home>

            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/spots">
              <Spots></Spots>
            </Route>
            <PrivateRoute path="/spot/:spotId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/managetour">
              <ManageTour></ManageTour>
            </Route>
            <Route path="/addnew">
              <AddNew></AddNew>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
