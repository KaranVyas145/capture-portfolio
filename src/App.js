import React from "react";

//Global styles
import GlobalStyle from "./Components/GlobalStyle";

// import pages 
import AboutUs from "./Pages/AboutUs";


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <AboutUs/>
    </div>
  );
}

export default App;
