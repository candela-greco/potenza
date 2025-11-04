import { Helmet } from "react-helmet";

const Productos = () => {
  return (
    <>
      <Helmet>
        <title>Metalúrgica Potenza | Productos</title>
        <meta
          name="description"
          content="Descubrí los productos de Metalúrgica Potenza: puertas placa, puertas resistentes al fuego y aberturas metálicas de máxima calidad y certificadas por INTI."
        />
        <meta
          name="keywords"
          content="Metalúrgica Potenza, productos, puertas placa, puertas resistentes al fuego, puertas FR 30, puertas FR 60, puertas certificadas INTI, aberturas metálicas"
        />
        <meta name="author" content="Metalúrgica Potenza" />
      </Helmet>

      <section className="productos-banner">
      </section>

      <section className="productos-section">
        <h1>Puertas Potenza</h1>
        <p>Elegí el tipo de puerta ideal para tu proyecto:</p>

        <div className="productos-grid">
          <a href="/Productos/PuertaSimpleContacto" className="producto-card">
            <div className="producto-img">
              <img
                src="/assets/puerta-cerrada.png"
                alt="Puerta Simple Contacto"
                className="cerrada"
              />
              <img
                src="/assets/puerta-abierta.png"
                alt="Puerta Simple Contacto"
                className="abierta"
              />
            </div>
            <p className="producto-label">Puerta simple contacto</p>
          </a>

          <a href="/Productos/DobleContacto" className="producto-card">
            <div className="producto-img">
              <img
                src="/assets/puerta-cerrada.png"
                alt="Puerta Doble Contacto"
                className="cerrada"
              />
              <img
                src="/assets/puerta-abierta.png"
                alt="Puerta Doble Contacto"
                className="abierta"
              />
            </div>
            <p className="producto-label">Puerta doble contacto</p>
          </a>

          <a href="/Productos/ResistenteAlFuego" className="producto-card">
            <div className="producto-img">
              <img
                src="/assets/puerta-cerrada.png"
                alt="Puerta Resistente al Fuego"
                className="cerrada"
              />
              <img
                src="/assets/puerta-abierta.png"
                alt="Puerta Resistente al Fuego"
                className="abierta"
              />
            </div>
            <p className="producto-label">Puerta resistente al fuego</p>
          </a>
        </div>
      </section>
    </>
  );
};

export default Productos;
