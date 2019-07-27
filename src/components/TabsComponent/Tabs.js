/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

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
			borderClass.push('tab-border', 'tab-item');
		}

		return <div />;
	}
}

export default Tabs;
