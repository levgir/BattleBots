import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Battle from "../src/pages/Battle";
import Home from "../src/pages/Home";
import NewBot from "../src/pages/NewBot";
import TitleCard from "../src/pages/TitleCard";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/newbot" component={NewBot} />
        <Route exact path="/titlecard" component={TitleCard} />
        <Route exact path="/battle" component={Battle} />
      </div>
    </Router>
  );
}

export default App;
