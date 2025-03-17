import { Box, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <Box bg="#11132c" minH="100vh">
      {/* AppBar */}
      <HStack 
        as="nav" 
        p={4} 
        bg="#057fc0" 
        color="white" 
        justifyContent="center" 
        spacing={10} 
        boxShadow="0 0 10px rgba(5, 127, 192, 0.8)"
        position="fixed" 
        top="0" 
        left="0" 
        width="100%" 
        zIndex="1000"  
      >
        <Link as={RouterLink} to="/" fontWeight="bold" _hover={{ textDecoration: "underline" }}>Inicio</Link>
        <Link as={RouterLink} to="/contacto" fontWeight="bold" _hover={{ textDecoration: "underline" }}>Contacto</Link>
        <Link as={RouterLink} to="/noticias" fontWeight="bold" _hover={{ textDecoration: "underline" }}>Noticias y Referencias</Link>
      </HStack>

      {/* Contenido de la página con margen superior */}
      <Box>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
