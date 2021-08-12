import React from 'react';
import General from './General';
import Education from './Education';
import Work from './Work';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<form className="Main">
              <General />
              <Education />
              <Work />
              <button type='submit'>Save</button>
            </form>)
  }
}

export default Main;
