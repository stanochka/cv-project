import React from 'react';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  educations: [],
                    education: { school: '',
                                 location: '',
                                 startYear: '',
                                 finishYear: '', },
    }
    this.addEducation = this.addEducation.bind(this);
  }

  addEducation(event) {
    event.preventDefault();
    this.setState({ educations: this.state.educations.concat(this.state.education),
                    education: { school: '',
                                 startYear: '',
                                 finishYear: '', },
                  })
  }

  render() {
    return (<div className='Education'>
              <h2>Education</h2>
              { this.state.educations.length>0 && <Overview educations={this.state.educations} />}
              <form id='EducationForm'>
                <label htmlFor='school'>School</label><br />
                <input
                    id='school'
                    type='textarea'
                    value={this.state.education.school}
                    onChange={(e) => this.setState({ education: { school: e.target.value }})}
                ></input><br />
                <input
                    id='startYear'
                    type='number'
                    min='1900'
                    max='2021'
                    value={this.state.education.startYear}
                    onChange={(e) => this.setState({ education: { startYear: e.target.value }})}
                ></input> - <input
                                id='finishYear'
                                type='number'
                                min='1900'
                                max='2021'
                                value={this.state.education.finishYear}
                                onChange={(e) => this.setState({ education: { finishYear: e.target.value }})}
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
      {educations.map((education, i) => {
        return (<li key={i}>
                  <p>{education.school}</p>
                  <p>{education.startYear}-{education.finishYear}</p>
                </li>
                );
      })}
    </ul>
  );
}

export default Education;
