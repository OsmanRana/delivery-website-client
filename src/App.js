import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Service from "./pages/Services/SeviceDetail/Service";
import Services from "./pages/Services/Services";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Booking from "./pages/Booking/Booking";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Tracking from "./pages/Booking/Tracking/Tracking";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/services/:serviceId">
              <Service />
            </Route>
            <PrivateRoute exact path="/booking/:bookingId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path="/tracking">
              <Tracking />
            </PrivateRoute>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
