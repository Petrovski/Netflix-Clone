/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";

class TabsContent extends Component {
  render() {
    return (
      <div>
        <section className="tab-content">
          <div className="container">
            {/* Tab Content 1 */}
            {/* <div id="tab-1-content" className="tab-content-item show">
              <div className="tab-1-content-inner">
                <div>
                  <p className="text-lg">
                    If you decide Netflix isnt for you - no problem. No
                    commitment. Cancel online anytime.
                  </p>
                  <a href="www.google.com" className="btn btn-lg">
                    Try 30 Days Free
                  </a>
                </div>
                <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="Cancel" />
              </div>
            </div> */}

            <div id="tab-2-content" className="tab-content-item">
              <div className="tab-2-content-top">
                <p className="text-lg">Watch TV shows and movies anytime, anywhere - personalized for you.</p>
                <a href="wwww.google.com" className="btn btn-lg">
                  Try 30 Days Free
                </a>
              </div>
              <div className="tab-2-content-bottom">
                <div>
                  <img
                    src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png"
                    alt=""
                  />
                  <p>Watch on your TV</p>
                  <p className="text-dark">
                    Smart TVs, Playstation, Xbox, Chromecast, Appl TV,
                    Blu-ray players and more.
                  </p>
                </div>
              </div>

              <div className="tab-2-content-bottom">
                <div>
                  <img
                    src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png"
                    alt=""
                  />
                  <p>Watch instantly or download for later</p>
                  <p className="text-dark">
                    Available on phone and tablet, wherever you go.
                  </p>
                </div>
              </div>

              <div className="tab-2-content-bottom">
                <div>
                  <img
                    src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png"
                    alt=""
                  />
                  <p>Use any computer</p>
                  <p className="text-dark">
                    Watch right on Netflix.com
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TabsContent;
