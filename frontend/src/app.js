import React, { useState, useEffect } from 'react';
import Item from './components/Item';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
  });

  const fetchItems = async () => {
    const response = await fetch('/marketplace/get-items');
    const data = await response.json();
    setItems(data);
  };

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const addItem = async () => {
    const response = await fetch('/marketplace/add-item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
    if (response.ok) {
      setNewItem({ name: '', description: '', category: '', price: '' });
      fetchItems();
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div style={styles.container}>
      <h1>WasteWise Marketplace</h1>
      <div style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={newItem.name}
          onChange={handleInputChange}
          style={styles.input}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newItem.description}
          onChange={handleInputChange}
          style={styles.input}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newItem.category}
          onChange={handleInputChange}
          style={styles.input}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newItem.price}
          onChange={handleInputChange}
          style={styles.input}
        />
        <button onClick={addItem} style={styles.button}>
          Add Item
        </button>
      </div>
      <div style={styles.itemsList}>
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  form: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
  },
  itemsList: {
    marginTop: '20px',
  },
};

export default App;
