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
  render() {
    return (<div>
              <label htmlFor='givenName'>Name</label><br />
              <input
                  id='givenName'
                  type='textarea'
                  value={this.state.givenName}
                  onChange={(e) => this.setState({ givenName: e.target.value })}
                  required></input><br />
              <label htmlFor='surname'>Surname</label><br />
              <input
                  id='surname'
                  type='textarea'
                  value={this.state.surname}
                  onChange={(e) => this.setState({ surname: e.target.value })}
                  required></input><br />
              <label htmlFor='phone'>Phone</label><br />
              <input
                  id='phone'
                  type='textarea'
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                  ></input><br />
              <label htmlFor='email'>Email</label><br />
              <input
                  id='email'
                  type='email'
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  required></input><br />
            </div>)
  }
}

export default General;
