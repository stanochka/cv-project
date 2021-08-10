import React from 'react';

function General() {
  return (<div>
            <label htmlFor='givenName'>Name</label><br />
            <input id='givenName' type='textarea' required></input><br />
            <label htmlFor='surname'>Surname</label><br />
            <input id='surname' type='textarea' required></input><br />
            <label htmlFor='phone'>Phone</label><br />
            <input id='phone' type='textarea' required></input><br />
            <label htmlFor='email'>Email</label><br />
            <input id='email' type='email'></input><br />
          </div>)
}

export default General;
