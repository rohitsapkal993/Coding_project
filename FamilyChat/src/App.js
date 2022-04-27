import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './App.css';
import Widgets from './Widgets';



function App() {
  return (
    <div className="App">
      
      {/* SideBar */}
      <Sidebar />


      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
