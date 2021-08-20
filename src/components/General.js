import React from 'react';
import Editable from './Editable'

function General(props)  {
  const { name, profession, phone, email, handleChange } = props;
  return (<div className='General'>
            <h2>General Information</h2>
            <div style={{padding: '0 10px 10px'}}>
              <Editable name='name'
                        placeholder='Name'
                        value={name}
                        handleChange={handleChange} />
              <Editable name='profession'
                        placeholder='Professon'
                        value={profession}
                        handleChange={handleChange} />
              <Editable name='phone'
                        placeholder='Phone'
                        value={phone}
                        handleChange={handleChange} />
              <Editable name='email'
                        placeholder='Email'
                        value={email}
                        handleChange={handleChange} />
            </div>
          </div>)
}

export default General;
