import React from 'react';

const BREAK_INDEXES = [10, 20];

function insertBreaks(array) {
  BREAK_INDEXES.forEach( brIndex =>
    array.splice(brIndex, 0, <br key={'break_'+brIndex}/>)
  );

  return array;
}

export default class KeyboardDisplay extends React.Component {
  render () {
    let {
      props: {
        keys
      }
    } = this;

    return <div className='keyboard-display'>
      {
        insertBreaks(
          Object.entries(keys).map( ([key, value]) => <div
            key={key}
            className='keyboard-display__key'
          > {value}
          </div> )
        )
      }  
    </div>;
  }
}
