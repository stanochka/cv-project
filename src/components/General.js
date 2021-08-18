import React from 'react';

function General(props)  {
  const { givenName, surname, phone, email, handleChange } = props;
  return (<div className='General'>
            <label htmlFor='givenName'>Name</label><br />
            <input
                name='givenName'
                type='text'
                value={givenName}
                onChange={handleChange}
            ></input><br />
            <label htmlFor='surname'>Surname</label><br />
            <input
                name='surname'
                type='text'
                value={surname}
                onChange={handleChange}
            ></input><br />
            <label htmlFor='phone'>Phone</label><br />
            <input
                name='phone'
                type='text'
                value={phone}
                onChange={handleChange}
            ></input><br />
            <label htmlFor='email'>Email</label><br />
            <input
                name='email'
                type='email'
                value={email}
                onChange={handleChange}
            ></input><br />
          </div>)
}

export default General;
