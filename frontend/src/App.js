import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Hello world</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - {p.price.toLocaleString()}đ
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;