import React from 'react';
import Painter from './Painter/Painter'
import DevToolbox from './DevToolbox/DevToolbox'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Painter />
      <DevToolbox />
    </div>
  );
}

export default App;
