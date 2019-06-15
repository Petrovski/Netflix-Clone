/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";

class Tabs extends Component {
  render() {
    return (
      <div>
        <section className="tabs">
          <div className="container">
            <div id="tab-1" className="tab-item tab-border">
              <i className="fas fa-door-open fa-3x" />
              <p className="hide-sm">Cancel anytime</p>
            </div>
            <div id="tab-2" className="tab-item">
              <i className="fas fa-tablet-alt fa-3x" />
              <p className="hide-sm">Watch anywhere</p>
            </div>
            <div id="tab-3" className="tab-item">
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
