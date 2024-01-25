import React, { useState } from 'react';

const initialProducts = [
  { id: 1, name: 'Playera Naruto', price: 290, category: 'Anime', type: 'Playera', color: 'Amarillo', size: 'M' },
  { id: 2, name: 'Playera Natanael Cano', price: 290, category: 'Artista', type: 'Playera', color: 'Rojo', size: 'L' },
  { id: 3, name: 'Totebag Stray Kids', price: 200, category: 'Kpop', type: 'Totebag', color: 'Negro', size: 'Unisex' },
  { id: 4, name: 'Playera BTS', price: 290, category: 'Kpop', type: 'Playera', color: 'Negro', size: 'L' },
  { id: 5, name: 'Sudadera Crepusculo', price: 480, category: 'Pelicula', type: 'Sudadera', color: 'Verde', size: 'XXL' },
  { id: 6, name: 'Sudadera Lana del Rey', price: 480, category: 'Artista', type: 'Sudadera', color: 'Rojo', size: 'S' },

  // Agrega más productos según sea necesario
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState({ price: '', category: '', type: '', color: '', size: '' });

  const handleFilterChange = (key, value) => {
    setFilter({ ...filter, [key]: value });
  };

  const filteredProducts = products.filter(product => {
    return (
      product.price.toString().includes(filter.price) &&
      product.category.toLowerCase().includes(filter.category.toLowerCase()) &&
      product.type.toLowerCase().includes(filter.type.toLowerCase()) &&
      product.color.toLowerCase().includes(filter.color.toLowerCase()) &&
      product.size.toLowerCase().includes(filter.size.toLowerCase())
    );
  });

  return (
    <div>
      <h1>Productos</h1>
      <div>
        <label>Precio:</label>
        <input type="text" value={filter.price} onChange={(e) => handleFilterChange('price', e.target.value)} />
      </div>
      <div>
        <label>Tematica:</label>
        <input type="text" value={filter.category} onChange={(e) => handleFilterChange('category', e.target.value)} />
      </div>
      <div>
        <label>Tipo:</label>
        <input type="text" value={filter.type} onChange={(e) => handleFilterChange('type', e.target.value)} />
      </div>
      <div>
        <label>Color:</label>
        <input type="text" value={filter.color} onChange={(e) => handleFilterChange('color', e.target.value)} />
      </div>
      <div>
        <label>Talla:</label>
        <input type="text" value={filter.size} onChange={(e) => handleFilterChange('size', e.target.value)} />
      </div>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price} - {product.category} - {product.type} - {product.color} - {product.size}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
