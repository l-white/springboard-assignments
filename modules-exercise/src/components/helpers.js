import React from 'react';

function choice(items){
  return (items[Math.floor(Math.random()*items.length)]);
}

function remove(item, items){
  const idx = items.indexOf(item);
  return (items.indexOf(item) === -1 ? undefined: items.slice(idx, 1));
}

export {
  choice, remove
}

