import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={styles.container}>
      
      {/* ENCABEZADO */}
      <header style={styles.header}>
        <h1 style={styles.title} className='text-background-clip'>Página Informativa</h1>
        <p style={styles.subtitle}>Ejemplo práctico de un sitio en React para pruebas de despliegue</p>
      </header>

      {/* SECCIÓN PRINCIPAL */}
      <section style={styles.section} className='prc-main-clas'>
        <h2 style={styles.sectionTitle}>¿Qué ofrece esta página?</h2>
        <p style={styles.text}>
          Esta es una página de demostración creada con React. Su objetivo es mostrar cómo se construye,
          despliega y actualiza un sitio web en un servicio gratuito como Vercel utilizando Git.
        </p>
        <p style={styles.text}>
          Puedes modificar su contenido, realizar cambios y subir nuevas versiones de manera sencilla.
        </p>
      </section>

      {/* CARACTERÍSTICAS */}
      <section style={styles.section} className='car-main-class'>
        <h2 style={styles.sectionTitle}>Características</h2>

        <ul style={styles.list}>
          <li>✔ Página simple en React</li>
          <li>✔ Diseño limpio y responsivo</li>
          <li>✔ Perfecta para pruebas de hosting</li>
          <li>✔ Fácil de actualizar con Git y Vercel</li>
          <li>✔ Sin dependencias externas</li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© 2025 Página Informativa Demo — React + Vercel</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px"
  },
  title: {
    fontSize: "2.5rem",
    margin: 0
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555"
  },
  section: {
    marginBottom: "40px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  sectionTitle: {
    fontSize: "1.8rem",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.1rem",
    marginBottom: "10px"
  },
  list: {
    fontSize: "1.1rem",
    listStyle: "none",
    paddingLeft: 0
  },
  footer: {
    textAlign: "center",
    marginTop: "40px",
    fontSize: "0.9rem",
    color: "#777"
  }
};

export default App;

