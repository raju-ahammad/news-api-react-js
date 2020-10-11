
import React, { Component } from 'react';
import Header from './Components/Header/Header';
import { newsCategory } from './Components/NewsCategory/NewsCategory';
import { NewsList } from './Components/NewsList/NewsList';
import Pagination from './Components/Pagination/Pagination';

const fakeNews = [
  {
    title: "Title",
    content: "Con",
    url: "htp",
    urlToImage: "ht",
    publishedAt: "ttime",
    source: {
      name: "CNN"
    }
  },
  {
    title: "Title",
    content: "Con",
    url: "htp",
    urlToImage: "ht",
    publishedAt: "ttime",
    source: {
      name: "CNN"
    }
  }
]


class App extends Component {


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header category = {newsCategory.technology}/>
            <div className="d-flex">
              <p className="text-black-50">about {0} result found</p>
              <p className="text-black-50 ml-auto">{1} page of {100} </p>
            </div>
            <NewsList news={ fakeNews }/>
            <Pagination/>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
