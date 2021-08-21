import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class Work extends React.Component {

  state = {
    works: [],
    workplace: '',
    position: '',
    startYear: '',
    finishYear: '',
    editing: false,
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newWork = {
      id: uuidv4(),
      workplace: this.state.workplace,
      position: this.state.position,
      startYear: this.state.startYear,
      finishYear: this.state.finishYear || 'present',
    };
    this.setState({ works: [...this.state.works, newWork],
                    workplace: '',
                    position: '',
                    startYear: '',
                    finishYear: '',
                    editing: false,
                  });
    this.props.parentCallback([...this.state.works, newWork]);
  }

  handleEdit = key => {
    const toEdit = this.state.works.filter(w => w.id === key)[0];
    const newList = this.state.works.filter(w => w.id !== key);
    this.setState({works: newList,
                   workplace: toEdit.workplace,
                   position: toEdit.position,
                   startYear: toEdit.startYear,
                   finishYear: toEdit.finishYear,
                   editing: true});
  }

  toggleEdit = () => {
    this.setState({editing: !this.state.editing})
  }

  render() {
    return (
      <div className='Work'>
        <h2>Work Experience</h2>
        <ul style={{textAlign: 'left'}}> {this.state.works.map(w => {
              return (<li key={w.id} onDoubleClick={() => this.handleEdit(w.id)}>
                        <div>{w.workplace}</div>
                        <div>{w.position}</div>
                        <div>{w.startYear}-{w.finishYear || 'present'}</div>
                      </li>)})}
        </ul>
        {!this.state.editing && <button onClick={this.toggleEdit}>Add</button> }
        { this.state.editing &&
          <form id="WorkForm">
              <input name="workplace"
                     type="text"
                     value={this.state.workplace}
                     placeholder="Company"
                     onChange={this.handleChange}
              />
              <input name="position"
                     type="text"
                     value={this.state.position}
                     placeholder="Position"
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

export default Work;
