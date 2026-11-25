import React from "react";
import " ./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Residencial Los Robles</h1>
        <p>Portal de residentes</p>
      </header>

      <nav>
        <a href="#">Inicio</a>
        <a href="#">Mis pagos</a>
        <a href="#">Avisos</a>
        <a href="#">Reglamento</a>
      </nav>

      <main>
        <h2>Bienvenido al portal</h2>
        <p>
          Consulta tus cuotas de mantenimiento
          y mantente informado sobre tu residencial.
        </p>

        <section className="card">
          <h3>Estado de mantenimiento</h3>
          <p>Consulta tu historial de pagos.</p>
          <button>Consultar pagos</button>
        </section>

        <section className="card">
          <h3>Avisos importantes</h3>
          <p>
            Aquí se publicarán avisos y noticias
            de Residencial Los Robles.
          </p>
        </section>
      </main>
    </div>
  );
}
