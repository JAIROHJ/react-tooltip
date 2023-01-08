import React from 'react';
import './App.css'
import Tooltip from './Tooltip';

const App = () => {
  return (
    <>
      <div className="styl-50 tc styl-5">
        <h1>Welcome to ToolTip Components</h1>
      </div>
      <div className="styl-50 tc">
        <div className="styl-3">
          <Tooltip position="top" />
        </div>

        <div className="styl-3">
          <Tooltip position="left" />
        </div>

        <div className="styl-3">
          <Tooltip position="right" />
        </div>

        <div className="styl-3">
          <Tooltip position="bottom" />
        </div>
      </div>
    </>
  )
}

export default App