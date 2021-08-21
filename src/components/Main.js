import React from 'react';
import General from './General';
import Education from './Education';
import Work from './Work';
import { jsPDF } from "jspdf";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      profession: '',
      phone: '',
      email: '',
      works: null,
      educations: null,
    }
  }

  handleChange = (value, name) => {
    this.setState({ [name] : value });
  }

  getWorks = (childData) =>{
    this.setState({works: childData})
  }

  getEducations = (childData) =>{
    this.setState({educations: childData})
  }

  generatePDF = () => {
    const data = `${this.state.name}
                  ${this.state.profession}
                  ${this.state.phone}
                  ${this.state.email}`
    const doc = new jsPDF();
    doc.text(data, 10, 10);
    doc.save(`CV_${this.state.name.replace(/\s/g, '_')}.pdf`);
  }

  render() {
    return (<div className="Main">
              <General name={this.state.name}
                       profession={this.state.profession}
                       phone={this.state.phone}
                       email={this.state.email}
                       handleChange={this.handleChange}/>
              <Work parentCallback={this.getWorks}/>
              <Education parentCallback={this.getEducations} />
              <button onClick={this.generatePDF}>Download CV</button>
            </div>)
  }

}

export default Main;
