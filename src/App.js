import React, { Component } from 'react';
import './App.css';
import Header from './components/HeaderComponent/Header';
import TabsContent from './components/TabsContentComponent/TabsContent';
import Footer from './components/FooterComponent/Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<TabsContent />
				<Footer />
			</div>
		);
	}
}

export default App;
