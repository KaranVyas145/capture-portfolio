import React from "react";

//Global styles
import GlobalStyle from "./Components/GlobalStyle";

// import pages
import AboutUs from "./Pages/AboutUs";
import Nav from "./Components/Nav";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
import MovieDetail from "./Pages/MovieDetails";

//Router
import { Switch, Route, useLocation } from "react-router-dom";

// animation
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route exact path="/work">
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
