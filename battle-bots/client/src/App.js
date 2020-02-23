import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Battle from "./pages/Battle";
import Home from "./pages/Home";
import NewBot from "./pages/NewBot";
import TitleCard from "./pages/TitleCard";


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
