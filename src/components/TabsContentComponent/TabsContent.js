/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class TabsContent extends Component {
	state = {
		showCancel: true,
		showWatch: false,
		showPrice: false
	};

	showCancelContent() {
		const { showCancel, showWatch, showPrice } = this.state;
		if (showWatch || showPrice) {
			this.setState({ showCancel: true });
			console.log(showCancel);
		}
	}

	showWatchContent() {
		const { showCancel, showWatch, showPrice } = this.state;
		if (showCancel || showPrice) {
			this.setState({ showWatch: true });
			console.log(showWatch);
		}
	}

	showPriceContent() {
		const { showCancel, showWatch, showPrice } = this.state;
		if (showCancel || showWatch) {
			this.setState({ showPrice: true });
			console.log(showPrice);
		}
	}

	render() {
		return (
			<div>
				<section className="tabs">
					<div className="container">
						<div
							id="tab-1"
							className="tab-item tab-border"
							onClick={() => this.showCancelContent()}
						>
							<i className="fas fa-door-open fa-3x" />
							<p className="hide-sm">Cancel anytime</p>
						</div>
						<div id="tab-2" onClick={() => this.showWatchContent()}>
							<i className="fas fa-tablet-alt fa-3x" />
							<p className="hide-sm">Watch anywhere</p>
						</div>
						<div id="tab-3" onClick={() => this.showPriceContent()}>
							<i className="fas fa-tags fa-3x" />
							<p className="hide-sm">Pick your price</p>
						</div>
					</div>
				</section>

				<section className="tab-content">
					<div className="container">
						{/* Tab Content 1 */}

						<div
							id="tab-1-content"
							className="tab-content-item show"
							style={this.state.showCancel ? tabEnabled : tabDisabled}
						>
							<div className="tab-1-content-inner">
								<div>
									<p className="text-lg">
										If you decide Netflix isnt for you - no problem. No commitment.
										Cancel online anytime.
									</p>
									<a href="www.google.com" className="btn btn-lg tabs-buttons">
										Try 30 Days Free
									</a>
								</div>
								<img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="Cancel" />
							</div>
						</div>

						{/* Tab 2 Content */}

						<div
							id="tab-2-content"
							className="tab-content-item"
							style={this.state.showWatch ? tabEnabled : tabDisabled}
						>
							<div className="tab-2-content-top">
								<p className="text-lg">
									Watch TV shows and movies anytime, anywhere - personalized for you.
								</p>
								<a href="wwww.google.com" className="btn btn-lg tabs-buttons">
									Try 30 Days Free
								</a>
							</div>

							<div className="tab-2-content-bottom">
								<div>
									<img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="" />
									<p className="text-md">Watch on your TV</p>
									<p className="text-dark">
										Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
										players and more.
									</p>
								</div>

								<div>
									<img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt="" />
									<p className="text-md">Watch instantly or download for later</p>
									<p className="text-dark">
										Available on phone and tablet, wherever you go.
									</p>
								</div>

								<div>
									<img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt="" />
									<p className="text-md">Use any computer</p>
									<p className="text-dark">Watch right on Netflix.com</p>
								</div>
							</div>
						</div>

						<div
							id="tab-3-content"
							className="tab-content-item"
							style={this.state.showPrice ? tabEnabled : tabDisabled}
						>
							<div className="text-center">
								<p className="text-lg">
									Choose one plan and watch everything on Netflix
								</p>
								<a href="www.google.com" className="btn btn-lg tabs-buttons">
									Try 30 Days Free
								</a>
							</div>

							<table className="table">
								<thead>
									<tr>
										<th />
										<th>Basic</th>
										<th>Standard</th>
										<th>Premium</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Monthly price after free month ends</td>
										<td>$8.99</td>
										<td>$12.99</td>
										<td>$15.99</td>
									</tr>
									<tr>
										<td>HD Available</td>
										<td>
											<i className="fas fa-times" />
										</td>
										<td>
											<i className="fas fa-check" />
										</td>
										<td>
											<i className="fas fa-check" />
										</td>
									</tr>
									<tr>
										<td>Ultra HD Available</td>
										<td>
											<i className="fas fa-times" />
										</td>
										<td>
											<i className="fas fa-times" />
										</td>
										<td>
											<i className="fas fa-check" />
										</td>
									</tr>
									<tr>
										<td>Screens you can watch on at the same time</td>
										<td>1</td>
										<td>2</td>
										<td>4</td>
									</tr>
									<tr>
										<td>Watch on your laptop, TV, phone and tablet</td>
										<td>
											<i className="fas fa-check" />
										</td>
										<td>
											<i className="fas fa-check" />
										</td>
										<td>
											<i className="fas fa-check" />
										</td>
									</tr>
									<tr>
										<td>Watch on your laptop, TV, phone and tablet</td>
										<td>
											<i className="fas fa-check" />
										</td>
										<td>
											<i className="fas fa-check" />
										</td>
										<td>
											<i className="fas fa-check" />
										</td>
									</tr>
									<tr>
										<td>Unlimited movies and TV shows</td>
										<td>
											<i className="fas fa-check" />
										</td>
										<td>
											<i className="fas fa-check" />
										</td>
										<td>
											<i className="fas fa-check" />
										</td>
									</tr>
									<tr>
										<td>Cancel anytime</td>
										<td>
											<i className="fas fa-check" />
										</td>
										<td>
											<i className="fas fa-check" />
										</td>
										<td>
											<i className="fas fa-check" />
										</td>
									</tr>
									<tr>
										<td>First month free</td>
										<td>
											<i className="fas fa-check" />
										</td>
										<td>
											<i className="fas fa-check" />
										</td>
										<td>
											<i className="fas fa-check" />
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

const tabEnabled = {
	display: 'block'
};

const tabDisabled = {
	display: 'none'
};

export default TabsContent;
