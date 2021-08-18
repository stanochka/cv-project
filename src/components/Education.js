import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  educations: [],
                    id: '',
                    school: '',
                    startYear: '',
                    finishYear: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }

  addEducation = (e) => {
    e.preventDefault();
    const newEd = {
      id: uuidv4(),
      school: this.state.school,
      startYear: this.state.startYear,
      finishYear: this.state.finishYear,
    };
    this.setState({ educations: [...this.state.educations, newEd],
                    school: '',
                    startYear: '',
                    finishYear: '',
                  });
    this.props.callbackFromParent(this.state.educations);
  }

  render() {
    return (<div className='Education'>
              <h2>Education</h2>
              { this.state.educations.length>0 && <Overview educations={this.state.educations} />}
              <form id='EducationForm'>
                <label htmlFor='school'>School</label><br />
                <input
                    name='school'
                    type='text'
                    value={this.state.school}
                    onChange={this.handleChange}
                ></input><br />
                <label htmlFor='startYear'>Start Year</label> - <label htmlFor='finishYear'>Finish Year</label><br />
                <input
                    name='startYear'
                    type='number'
                    min='1900'
                    max='2021'
                    value={this.state.startYear}
                    onChange={this.handleChange}
                ></input> - <input
                                name='finishYear'
                                type='number'
                                min='1900'
                                max='2021'
                                value={this.state.finishYear}
                                onChange={this.handleChange}
                            ></input><br />

                <button id='addEducation' onClick={this.addEducation}>Add</button>
              </form>
            </div>)
  }

}


function Overview(props) {
  const  { educations } = props;
  return (
    <ul>
      {educations.map(education => {
        return (<li key={education.id}>
                  <p>{education.school} {education.startYear}-{education.finishYear}</p>
                </li>
                );
      })}
    </ul>
  );
}

export default Education;
