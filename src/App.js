import React, { Component } from 'react';
import './App.css';
import Header from './components/HeaderComponent/Header';
import Tabs from './components/TabsComponent/Tabs';
import TabsContent from './components/TabsContentComponent/TabsContent';
import Footer from './components/FooterComponent/Footer';

class App extends Component {


  state = {

  }

  render() {
  return (
    <div className="App">
      <Header />
      <Tabs />
      <TabsContent />
      <Footer />
    </div>
  );
  }

}

export default App;
