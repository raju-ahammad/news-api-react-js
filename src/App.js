
import React, { Component } from 'react';
import Header from './Components/Header/Header';
import News, { newsCategory } from './Components/NewsCategory/NewsCategory';
import { NewsList } from './Components/NewsList/NewsList';
import Loading from './Components/Pagination/Loading';
import Pagination from './Components/Pagination/Pagination';


const news = new News(newsCategory.technology)

class App extends Component {

  state = {
    data: {},
    isLoading: true
  }

  changeCategory = (category) => {
    console.log(category);
    this.setState({
      category
    })
  }

  componentDidMount(){
    news.getNews()
    .then((data) => {
      this.setState({ data, isLoading: false })
    })
    .catch((e)=> {
      console.log(e);
      alert("something went wrong")
      this.setState({isLoading: false})
    })

  }

  next = () => {
    if (this.state.data.isNext) {
      this.setState({isLoading: true})
    }
    news.next()
      .then((data) => {
        this.setState({data, isLoading: false})
      })
      .catch((e)=> {
        console.log(e);
        alert("something went wrong")
        this.setState({isLoading: false})
      })
  }

  prev = () => {
    if (this.state.data.isPrev) {
      this.setState({isLoading: true})
    }
    news.prev()
      .then((data) => {
        this.setState({data, isLoading: false})
      })
      .catch((e)=> {
        console.log(e);
        alert("something went wrong")
        this.setState({isLoading: false})
      })
  }

  handleChange = (value) => {
    this.setState({
      data: {
        ...this.state.data,
        currentPage: Number.parseInt(value)
      }
    })
  }

  goToPage = () => {
    this.setState({isLoading: true})
    news.setCurrrentPage(this.state.data.currentPage)
      .then(data => {
        this.setState({data, isLoading: false })
      })
      .catch((e)=> {
        console.log(e);
        alert("This page is not found")
        this.setState({isLoading: false})
      })
  }
  changeCategory = (category) => {
    this.setState({isLoading: true})
    news.changeCatgory(category)
      .then(data => {
        this.setState({data, isLoading: false})
      })
      .catch((e)=> {
        console.log(e);
        alert("This page is not found")
        this.setState({isLoading: false})
      })
  }


  render() {
    const {article,
      isNext,
      isPrev,
      totalPage,
      currentPage,
      category,
      totalResults} = this.state.data
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header category = {category} changeCategory={this.changeCategory}/>
            <div className="d-flex">
              <p className="text-black-50">about {totalResults} result found</p>
              <p className="text-black-50 ml-auto">{currentPage} page of {totalPage} </p>
            </div>
            { this.state.isLoading ? (
              <Loading />
            ): (
              <div>
                <NewsList news={article} />
                <Pagination
                  next= {this.next}
                  prev = {this.prev}
                  isPrev = {isPrev}
                  isNext = {isNext}
                  totalPage = {totalPage}
                  currentPage = {currentPage}
                  handleChange = {this.handleChange}
                  goToPage = {this.goToPage}
                />
              </div>
            ) }
          </div>
        </div>
      </div>
    )
  }
}


export default App;
