
import axios from 'axios';
import React, { Component } from 'react';
import Header from './Components/Header/Header';
import { newsCategory } from './Components/NewsCategory/NewsCategory';
import { NewsList } from './Components/NewsList/NewsList';
import Loading from './Components/Pagination/Loading';
import Pagination from './Components/Pagination/Pagination';


class App extends Component {

  state = {
    news: [],
    category: newsCategory.technology
  }

  changeCategory = (category) => {
    console.log(category);
    this.setState({
      category
    })
  }

  componentDidMount(){
    const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_API_KEY}&category=${this.state.category}&pageSize=5`;
    axios
    .get(url)
    .then((response)=>{
      console.log(response);
      this.setState({
        news: response.data.articles
      })
    })
    .catch((e)=> {
      console.log(e);
    })
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.category !== this.state.category) {
      const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_API_KEY}&category=${this.state.category}&pageSize=5`;
    axios
    .get(url)
    .then((response)=>{
      console.log(response);
      this.setState({
        news: response.data.articles
      })
    })
    .catch((e)=> {
      console.log(e);
    })
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header category = {this.state.category} changeCategory={this.changeCategory}/>
            <div className="d-flex">
              <p className="text-black-50">about {0} result found</p>
              <p className="text-black-50 ml-auto">{1} page of {100} </p>
            </div>
            <NewsList news={ this.state.news }/>
            <Pagination/>
            <Loading/>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
