/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";

class Heading extends Component  {
    render() {
        return (
            <div>
                <header className="showcase">
                    <div className="showcase-top">
                        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="Netflix" />
                        <a href="https://www.google.com" className="btn btn-rounded">Sign In</a>
                    </div>
                    <div className="showcase-content">
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <p>Watch anywhere. Cancel anytime.</p>
                        <a href="https://www.google.com" className="btn btn-xl">
                            Try 30 Days Free <i className="fas fa-chevron-right btn-icon"></i>
                        </a>
                    </div>
                </header>
            </div>
        )
    }
}

export default Heading;