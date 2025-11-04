import { Helmet } from "react-helmet";

const Institucional = () => {
  return (
    <>
      {/* Meta tags para SEO */}
      <Helmet>
        <title>Metalúrgica Potenza | Institucional</title>
        <meta
          name="description"
          content="Metalúrgica Potenza, más de 40 años fabricando puertas placa y resistentes al fuego para obras grandes y distribuidores. Calidad, innovación y certificación INTI."
        />
        <meta
          name="keywords"
          content="Metalúrgica Potenza, puertas placa, puertas resistentes al fuego, puertas FR 30, puertas FR 60, puertas certificadas INTI, aberturas metálicas, obras grandes, distribuidores"
        />
        <meta name="author" content="Metalúrgica Potenza" />
      </Helmet>

      <section
        style={{ padding: "40px 20px", maxWidth: "1000px", margin: "auto" }}
      >
        <h1>Institucional</h1>

        {/* Historia */}
        <h2>Nuestra Historia</h2>
        <p>
          Metalúrgica Potenza fue fundada en <strong>1975</strong> por{" "}
          <strong>Juan Celano</strong>, quien comenzó su emprendimiento en un
          pequeño galpón, fabricando aberturas de diversos materiales. Con el
          tiempo y gracias a su visión, Potenza se posicionó como una de las
          empresas más reconocidas de la industria, manteniendo un crecimiento
          constante.
        </p>
        <p>
          Hoy, con más de <strong>40 años de trayectoria</strong>, combinamos
          innovación en diseño, materia prima de excelencia, tecnología de
          última generación y la pasión de nuestro equipo, con un objetivo
          claro: brindar seguridad y tranquilidad a todos nuestros clientes.
        </p>

        {/* Misión y visión */}
        <h2>Misión</h2>
        <p>
          Satisfacer las necesidades de nuestros clientes ofreciendo productos
          de la mejor calidad, fabricados con maquinarias de alta tecnología que
          nos permiten innovar y optimizar cada proceso de producción.
        </p>

        <h2>Visión</h2>
        <p>
          Ser líderes en la satisfacción del cliente mediante la fabricación y
          distribución de productos en el menor tiempo posible, utilizando
          materiales de vanguardia y capacitando continuamente a nuestro equipo
          para garantizar excelencia en cada detalle.
        </p>

        {/* Diferenciales */}
        <h2>Por qué elegirnos</h2>
        <ul>
          <li>
            Primera empresa en Argentina con certificación del{" "}
            <strong>INTI</strong> para puertas resistentes al fuego FR 30 y FR
            60 con hojas de madera y metálicas, bajo normas{" "}
            <strong>IRAM 11950/51</strong>.
          </li>
          <li>
            Especialistas en <strong>puertas placa</strong> y{" "}
            <strong>puertas resistentes al fuego</strong>.
          </li>
          <li>
            Tecnología de fabricación avanzada para garantizar calidad y
            precisión.
          </li>
          <li>Tiempos de entrega competitivos y confiables.</li>
          <li>Atención personalizada para obras grandes y distribuidores.</li>
          <li>Red logística optimizada para un mayor alcance.</li>
        </ul>

        {/* Proveedores */}
        <h2>Compromiso con la calidad</h2>
        <p>
          Trabajamos junto a los mejores proveedores del mercado, conscientes de
          que la calidad de la materia prima es clave para lograr productos
          seguros, duraderos y que superen las expectativas de nuestros
          clientes.
        </p>

        {/* Testimonios */}
        <h2>Testimonios</h2>
        <p>
          Aquí podrás agregar opiniones reales de clientes satisfechos para
          reforzar la confianza y credibilidad. Ejemplo:
        </p>
        <blockquote
          style={{ borderLeft: "4px solid #aa3937", paddingLeft: "10px" }}
        >
          Excelente calidad y cumplimiento en los plazos de entrega. Un aliado
          clave para nuestras obras.– Cliente de obra
        </blockquote>

        {/* CTA */}
        <div style={{ marginTop: "30px" }}>
          <a
            href="/productos"
            style={{
              display: "inline-block",
              backgroundColor: "#aa3937",
              color: "#fff",
              padding: "12px 20px",
              textDecoration: "none",
              borderRadius: "6px",
              marginRight: "10px",
            }}
          >
            Ver productos
          </a>
          <a
            href="/contacto"
            style={{
              display: "inline-block",
              backgroundColor: "#000",
              color: "#fff",
              padding: "12px 20px",
              textDecoration: "none",
              borderRadius: "6px",
            }}
          >
            Solicitar presupuesto
          </a>
        </div>
      </section>
    </>
  );
};

export default Institucional;
