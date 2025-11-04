const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <ul className="footer-links">
            <li>
              <a href="/Inicio">Inicio</a>
            </li>
            <li>
              <a href="/Institucional">Institucional</a>
            </li>
            <li>
              <a href="/Productos">Productos</a>
            </li>
            <li>
              <a href="/Contacto">Contacto</a>
            </li>
            <li>
              <a href="/Privacidad">Política de Privacidad</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="footer-links">
            <li>
              <p>
                Dirección: C184, F, Quiróga 1929, José León Suárez, Buenos Aires
              </p>
            </li>
            <li>
              <p>Mail: info@mpotenza.com.ar</p>
            </li>
            <li>
              <p>Tel: 011 4729-0068</p>
            </li>
            <li>
              <p>Lunes a Viernes 8-12hs y 13-18hs</p>
            </li>
          </ul>
        </div>
      </div>
      <p className="derechos">
        &copy; {new Date().getFullYear()} Potenza. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
