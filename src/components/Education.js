import React from 'react';
import {v4 as uuidv4} from 'uuid';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {educations: [],
                  school: '',
                  startYear: '',
                  finishYear: '',
                  editing: false}
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newEd = {id: uuidv4(),
                   school: this.state.school,
                   startYear: this.state.startYear,
                   finishYear: this.state.finishYear  || 'present'}
    this.setState({educations: [...this.state.educations, newEd] });
    this.setState({school: '',
                  startYear: '',
                  finishYear: '',
                  editing: false,});
    this.props.parentCallback([...this.state.educations, newEd]);
  }

  handleEdit = key => {
    const toEdit = this.state.educations.filter(ed => ed.id === key)[0];
    const newList = this.state.educations.filter(ed => ed.id !== key);
    this.setState({educations: newList,
                   school: toEdit.school,
                   startYear: toEdit.startYear,
                   finishYear: toEdit.finishYear,
                   editing: true,});
  }

  toggleEdit = () => {
    this.setState({editing: !this.state.editing})
  }

  render() {
    return (<div className='Education'>
              <h2>Education</h2>
              <ul style={{textAlign: 'left'}}> {this.state.educations.map(ed => {
                    return (<li key={ed.id} onDoubleClick={() => this.handleEdit(ed.id)}>
                              <div>{ed.school}</div>
                              <div>{ed.startYear}-{ed.finishYear || 'present'}</div>
                            </li>)})}
              </ul>
              {!this.state.editing && <button onClick={this.toggleEdit}>Add</button> }
              { this.state.editing &&
                <form id="EducationForm">
                    <input name="school"
                           type="text"
                           value={this.state.school}
                           placeholder="School"
                           onChange={this.handleChange}
                    />
                    <input name="startYear"
                           type="text"
                           value={this.state.startYear}
                           placeholder="Start year"
                           onChange={this.handleChange}
                          />
                    <input name="finishYear"
                           type="text"
                           value={this.state.finishYear}
                           placeholder="Finish year"
                           onChange={this.handleChange}
                          />
                    <button onClick={this.handleSubmit}>Save
                    </button>
                    <button onClick={this.toggleEdit}>Close
                    </button>
                </form>
              }
            </div>)
  }
}

export default Education;
