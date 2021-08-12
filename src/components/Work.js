import React from 'react';

function Work() {

  function addWork() {
    console.log('new work!');
    return (<form>
            </form>)
  }

  return (<div className='Work'>
            <h2>Work Experience</h2>
            <button id='newEducation' onClick={addWork}>Add</button>
          </div>)
}

export default Work;
