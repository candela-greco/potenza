import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Hotspot = ({ id, content, style, open, setOpen }) => (
  <div className="hotspot-wrapper" style={style}>
    <button
      type="button"
      className="hotspot"
      aria-label={`Mostrar información del punto ${id}`}
      onClick={(e) => {
        e.stopPropagation();
        setOpen(open === id ? null : id);
      }}
    />
    {open === id && <div className="tooltip">{content}</div>}
  </div>
);

Hotspot.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.node.isRequired,
  style: PropTypes.object.isRequired,
  open: PropTypes.number,
  setOpen: PropTypes.func.isRequired,
};

const PuertaDobleContacto = () => {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".hotspot-wrapper")) {
        setOpen(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="page-container">
      <h1 className="title">Puerta Doble Contacto</h1>
      <div className="image-container">
        <img
          src="/assets/puerta-doble.png"
          alt="Puerta Doble Contacto"
          className="door-image"
        />

        <Hotspot
          id={1}
          open={open}
          setOpen={setOpen}
          style={{ top: "11%", left: "90%" }}
          content={
            <>
              <p><strong>Bisagra de hierro zincada</strong></p>
              <img
                src="/assets/bisagra.png"
                alt="Imagen de bisagra de hierro zincada"
                style={{ width: "120px", borderRadius: "6px" }}
              />
            </>
          }
        />
        <Hotspot
          id={2}
          open={open}
          setOpen={setOpen}
          style={{ top: "57%", left: "15%" }}
          content={
            <>
              <p><strong>Cerradura común sin manija</strong></p>
              <img
                src="/assets/cerradura.png"
                alt="Imagen de cerradura común sin manija"
                style={{ width: "120px", borderRadius: "6px" }}
              />
            </>
          }
        />
        <Hotspot
          id={3}
          open={open}
          setOpen={setOpen}
          style={{ top: "3%", left: "4%" }}
          content={
            <>
              <p><strong>Marco de chapa</strong></p>
              <img
                src="/assets/marco-chapa.png"
                alt="Imagen de marco de chapa"
                style={{ width: "120px", borderRadius: "6px" }}
              />
              <p><strong>o Marco de pino</strong></p>
              <img
                src="/assets/marco-pino.png"
                alt="Imagen de marco de pino"
                style={{ width: "120px", borderRadius: "6px" }}
              />
            </>
          }
        />
        <Hotspot
          id={4}
          open={open}
          setOpen={setOpen}
          style={{ top: "77%", left: "55%" }}
          content={
            <>
              <p><strong>Relleno estándar</strong></p>
              <img
                src="/assets/relleno-estandar.png"
                alt="Imagen de relleno estándar"
                style={{ width: "120px", borderRadius: "6px" }}
              />
              <p><strong>Relleno acústico opcional</strong></p>
              <img
                src="/assets/relleno-acustico.png"
                alt="Imagen de relleno acústico opcional"
                style={{ width: "120px", borderRadius: "6px" }}
              />
            </>
          }
        />
      </div>
    </div>
  );
};

export default PuertaDobleContacto;


