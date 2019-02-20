import React from 'react';

/*
  *This function takes collection where "key" it is a color name
    and "value" it is text for the color
*/

const colorContainer = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: 10,
};

function getListMarkedWithColor(collection) {
  // Take keys from collection
  const arrayOfKeys = Object.keys(collection);

  // Create list of 'color - value'
  const markedList = arrayOfKeys.map((color) => {
    const coloredCell = {
      width: 20,
      height: 20,
      backgroundColor: color,
    };

    return (
      <div style={colorContainer}>
        <div style={coloredCell} />
        <p>{` - ${collection[color]}`}</p>
      </div>
    );
  });
  return markedList;
}

export default getListMarkedWithColor;
