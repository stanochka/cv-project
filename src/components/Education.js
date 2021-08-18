import React from 'react';
import Editable from './Editable';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  school: '',
                    startYear: '',
                    finishYear: '',
    }
  }


  render() {
    return (<div className='Education'>
              <h2>Education</h2>
              <EducationList educations={this.props.educations} />
              <button onClick={() => <EducationForm />}>Add</button>
            </div>)
  }

}


function EducationList(props) {
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

function EducationForm(props) {
  const { school, startYear, finishYear, handleChange } = props;
  return (<div>
            <Editable name='school'
                      placeholder='School'
                      value={school}
                      handleChange={handleChange} />      
          </div>)
}

export default Education;
