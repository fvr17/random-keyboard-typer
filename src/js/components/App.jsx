import React from 'react';
import KeyboardDisplay from 'app/components/KeyboardDisplay.jsx';
import MainInput from 'app/components/MainInput.jsx';
import { DEFAULT_KEYS, shuffleKeys } from 'app/keys.js';
import { bind } from 'app/utils.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    bind(this, 'handleInputChange');

    this.state = {
      keys: DEFAULT_KEYS,
      inputValue: ''
    };
  }
  handleInputChange(event) {
    let str = event.target.value;
    let {
      keys,
      inputValue
    } = this.state;

    if( str.length > inputValue.length ) {
      let last = str[str.length-1];
      last = last.toLowerCase();
      if( keys[last] !== undefined ) {
        last = keys[last];
        str = str.slice(0, -1) + last;
        keys = shuffleKeys(keys);
      }
    }

    this.setState({
      inputValue: str,
      keys: keys
    });
  }
  render () {
    let {
      state: {
        keys,
        inputValue
      }
    } = this;

    return <div className='app'>
      <MainInput value={inputValue} onChange={this.handleInputChange}/>
      <KeyboardDisplay keys={keys}/>  
    </div>;
  }
}
