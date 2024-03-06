import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState([]);
  const [filterValues, setFilterValues] = useState({
    price: '',
    category: '',
    type: '',
    color: '',
    size: '',
  });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentView, setCurrentView] = useState('inicio');
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('Product IDs:', products.map(product => product.id));
  }, [products]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        Object.values(filterValues)
          .every((value) => value === '' || product[Object.keys(product)].toString().toLowerCase().includes(value.toLowerCase()))
      )
    );
  }, [filterValues, products]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

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

  const handleFilterChange = (e) => {
    setFilterValues({ ...filterValues, [e.target.name]: e.target.value });
  };

  const scrollToView = (view) => {
    const element = document.getElementById(view);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <img src="src/assets/PINKCHERRYLOGO.jpg" alt="Logo de la empresa" className="logo-img" />
        </div>
        <nav className="menu">
          <button className="menu-item" onClick={() => scrollToView('inicio')}>
            Inicio
          </button>
          <button className="menu-item" onClick={() => scrollToView('prendas')}>
            Prendas
          </button>
          <button className="menu-item" onClick={() => scrollToView('contactanos')}>
            Contactanos
          </button>
        </nav>
      </header>
      
      <div>
        <section id="inicio" className="view">
          <h1>¡¡¡Descubre la Magia de Pink Cerry!!!🍒🌟</h1>
          <h3>¡Bienvenidos a Pink Cerry!🍒🍒</h3>

<p>¡Nos emociona mucho tenerte aquí explorando nuestra colección de ropa unisex con diseños frescos, creativos y personalizados a precios irresistibles! En Pink Cerry, creemos en la moda que no conoce límites de género y que celebra la individualidad de cada persona.</p>

<p>Nuestro equipo se esfuerza por ofrecerte piezas únicas que no solo te hagan lucir bien, sino que también te hagan sentir genial. Desde camisetas con estampados únicos hasta sudaderas con diseños vanguardistas, tenemos algo para cada estilo y ocasión.</p>

<p>Estamos seguros de que encontrarás algo que te encante aquí en Pink Cerry. ¡Así que no dudes en explorar, llenar tu carrito y llevarte a casa un poco de nuestra magia!</p>

<p>¿Listo para comenzar tu aventura de compras? ¡Síguenos en Instagram _pink.cherryy_ para estar al tanto de las últimas novedades y no dudes en ponerte en contacto con nosotros si necesitas ayuda o tienes alguna pregunta!</p>

<p>¡Gracias por elegir Pink Cerry, donde la moda es sinónimo de diversión y autenticidad!</p>

<p>¡Feliz exploración y feliz compra!</p>

<a href="https://www.instagram.com/_pink.cherryy_/" target="_blank">@_pink.cherryy_</a>
        </section>

      </div>
      <div>
      <section id="prendas" className="view">
          <h1>"Estilo sin Límites"🍒🌟</h1>
        </section>
      <div>
        <section id="contactanos" className="view">
          <h1>no se, bb</h1>
        </section>
        </div>
      </div>
    </div>
  
  );
};

export default App;