import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Table from './components/Table';

function App() {
  const [orderId, setOrderId] = useState('');
  const [price, setPrice] = useState('');
  const [dish, setDish] = useState('');
  const [table, setTable] = useState('');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const storedTableData = localStorage.getItem('tableData');

    if (storedTableData) {
      const parsedData = JSON.parse(storedTableData);
      setTableData(parsedData);
    }
  }, []);



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'orderId':
        setOrderId(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'dish':
        setDish(value);
        break;
      case 'table':
        setTable(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      orderId,
      price,
      dish,
      table,
    };

    setTableData((prevData) => {
      return [...prevData, data];
    });

    localStorage.setItem('tableData', JSON.stringify([...tableData, data]));

    // Clear input fields after submission
    setOrderId('');
    setPrice('');
    setDish('');
    setTable('');
  };

  const deleteCol = (id) => {
    setTableData((prevData) => {
      const newData = prevData.filter((object) => object.orderId !== id);
      localStorage.setItem('tableData', JSON.stringify(newData));
      return newData;
    });
  };
  
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Order ID:
          <input
            type="text"
            name="orderId"
            value={orderId}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Choose Price:
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Choose Dish:
          <input
            type="text"
            name="dish"
            value={dish}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Table:
          <select name="table" value={table} onChange={handleInputChange}>
            <option value="">Select a table</option>
            <option value="table1">Table 1</option>
            <option value="table2">Table 2</option>
            <option value="table3">Table 3</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>

      <div className='table-container' >
        <div>
          <h1>Table 1</h1>
          {tableData
            .filter((object) => object.table === "table1")
            .map((object) => (
              <Table
                key={object.orderId}
                orderId={object.orderId}
                price={object.price}
                dish={object.dish}
                table={object.table}
                deleteCol={deleteCol}
              />
            ))}
        </div>
        <div>
          <h1>Table 2</h1>
          {tableData
            .filter((object) => object.table === "table2")
            .map((object) => (
              <Table
                key={object.orderId}
                orderId={object.orderId}
                price={object.price}
                dish={object.dish}
                table={object.table}
                deleteCol={deleteCol}
              />
            ))}
        </div>
        <div>
          <h1>Table 3</h1>
          {tableData
            .filter((object) => object.table === "table3")
            .map((object) => (
              <Table
                key={object.orderId}
                orderId={object.orderId}
                price={object.price}
                dish={object.dish}
                table={object.table}
                deleteCol={deleteCol}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
