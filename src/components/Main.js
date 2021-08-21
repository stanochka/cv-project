import React from 'react';
import General from './General';
import Education from './Education';
import Work from './Work';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      profession: '',
      phone: '',
      email: '',
    }
  }

  handleChange = (value, name) => {
    this.setState({ [name] : value });
  }

  render() {
    return (<div className="Main">
              <General name={this.state.name}
                       profession={this.state.profession}
                       phone={this.state.phone}
                       email={this.state.email}
                       handleChange={this.handleChange}/>
              <Work />
              <Education />
            </div>)
  }

}

export default Main;
