import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Battle from "./pages/Battle";
import TitleCard from "./pages/TitleCard";
import NewBot from "./pages/NewBot";

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/battle" component={Battle} />
          <Route exact path="/titlecard" component={TitleCard} />
          <Route exact path="/newbot" component={NewBot} />
      </div>
    </Router>
  );
}

export default App;
