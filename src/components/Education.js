import React from 'react';

function Education() {
  function addEducation() {
    console.log('new education!');
    return (<div>new education</div>)
  }

  return (<div className='Education'>
            <h2>Education</h2>
            <button id='newEducation' onClick={addEducation}>Add</button>
          </div>)
}

export default Education;
