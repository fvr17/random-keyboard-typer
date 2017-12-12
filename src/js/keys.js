const KEYS = 'qwertyuiopasdfghjklzxcvbnm'.split('');

export const DEFAULT_KEYS = KEYS.reduce( (acc, key) => {
  acc[key] = key;
  return acc;
}, {} );

function swapValues(obj, key1, key2) {
  let tmp = obj[key1];
  obj[key1] = obj[key2];
  obj[key2] = tmp;
}

function shallowClone(obj) {
  return Object.keys(obj).reduce( (acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} );
}

function randomInt(max, min = 0) {
  return min + Math.floor( Math.random() * (max-min) );
}

export function shuffleKeys(keys) {
  let res = shallowClone(keys);
  let resKeys = Object.keys( shallowClone(keys) );
  
  resKeys.forEach( key =>
    swapValues( res, key, randomInt(resKeys.length) )
  );

  return res;
}
