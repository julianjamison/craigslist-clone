import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
      categoriesData: ''
    }
  }
  componentWillMount(){

  }
  componentDidMount(){
    const {match, history } = this.props
    if(match.params.city == undefined){
      history.push('/sf')
    }

    const self = this;
    axios.get(`/api/${match.params.city}/`)
  .then(function (response) {
    self.setState({
      categoriesData: response.data
  }, () => {
    console.log(self.state);
  })
})
  .catch(function (error) {
    console.log(error);
  });
  }
  clickedBtn = () => {
    console.log("swag")
  }
  loopCategories = () => {
    const {match, history } = this.props
    //if statement for data
    if(this.state.categoriesData != '') {
      //return back theloop of categories
      return this.state.categoriesData.map((category, i) => {
        // created a loop for the listings
        const loopListings = () => {
        return category.listings.map((listing, index) => {
          return (
            <Link to={`/${match.params.city}/${category.title}/${listing.slug}`} key={index}>{listing.name}</Link>
          )
        })
      }
      return (
        <div className="categories" key={i}>
          <a href={`/${match.params.city}/${category.title}`} className="title">{category.title}</a>
          <div className={`group-links ${(category.title == 'jobs' || category.title == 'personals' || category.title == 'housing' || category.title == 'community') ? 'single-col' : ''}`}>
            {loopListings()}
          </div>
        </div>
      );
    });
  };

 }
  loopTags = () => {
    let testTags = ["a", "s", "d", "g", "h", "j"];
    return testTags.map((item, i, a) => (
      <div key={i} className="tag">
        Apple macbook{" "}
      </div>
    ));
  };
  render() {
    return (
      <div className="home">
        <div className="container">
          <h1>
            Connecting People <br /> Everywhere :)
          </h1>
          <section className={"links"}>{this.loopCategories()}</section>
          <section className={"trending"}>
            <input type="text" name="search" className="search" />
            <div className="title">
              <i className="far fa-clock" />Trending Now
            </div>
            <div className="trending-tags">{this.loopTags()}</div>
          </section>
        </div>
      </div>
     );
    }
   }
