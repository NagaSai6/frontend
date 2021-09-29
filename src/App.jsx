import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import SortByState from "./components/State/Layout";
import SortByCourse from "./components/Course/Course";

import "./App.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/sort-by-state" exact component={SortByState}></Route>
        <Route path="/sort-by-courses" exact component={SortByCourse}></Route>
      </Switch>
    </Router>
  );
};

export default App;
