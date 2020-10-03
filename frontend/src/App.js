import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import DietList from "./components/diet-list.component";
import EditDiet from "./components/edit-diet.component";
import CreateDiet from "./components/create-diet.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={DietList} />
        <Route path="/edit/:id" component={EditDiet} />
        <Route path="/create" component={CreateDiet} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;