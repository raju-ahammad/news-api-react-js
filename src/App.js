
import axios from 'axios';
import React, { Component } from 'react';
import Header from './Components/Header/Header';
import { newsCategory } from './Components/NewsCategory/NewsCategory';
import { NewsList } from './Components/NewsList/NewsList';
import Loading from './Components/Pagination/Loading';
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

  componentDidMount(){
    const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_API_KEY}&category=technology`;
    axios
    .get(url)
    .then((response)=>{
      console.log(response);
    })
    .catch((e)=> {
      console.log(e);
    })
  }
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
            <Loading/>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
