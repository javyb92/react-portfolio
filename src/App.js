import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper"
import AboutMe from "./Pages/AboutMe";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import Portfolio from "./Pages/Portfolio";
import Greeting from "./Pages/Greeting";
// import Cards from "./components//Cards/cards";
import "./Pages/style.css"



function App() {
  return (
    <div>
      <Router>
          <Navbar />
          <Wrapper>
          <Sidebar />
          <Switch>
          {/* <AboutMe />
          <Portfolio /> */}
            <Route exact path="/" component={Greeting} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
          </Wrapper>
      </Router>
      {/* <Cards /> */}
    </div>
  );
}

export default App;