import React from 'react';

export default class MainInput extends React.Component {
  render () {
    let {
      props: {
        onChange,
        value
      }
    } = this;

    return <div className='main-input'>
      <input value={value} onChange={onChange}/>  
    </div>;
  }
}
