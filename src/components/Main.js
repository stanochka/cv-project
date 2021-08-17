import React from 'react';
import General from './General';
import Education from './Education';
import Work from './Work';

function Main() {
  const resume = {};
  return (<div className="Main">
            <General />
            <Education />
            <Work />
          </div>)
}

export default Main;
