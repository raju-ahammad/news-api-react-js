
import React, { Component } from 'react';
import Header from './Components/Header/Header';
import { newsCategory } from './Components/NewsCategory/NewsCategory';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header category = {newsCategory.technology}/>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
