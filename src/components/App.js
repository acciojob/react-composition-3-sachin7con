import React from "react";
import Tooltip from './Tooltip';
import './../styles/App.css';

const App = () => {
  return (
    <div>
      {/* SGN */}
      <Tooltip text='This is a tooltip'>
        <h1>Hover over me</h1>
      </Tooltip>
      <br />
      <Tooltip text='This is another tooltip'>
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}

export default App;
