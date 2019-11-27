import React from 'react';
import {
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header/';
import Footer from './components/Footer/';

import { Provider } from 'react-redux';
import store from './store/';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>

        <Route exact path="/" component={Home} />

        <Footer/>
      </Provider>
    </div>
  );
}

export default App;
