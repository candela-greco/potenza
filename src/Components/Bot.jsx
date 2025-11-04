import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const ProductosLinks = () => (
  <div>
    <a
      href="/productos/puertas-placa"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#fff",
        textDecoration: "none",
        display: "block",
        marginBottom: "5px",
      }}
    >
      Puertas placa
    </a>
    <a
      href="/productos/resistentes-al-fuego"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#fff", textDecoration: "none", display: "block" }}
    >
      Puertas resistentes al fuego
    </a>
  </div>
);

const ProductoLinksMessage = () => <ProductosLinks />;

const DistibuidoresLink = () => (
  <div>
    <a
      href="/productos/puertas-placa"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#fff",
        textDecoration: "none",
        display: "block",
        marginBottom: "5px",
      }}
    >
      Distribuidores
    </a>
  </div>
);

const steps = [
  {
    id: "1",
    message: "¡Hola! ¿En qué puedo ayudarte?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: "productos", label: "Ver productos", trigger: "3" },
      { value: "horarios", label: "Consultar horarios", trigger: "4" },
      {
        value: "distribuidores",
        label: "Consultar distribuidores",
        trigger: "5",
      },
    ],
  },
  {
    id: "3",
    component: <ProductoLinksMessage />,
    asMessage: true,
    end: true,
  },
  {
    id: "4",
    message: "Nuestro horario es de lunes a viernes, de 8-12hs y de 13-18 hs.",
    end: true,
  },
  {
    id: "5",
    component: <DistibuidoresLink />,
    asMessage: true,
    end: true,
  },
];

const theme = {
  background: "#fff",
  fontFamily: "Arial, sans-serif",
  headerBgColor: "#aa3937",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#aa3937",
  botFontColor: "#fff",
  userBubbleColor: "#000",
  userFontColor: "#fff",
  botAvatar: "/assets/bot.png",
  userAvatar: "/assets/user-avatar.png",
};

function Bot() {
  return (
    <div
      style={{
        width: "400px",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          botAvatar={theme.botAvatar}
          userAvatar={theme.userAvatar}
          headerTitle="Potenza Asistente"
          floating={true}
        />
      </ThemeProvider>
    </div>
  );
}

export default Bot;
