function Distribuidores() {
  return (
    <div className="distribuidores">
      <h2>Distribuidores Potenza</h2>
      <p>Buscá donde comprar nuestros productos:</p>

      <div className="mapa-distribuidores">
        <iframe
          title="Mapa Distribuidores Potenza"
          src="https://www.google.com/maps/d/embed?mid=1il4AbUE0wbh0eMGJaZqHvtHcZxGGCqc&ehbc=2E312F"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Distribuidores;
