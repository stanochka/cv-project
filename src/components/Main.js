import React from 'react';
import General from './General';
import Education from './Education';
import Work from './Work';
import Viewer from './Viewer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      givenName: '',
      surname: '',
      phone: '',
      email: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.viewCV = this.viewCV.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value, })
  }

  viewCV(e) {
    console.log(e.target);
  }
  render() {
    return (<div className="Main">
              <div className='EditResume'>
                <General givenName={this.state.givenName}
                         surname={this.state.surname}
                         phone={this.state.phone}
                         email={this.state.email}
                         handleChange={this.handleChange}/>
                <Education />
                <Work />
                <button onClick={this.viewCV}>Render CV</button>
              </div>
              <Viewer />
            </div>)
  }

}

export default Main;
