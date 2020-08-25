import React from 'react';

import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import Widgets from './Components/Widgets/Widgets';

function App() {
  return (
    // Lowercase means BEM convention
    <div className="app">
      {/* Sidebar */}
      <Sidebar/>

      {/* Feed */}
      <Feed/>

      {/* Widgets */}
      <Widgets/>
      
    </div>
  );
}

export default App;
