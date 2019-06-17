/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
  }

  toggleClass() {
    this.setState({ addClass: !this.state.addClass });
  }
  render() {
    let borderClass = [];

    if (this.state.addClass) {
      borderClass.push("tab-border", "tab-item");
    }

    return (
      <div>
        <section className="tabs">
          <div className="container">
            <div
              id="tab-1"
              className="tab-item tab-border"
              onClick={this.toggleClass.bind(this)}
            >
              {this.state.addClass}
              <i className="fas fa-door-open fa-3x" />
              <p className="hide-sm">Cancel anytime</p>
            </div>
            <div
              id="tab-2"
              className={borderClass.join(" ")}
              onClick={this.toggleClass.bind(this)}
            >
              <i className="fas fa-tablet-alt fa-3x" />
              <p className="hide-sm">Watch anywhere</p>
            </div>
            <div
              id="tab-3"
              className={borderClass.join(" ")}
              onClick={this.toggleClass.bind(this)}
            >
              <i className="fas fa-tags fa-3x" />
              <p className="hide-sm">Pick your price</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Tabs;
