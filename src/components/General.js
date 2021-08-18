import React from 'react';
import Editable from './Editable'

function General(props)  {
  const { givenName, surname, phone, email, handleChange } = props;
  return (<div className='General'>
            <div style={{display: 'flex'}}>
              <Editable name='givenName'
                        placeholder='First Name'
                        value={givenName}
                        handleChange={handleChange} />
              <Editable name='surname'
                        placeholder='Last Name'
                        value={surname}
                        handleChange={handleChange} />
            </div>
            <Editable name='phone'
                      placeholder='Phone'
                      value={phone}
                      handleChange={handleChange} />
            <Editable name='email'
                      placeholder='Email'
                      value={email}
                      handleChange={handleChange} />
          </div>)
}

export default General;
