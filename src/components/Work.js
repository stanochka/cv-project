import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class Work extends React.Component {

  state = {
    works: '',
    id: '',
    workplace: '',
    position: '',
    startYear: '',
    finishYear: '',
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }

  addWork = (e) => {
    e.preventDefault();
    const newWork = {
      id: uuidv4(),
      workplace: this.state.workplace,
      position: this.state.position,
      startYear: this.state.startYear,
      finishYear: this.state.finishYear,
    };
    this.setState({ works: [...this.state.works, newWork],
                    workplace: '',
                    position: '',
                    startYear: '',
                    finishYear: '',
                  });
  }
  render() {
    return (
      <div className='Work'>
        <h2>Work Experience</h2>
        { this.state.works.length>0 && <Overview works={this.state.works} />}
        <form id='WorkForm'>
          <label htmlFor='workplace'>Workplace</label><br />
          <input
              name='workplace'
              type='text'
              value={this.state.workplace}
              onChange={this.handleChange}
          ></input><br />
          <label htmlFor='position'>Position</label><br />
          <input
              name='position'
              type='text'
              value={this.state.position}
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

          <button id='addWork' onClick={this.addWork}>Add</button>
        </form>
      </div>)
    }
}


function Overview(props) {
  const  { works } = props;
  return (
  <ul>
  {works.map(work => {
  return (<li key={work.id}>
            <p>{work.workplace} {work.position} {work.startYear}-{work.finishYear}</p>
          </li>
          );
  })}
  </ul>
  );
}

export default Work;
