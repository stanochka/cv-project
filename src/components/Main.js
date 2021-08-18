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
      dataFromEducation: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.viewCV = this.viewCV.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value, })
  }

  getEducations = (data) => {
    this.setState({dataFromEducation: data})
  }

  viewCV() {
    console.log(this.state.dataFromEducation);
  }
  render() {
    return (<div className="Main">
              <div className='EditResume'>
                <General givenName={this.state.givenName}
                         surname={this.state.surname}
                         phone={this.state.phone}
                         email={this.state.email}
                         handleChange={this.handleChange}/>
                <Education callbackFromParent={this.getEducations} />
                <Work />
                <button onClick={this.getEducations}>Render CV</button>
              </div>
              <Viewer givenName={this.state.givenName}
                      surname={this.state.surname}
                      phone={this.state.phone}
                      email={this.state.email}/>
            </div>)
  }

}

export default Main;
