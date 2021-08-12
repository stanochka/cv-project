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
            <button type='submit' onClick={(e) => {
              e.preventDefault();
              resume.givenName = document.querySelector('#givenName').value;
              resume.surname = document.querySelector('#surname').value;
              resume.phone = document.querySelector('#phone').value;
              resume.email = document.querySelector('#email').value;
              console.log(resume);
            }}>Save</button>
          </div>)
}

export default Main;
