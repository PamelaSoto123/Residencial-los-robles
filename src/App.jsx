import React, { useState } from "react";
import "./App.css";

function App() {
  const [seccion, setSeccion] = useState("actividades");

  const mostrarSeccion = () => {
    switch (seccion) {
      case "actividades":
        return (
          <section className="card">
            <h2>Actividades realizadas en el curso</h2>
            <p>
              Durante el curso he trabajado en diferentes actividades
              que me ayudaron a conocer y practicar el desarrollo web.
            </p>

            <ul>
              <li>Prácticas de HTML y estructura de páginas web.</li>
              <li>Uso de CSS para colores, tipografías y diseño.</li>
              <li>Ejercicios de organización y posicionamiento de elementos.</li>
              <li>Desarrollo de interfaces con React.</li>
              <li>Planeación y organización del proyecto mediante SCRUM.</li>
              <li>Corrección de errores y publicación de la aplicación.</li>
            </ul>
          </section>
        );

      case "sistema":
        return (
          <>
            <h2>Sistema implementado</h2>
            <p>
              El proyecto Residencial Los Robles busca facilitar
              la consulta de información de los residentes,
              los pagos de mantenimiento y los avisos importantes.
            </p>

            <section className="card">
              <h3>Portal de residentes</h3>
              <p>
                Consulta tus cuotas de mantenimiento
                y mantente informado sobre tu residencial.
              </p>
            </section>

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

            <section className="card">
              <h3>Reglamento</h3>
              <p>
                Espacio destinado a consultar las reglas
                y disposiciones del residencial.
              </p>
            </section>
          </>
        );

      case "codigo":
        return (
          <section className="card">
            <h2>Código fuente</h2>
            <p>
              El proyecto fue desarrollado utilizando React,
              CSS y JavaScript. El código fuente contiene
              los archivos necesarios para visualizar y
              organizar la aplicación.
            </p>

            <p>
              Aquí se incluirá el enlace al repositorio
              de GitHub y el archivo comprimido del proyecto.
            </p>

            <p>
              <strong>Repositorio:</strong> pendiente de agregar
            </p>
          </section>
        );

      case "reporte":
        return (
          <section className="card">
            <h2>Reporte de modificaciones realizadas</h2>

            <p>
              Durante el desarrollo del proyecto se realizaron
              cambios para mejorar la organización y presentación
              del portal de Residencial Los Robles.
            </p>

            <ul>
              <li>Se creó la estructura de la aplicación con React.</li>
              <li>Se organizaron los elementos del encabezado y menú.</li>
              <li>Se agregaron secciones para el contenido del portal.</li>
              <li>Se trabajó en los estilos utilizando CSS.</li>
              <li>Se corrigieron errores durante la integración del código.</li>
              <li>Se revisó el funcionamiento de la aplicación.</li>
              <li>Se publicó el proyecto en Vercel.</li>
            </ul>

            <p>
              Estos cambios permitieron avanzar en la creación
              de una interfaz más organizada y en la presentación
              del proyecto terminado.
            </p>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Residencial Los Robles</h1>
        <p>Portal de residentes</p>
      </header>

      <nav>
        <button onClick={() => setSeccion("actividades")}>
          Actividades del curso
        </button>

        <button onClick={() => setSeccion("sistema")}>
          Sistema implementado
        </button>

        <button onClick={() => setSeccion("codigo")}>
          Código fuente
        </button>

        <button onClick={() => setSeccion("reporte")}>
          Reporte de modificaciones
        </button>
      </nav>

      <main>
        {mostrarSeccion()}
      </main>
    </div>
  );
}

export default App;
