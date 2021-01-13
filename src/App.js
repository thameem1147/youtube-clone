import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar";
import RecommandedVideo from "./RecommandedVideo";
import Searchpage from "./Searchpage";


function App() {
  return (
    <div className="App">
    <Router>
    <Header />
      <Switch>
       <Route path="/search">
       <div className="app__page">
    <Sidebar />
    <Searchpage />
   </div>
       </Route>
       <Route path="/">
    <div className="app__page">
    <Sidebar />
    <RecommandedVideo />
   </div> 
       </Route>
      </Switch>
    </Router>
</div> 
  );
}

export default App;
