export function bind( context, ...funcNames ) {
  funcNames.forEach( funcName => {
    if(typeof context[funcName] === 'function') {
      context[funcName] = context[funcName].bind(context);
    }  
  } );
}
