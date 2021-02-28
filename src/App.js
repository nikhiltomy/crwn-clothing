import React from 'react'
import './App.css';
import {Header} from './components/header/header.component'
import {HomePage} from './pages/homepage/homepage.component';
import {ShopPage} from './pages/shop-page/shop-page.component.jsx';
import {Route,BrowserRouter, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopPage}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
