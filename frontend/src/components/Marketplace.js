import React, { useState } from 'react';

const Marketplace = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch('/marketplace/get-items');
    const data = await response.json();
    setItems(data);
  };

  return (
    <div>
      <h1>Marketplace</h1>
      <button onClick={fetchItems}>Load Items</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Marketplace;
