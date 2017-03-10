import React from 'react';

const ItemDetail = ({item}) => {
  return <ul>
    <li>Name: {item.name}</li>
    <li>Price: {item.price}</li>
    <li>Happiness: {item.happiness}</li>
  </ul>;
};

export default ItemDetail;
