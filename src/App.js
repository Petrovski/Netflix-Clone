import React from 'react';
import './App.css';
import Header from './components/HeaderComponent/Header';
import Tabs from './components/TabsComponent/Tabs';
import TabsContent from './components/TabsContentComponent/TabsContent';

function App() {
  return (
    <div className="App">
      <Header />
      <Tabs />
      <TabsContent />
    </div>
  );
}

export default App;
