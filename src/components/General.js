import React from 'react';

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      givenName: '',
      surname: '',
      phone: '',
      email: '',
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, })
  }

  render() {
    return (<div className='General'>
              <label htmlFor='givenName'>Name</label><br />
              <input
                  name='givenName'
                  type='text'
                  value={this.state.givenName}
                  onChange={this.handleChange}
              ></input><br />
              <label htmlFor='surname'>Surname</label><br />
              <input
                  name='surname'
                  type='text'
                  value={this.state.surname}
                  onChange={this.handleChange}
              ></input><br />
              <label htmlFor='phone'>Phone</label><br />
              <input
                  name='phone'
                  type='text'
                  value={this.state.phone}
                  onChange={this.handleChange}
              ></input><br />
              <label htmlFor='email'>Email</label><br />
              <input
                  name='email'
                  type='email'
                  value={this.state.email}
                  onChange={this.handleChange}
              ></input><br />
            </div>)
  }
}

export default General;
