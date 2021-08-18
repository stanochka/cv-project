import React from 'react';
import General from './General';
import Education from './Education';
import Work from './Work';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      givenName: '',
      surname: '',
      phone: '',
      email: '',
      educations: [],
      works: [],
    }
  }

  handleChange = (value, name) => {
    this.setState({ [name] : value });
  }

  newEducation = (data) => {
    this.setState({educations: this.state.educations.concat(data)})
  }

  render() {
    return (<div className="Main">
              <p>Save field on enter, edit field on double click.</p>
              <General givenName={this.state.givenName}
                       surname={this.state.surname}
                       phone={this.state.phone}
                       email={this.state.email}
                       handleChange={this.handleChange}/>
              <Education educations={this.state.educations}
                         handleChange={this.handleChange}
                         newEducation={this.newEducation}/>
              <Work />
            </div>)
  }

}

export default Main;
