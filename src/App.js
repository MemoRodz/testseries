import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.css';
import Navbar from './components/NavBar';
import Fibonacci from './components/FibonacciPp';
import Primo from './components/Primopp';
import Triangular from './components/TriangularPp';
import Serie from './components/Seriepp';

import './App.css';

function App() {

  function Inicio() {
    return (
      <div className={styles.txt}>
        <h1>Guillermo Rodríguez</h1>
        <p>
        Soy Egresado de la Licenciatura en Matemáticas Aplicadas y Computación por la Universidad Nacional Autónoma de México,
        poseo un nivel intermedio de inglés y he trabajado con diferentes tecnologías para la administración, captura,
        almacenamiento, análisis de datos; así como desarrollo de herramientas informáticas para eficientar procesos y
        apoyar la toma de decisiones.
      </p>
      <hr />
      <div class="social-icons">
        Correo electrónico: <a class="social-icon" href="mailto:gmo.rodriguez@gmail.com"><i class="fa-regular fa-envelope" /></a><br />
        Linkedin: <a class="social-icon" href="https://www.linkedin.com/in/guillermo-rodr%C3%ADguez-74b10039/"><i class="fab fa-linkedin-in" /></a><br />
        GitHub: <a class="social-icon" href="https://github.com/MemoRodz"><i class="fab fa-github" /></a>
      </div>
      </div>
    );
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/triangular" element={<Triangular />} />
      <Route path="/fibo" element={<Fibonacci />} />
      <Route path="/primo" element={<Primo />} />
      <Route path="/serie" element={<Serie />} />
    </Routes>
    </div>
  );
}

export default App;
