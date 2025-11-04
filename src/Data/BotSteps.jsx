export const steps = [
  {
    id: "1",
    message: "¡Hola! ¿En qué puedo ayudarte?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: "puertas", label: "Ver puertas", trigger: "3" },
      { value: "horarios", label: "Consultar horarios", trigger: "4" },
    ],
  },
  {
    id: "3",
    message: "Tenemos puertas, ventanas y portones de alta calidad.",
    end: true,
  },
  {
    id: "4",
    message: "Nuestro horario es de lunes a viernes, de 8 a 17 hs.",
    end: true,
  },
];
