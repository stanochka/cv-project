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
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text(this.state.name, 105, 10, 'center');
    doc.setFontSize(12);
    doc.text(this.state.profession, 105, 20, 'center');
    doc.text(this.state.phone, 20, 30);
    doc.text(this.state.email, 20, 40);

    let y = 50;
    doc.setLineWidth(0.5);
    doc.line(75, y, 135, y);
    y+=10;

    if (this.state.works) {
      doc.setFontSize(18);
      doc.text('Work Experience', 105, y, 'center');
      y+=20;
      doc.setFontSize(12);
      this.state.works.forEach((w, i) => {
        doc.text(`${w.workplace}, ${w.position}\n${w.startYear}-${w.finishYear}`, 20, y+(i*20))
      })
      y += this.state.works.length*20;
      doc.setLineWidth(0.5);
      doc.line(75, y, 135, y);
      y+=10;
    }

    if (this.state.educations) {
      doc.setFontSize(18);
      doc.text('Education', 105, y, 'center');
      y+=10;
      doc.setFontSize(12);
      this.state.educations.forEach((ed, i) => {
        doc.text(`${ed.school}\n${ed.startYear}-${ed.finishYear}`, 20, y+(i*20))
      })
    }

    doc.save(`${this.state.name.replace(/\s/g, '_')}_CV.pdf`);
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
