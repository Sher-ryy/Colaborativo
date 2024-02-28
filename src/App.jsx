import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import Div from './components/Div';
import Input from './components/Input';
import "./App.css";
import axios from 'axios';


const initialProducts = [
  document.addEventListener("DOMContentLoaded", function() {
    const products = [
      { id: 1, name: 'Playera Naruto', price: 290, category: 'Anime', type: 'Playera', color: 'Amarillo', size: 'M', image: 'url_de_la_imagen_1', description: 'Descripción de la playera Naruto' },
      { id: 2, name: 'Playera Natanael Cano', price: 290, category: 'Artista', type: 'Playera', color: 'Rojo', size: 'L', image: 'url_de_la_imagen_2', description: 'Descripción de la playera Natanael Cano' },
      { id: 3, name: 'Totebag Stray Kids', price: 200, category: 'Kpop', type: 'Totebag', color: 'Negro', size: 'Unisex', image: 'url_de_la_imagen_3', description: 'Descripción de la totebag Stray Kids' },
      { id: 4, name: 'Playera BTS', price: 290, category: 'Kpop', type: 'Playera', color: 'Negro', size: 'L', image: 'url_de_la_imagen_4', description: 'Descripción de la playera BTS' },
      { id: 5, name: 'Sudadera Crepusculo', price: 480, category: 'Pelicula', type: 'Sudadera', color: 'Verde', size: 'XXL', image: 'url_de_la_imagen_5', description: 'Descripción de la sudadera Crepusculo' },
      { id: 6, name: 'Sudadera Lana de', price: 400, category: 'Pelicula', type: 'Sudadera', color: 'Azul', size: 'L', image: 'url_de_la_imagen_6', description: 'Descripción de la sudadera Lana de' }
    ];
  
    const productContainer = document.getElementById('product-container');
  
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');
      
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p><strong>Precio:</strong> $${product.price}</p>
        <p><strong>Categoría:</strong> ${product.category}</p>
        <p><strong>Tipo:</strong> ${product.type}</p>
        <p><strong>Color:</strong> ${product.color}</p>
        <p><strong>Talla:</strong> ${product.size}</p>
        <p><strong>Descripción:</strong> ${product.description}</p>
      `;
      
      productContainer.appendChild(card);
    });
  })]
  
const App = () => {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState({ price: '', category: '', type: '', color: '', size: '' });

  const handleIncrement = () => {
    if (counter < 100) {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

    

  const handleFilterChange = (key, value) => {
    setFilter({ ...filter, [key]: value });
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setData(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
    fetchData();
  }, []);
  

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
    <div className="container">
      <div className="menu">
        <h2>Menú</h2>
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
      </div>
      <div className="content">
        <h1>Productos</h1>
        <div className="product-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <p>{product.description}</p>
            </div>
          ))}
        </div>
        <div>
          <Button onIncrement={handleIncrement} onDecrement={handleDecrement} />
          <button>{counter}</button>
        </div>
      </div>
    </div>
  );
};

export default App;
