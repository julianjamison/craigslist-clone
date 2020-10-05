import React, { Component } from "react";
import ReactDOM from "react-dom";
import Gallery from "./components/Gallery.js";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { match, location, history } = this.props;
    return (
      <div className="details-page">
        <div className="container">
        <div className="white-box">
          <section className="submenu">
            <div className="direction">
              <a href="#" className="prev">Prev</a>
              <a href="#" className="next">Next</a>
            </div>
            <nav className="sub-links">
              <a href="#">More Ads by User</a>
              <a href="#">Print</a>
              <a href="#">Share</a>
              <a href="#">Contact Seller</a>
            </nav>
          </section>

          <section className="content-area">
            <div className="media-column">
              <Gallery />
            </div>
            <div className="details-column">
              <div className="date"> Posted: Feb 28th</div>
              <h3 className="title">Black 2016 BMW</h3>
              <h4 className="price">$42,000</h4>
              <div className="more-details">
                <div className="info">
                  <label>Vin</label>
                  <h5>jdskjdskjdskjdsjk</h5>
                </div>
                <div className="info">
                  <label>Mileage</label>
                  <h5>345556</h5>
                </div>
                <div className="info">
                  <label>Transmission</label>
                  <h5>Manual</h5>
                </div>
                <div className="info">
                  <label>Vin</label>
                  <h5>jdskjdskjdskjdsjk</h5>
                </div>
                <div className="info">
                  <label>Mileage</label>
                  <h5>345556</h5>
                </div>
                <div className="info">
                  <label>Transmission</label>
                  <h5>Manual</h5>
                </div>
              </div>
              <div className="description">
                <label>Description</label>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend</p>

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend</p>

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend</p>
              </div>
            </div>
          </section>
        </div>
        </div>
      </div>
    );
  }
}
