import React from 'react'
import './App.css';
import {HomePage} from './pages/homepage/homepage.component'
import {Route,BrowserRouter, Switch} from 'react-router-dom';

 const HatsPage=(props)=>{
   console.log(props)
  return(
    <div>
      <h1>Hat page</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/">{HomePage}</Route>
      <Route path="/hats">{HatsPage}</Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
