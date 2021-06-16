import React from "react";
//import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";


import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";



// import Navbar from "./Components/Navbar/Navbar";



import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


const App = () => {
  return (
    <>
     <Router>
        {/* <Navbar /> */}
              <main>
                  <Switch>
                      {/*
                          <Route exact path="/" component={Home} />
                          <Route exact path="/pages/About/about" component={About} /> 
                      */}

                            <Route path="/" exact> <Home/>  </Route>

                            <Route path="/about" exact>  <About/>   </Route>

                            <Route path="/contact" exact>  <Contact/>   </Route>                
                    
                      {/*
                        <Route exact path="/contact" component={Contact} />
                      */}
                    
                  
                      <Redirect  component to="/ " />

                  </Switch>
              </main>
      </Router>
    </>
  );
};

export default App;
