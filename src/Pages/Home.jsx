import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Tabs, Tab, Row, Col, Carousel } from "react-bootstrap";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const [activeKey, setActiveKey] = useState("CALIDAD");

  const imagenes = {
    CALIDAD: "/assets/materia-prima.jpg",
    TRAYECTORIA: "/assets/trabajo.jpg",
    INNOVACION: "/assets/robot1.jpg",
  };

  return (
    <>
      <Helmet>
        {/* Título y descripción general */}
        <title>
          Potenza Aberturas | Fábrica de Puertas, Ventanas y Frentes a Medida
        </title>
        <meta
          name="description"
          content="En Potenza fabricamos aberturas de alta calidad en madera, aluminio y chapa. Puertas, ventanas y frentes de placard a medida con tecnología de punta, diseño innovador y durabilidad."
        />

        {/* Open Graph - Para Facebook, Instagram, LinkedIn */}
        <meta
          property="og:title"
          content="Potenza Aberturas | Soluciones en Puertas, Ventanas y Frentes"
        />
        <meta
          property="og:description"
          content="Fábrica especializada en aberturas a medida. Puertas, ventanas y frentes de placard en madera, aluminio y chapa."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mpotenza.com.ar" />
        <meta
          property="og:image"
          content="https://mpotenza.com.ar/assets/empresa.jpg"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Potenza Aberturas | Diseño y Fabricación"
        />
        <meta
          name="twitter:description"
          content="Puertas, ventanas y frentes a medida con diseño, calidad y precisión."
        />
        <meta
          name="twitter:image"
          content="https://mpotenza.com.ar/assets/empresa.jpg"
        />
      </Helmet>

      <section className="portada">
        <img
          src="/assets/stock.jpg"
          alt="imagen materia prima Potenza"
          className="foto-portada foto-portada1"
        />
        <img
          src="/assets/tecnologia.jpg"
          alt="imagen robot Potenza"
          className="foto-portada"
        />
        <img
          src="/assets/experiencia.jpg"
          alt="imagen trabajador Potenza"
          className="foto-portada"
        />
      </section>

      <section className="frase-potenza">
        <div>
          <h1 className="frase-negro" data-aos="fade-right">
            Potenza, somos más que aberturas, somos el inicio de cada espacio.
          </h1>
          <h1 className="frase-rojo" data-aos="fade-right" data-aos-delay="200">
            Diseñamos accesos que combinan seguridad, innovación y estilo.
          </h1>
          <h1
            className="frase-negro"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Porque detrás de cada puerta, hay una historia.
          </h1>
        </div>
      </section>

      <section className="productos">
        <div className="bloque">
          <img className="foto-prod" src="/assets/puerta.jpg" alt="ej1"></img>
          <a href="/">Puertas placa</a>
        </div>
        <div className="bloque">
          <a href="/">Puertas resistentes al fuego</a>
          <img className="foto-prod" src="/assets/puerta.jpg" alt="ej1"></img>
        </div>
      </section>

      <section className="ejes py-4">
        <Row className="align-items-start">
          <Col md={6}>
            <img
              src={imagenes[activeKey]}
              alt={`Imagen de ${activeKey}`}
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <Tabs
              activeKey={activeKey}
              onSelect={(k) => setActiveKey(k)}
              className="mb-3 tab custom-tabs"
            >
              <Tab className="tab-content" eventKey="CALIDAD" title="CALIDAD">
                <p>
                  La calidad no es solo un estándar, es nuestro compromiso
                  fundamental. Sabemos que cada abertura es una inversión clave
                  en la seguridad, el confort y la estética de tu hogar o
                  proyecto. Por eso, nos dedicamos a asegurar la excelencia en
                  cada etapa del proceso desde la elección de la materia prima
                  hasta la fabricación y el acabado final.
                </p>
              </Tab>
              <Tab
                className="tab-content"
                eventKey="TRAYECTORIA"
                title="TRAYECTORIA"
              >
                <p>
                  Con más de 50 años de experiencia, somos referentes en el
                  mercado de aberturas de Argentina. Cada día sumamos
                  experiencia y conocimientos que nos permiten mejorar
                  continuamente. Hemos crecido y nos hemos adaptado junto a la
                  arquitectura y el diseño, perfeccionando nuestros procesos y
                  entendiendo qué funciona mejor en nuestro contexto. Nuestra
                  experiencia se traduce en eficiencia, en soluciones probadas y
                  en la tranquilidad de saber que estás trabajando con un equipo
                  que realmente entiende lo que hace.
                </p>
              </Tab>
              <Tab
                className="tab-content"
                eventKey="INNOVACION"
                title="INNOVACIÓN"
              >
                <p>
                  Innovación y Diseño de Vanguardia En Potenza, no solo
                  fabricamos aberturas; las creamos pensando en el futuro. Nos
                  dedicamos a la innovación constante para ofrecerte productos
                  que no solo cumplen, sino que superan tus expectativas de
                  estilo y funcionalidad. Entendemos que cada proyecto es único.
                  Por eso, nuestras aberturas se adaptan perfectamente a tus
                  necesidades. Tu visión es nuestra inspiración.
                </p>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </section>
      <section className="novedades">
        <h1>Novedades</h1>
        <Carousel>
          <Carousel.Item interval={3333}>
            <img
              className="foto-prod"
              src="/assets/novedad1.png"
              alt="ej1"
            ></img>
          </Carousel.Item>
          <Carousel.Item interval={3333}>
            <img
              className="foto-prod"
              src="/assets/novedad2.png"
              alt="ej1"
            ></img>
          </Carousel.Item>
          <Carousel.Item interval={3333}>
            <img
              className="foto-prod"
              src="/assets/novedad1.png"
              alt="ej1"
            ></img>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="diferenciadores-potenza">
        <h2 className="titulo-diferenciadores">Por qué elegir Potenza</h2>
        <div className="grilla-diferenciadores">
          <div
            className="item-diferenciador"
            data-aos="zoom-in-right"
            data-aos-delay="200"
          >
            <i className="bi bi-tools"></i>
            <h3>Precisión técnica</h3>
            <p>
              Maquinaria CNC de alta tecnología para cortes exactos y resultados
              consistentes.
            </p>
          </div>
          <div
            className="item-diferenciador"
            data-aos="zoom-in-right"
            data-aos-delay="200"
          >
            <i className="bi bi-truck"></i>
            <h3>Entregas confiables</h3>
            <p>
              Coordinamos y cumplimos los tiempos pactados para tu obra sin
              contratiempos.
            </p>
          </div>
          <div
            className="item-diferenciador"
            data-aos="zoom-in-right"
            data-aos-delay="200"
          >
            <i className="bi bi-person-check"></i>
            <h3>Asesoramiento profesional</h3>
            <p>
              Acompañamiento técnico en cada etapa del proceso, desde el diseño
              hasta la entrega.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
