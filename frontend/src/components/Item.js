import React from 'react';

const Item = ({ item }) => {
  return (
    <div style={styles.itemContainer}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Price:</strong> ${item.price}</p>
    </div>
  );
};

const styles = {
  itemContainer: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '15px',
    margin: '10px 0',
    backgroundColor: '#f9f9f9',
  },
};

export default Item;
