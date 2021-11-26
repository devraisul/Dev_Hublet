
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./Contexts/AuthProvider";
import Products from "./pages/Home/Products/Products";
import Explore from "./pages/Explore/Explore";
import Contact from "./pages/Contact/Contact";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Purchase from "./pages/Purchase/Purchase";
import SignUp from "./pages/SignUp/SignUp";
import Reviews from "./pages/Home/Review/Reviews";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddAdmin from "./pages/Dashboard/Admin/AddAdmin/AddAdmin";
import AddWatch from "./pages/Dashboard/Admin/AddWatch/AddWatch";




function App() {
  return (
    <div className="App">
       <AuthProvider>
      <Router>
        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/sign-up">
            <SignUp></SignUp>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
          <Route exact path="/explore">
            <Explore></Explore>
          </Route>
          <PrivateRouter path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRouter>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/reviews">
            <Reviews/>
          </Route>
          <Route exact path="/add_admin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route exact path="/add_watch">
            <AddWatch></AddWatch>
          </Route>
          <PrivateRouter exact path="/purchase/:_id">
            <Purchase></Purchase>
          </PrivateRouter>
          
          
   
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
