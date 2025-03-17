import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import Noticias from "./Noticias";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#212121",
        color: "white",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/noticias" element={<Noticias />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
