import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      allImgs: "",
      currentImg: "",
      currentIndex: 0
    };
  }
  componentWillMount() {
    const allImgs = [
      "https://images.craigslist.org/00s0s_9ELSAovQbWm_600x450.jpg",
      "https://images.craigslist.org/00N0N_cDXG0wOlZLx_600x450.jpg",
      "https://images.craigslist.org/00101_kvG9L79co81_600x450.jpg",
      "https://images.craigslist.org/00x0x_c2IG7jvtpdW_600x450.jpg",
      "https://images.craigslist.org/00h0h_1G0RpEEnEpL_600x450.jpg",
      "https://images.craigslist.org/00c0c_cN5CNC8syeo_600x450.jpg"
    ];

    this.setState({
      allImgs,
      currentImg: allImgs[this.state.currentIndex]
    });
  }
  allImgsLoop = () => {
    return this.state.allImgs.map((item, i) => {
      return (
        <div
          key={i}
          onClick={this.clickedThumb.bind(null, i)}
          className="thumb-image"
          style={{
            backgroundImage: `url('${item}')`
          }}
        />
      );
    });
  };

  nextBtn = () => {
    if (this.state.currentIndex != this.state.allImgs.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
  };
  prevBtn = () => {
    if (this.state.currentIndex != 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  };
  clickedThumb = index => {
    this.setState({
      currentIndex: index
    });
  };
  render() {
    const { match, location, history } = this.props;
    return (
      <div className="gallery">
        <div className="slider">
          <div className="main-image">
            <div className="arrows left-arrow" onClick={this.prevBtn}>
              <i className="fas fa-chevron-left" />
            </div>
            <div className="arrows right-arrow" onClick={this.nextBtn}>
              <i className="fas fa-chevron-right" />
            </div>
            <div
              className="image-1"
              style={{
                backgroundImage: `url('${
                  this.state.allImgs[this.state.currentIndex]
                }')`
              }}
            />
          </div>
        </div>
        <div className="thumnails">{this.allImgsLoop()}</div>
      </div>
    );
  }
}
