import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import "./App.css";
import axios from 'axios';

const initialProducts = [
  {
    id: 1,
    name: 'Playera Naruto',
    price: 290,
    category: 'Anime',
    type: 'Playera',
    color: 'Amarillo',
    size: 'M',
    image: 'https://i.pinimg.com/736x/64/f2/b8/64f2b8f224181003d33446b462dacf69.jpg', // Aquí reemplaza esta URL con la URL de la imagen de Instagram
    description: 'Descripción de la playera Naruto'
  },
  // Agrega más productos con sus respectivas imágenes y descripciones
  { id: 2, 
    name: 'Playera Natanael Cano', 
    price: 290, 
    category: 'Artista', 
    type: 'Playera', 
    color: 'Rojo', 
    size: 'L', 
    image: 'https://gearbubble-assets.s3.amazonaws.com/7/11584733/22/116/front.png', 
    description: 'Descripción de la playera Natanael Cano' },
  // Agrega más productos con sus respectivas imágenes y descripciones
  { id: 3, name: 'Totebag Stray Kids', price: 200, category: 'Kpop', type: 'Totebag', color: 'Negro', size: 'Unisex' },
  { id: 4, name: 'Playera BTS', price: 290, category: 'Kpop', type: 'Playera', color: 'Negro', size: 'L' },
  { id: 5, name: 'Sudadera Crepusculo', price: 480, category: 'Pelicula', type: 'Sudadera', color: 'Verde', size: 'XXL' },
  { id: 6, name: 'Sudadera Lana del Rey', price: 480, category: 'Artista', type: 'Sudadera', color: 'Rojo', size: 'S' },
];

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
    <div>
      <header className="header">
        <div className="logo">
          <img src="imagenes/a ver/logo" alt="Logo de la empresa" />
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#productos">Productos</a></li> {/* Cambiado el href para desplazarse a la sección de productos */}
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <div className="product-grid">
          <div id="productos">
            <h1>Productos</h1>
            {filteredProducts.map(product => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} />
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Button onIncrement={handleIncrement} onDecrement={handleDecrement} />
          <button>{counter}</button>
        </div>
        <div className="container">
          <div className="menu">
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
        </div>
      </div>
    </div>
  );
};

export default App;
