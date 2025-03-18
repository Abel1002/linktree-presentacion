import { Box, HStack, Link, Text, IconButton, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, Flex, Container, Show, Hide, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineMail, AiFillFileText, AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";

const NavItem = ({ icon, children, to, isMobile = false }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      as={RouterLink} 
      to={to}
      fontWeight="bold"
      position="relative"
      color={isActive ? "white" : "whiteAlpha.900"}
      _hover={{ 
        textDecoration: "none",
        color: "white"
      }}
      py={2}
      px={isMobile ? 3 : 4}
      borderRadius={isMobile ? "md" : "none"}
      bg={isMobile && isActive ? "rgba(255, 255, 255, 0.2)" : "transparent"}
    >
      <HStack spacing={2} align="center">
        {icon}
        <Text fontWeight={isActive ? "bold" : "medium"}>
          {children}
        </Text>
      </HStack>
      
      {!isMobile && isActive && (
        <Box
          position="absolute"
          bottom="-1px"
          left="0"
          height="3px"
          width="100%"
          bg="white"
          borderRadius="full"
        />
      )}
    </Link>
  );
};

const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  
  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <Box bg="#11132c" minH="100vh">
      {/* AppBar para pantallas medianas y grandes */}
      <Box
        as="nav"
        bg={scrolled ? "#057fc0" : "rgba(5, 127, 192, 0.85)"}
        color="white"
        position="fixed"
        top="0"
        left="0"
        width="100%"
        zIndex="1000"
        boxShadow={scrolled ? "0 2px 10px rgba(0, 0, 0, 0.2)" : "none"}
        backdropFilter={!scrolled ? "blur(10px)" : "none"}
        transition="all 0.3s ease"
      >
        <Container maxW="container.xl" p={0}>
          <Flex 
            py={3} 
            px={{ base: 4, md: 6 }}
            justifyContent="space-between" 
            alignItems="center"
          >
            {/* Logo */}
            <Link 
              as={RouterLink} 
              to="/" 
              fontSize="xl" 
              fontWeight="bold"
              _hover={{ textDecoration: "none" }}
            >
              <HStack>
                <Box 
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="white" 
                  color="#057fc0" 
                  p={1} 
                  borderRadius="md"
                  mr={1}
                >
                  <Text fontWeight="black">AP</Text>
                </Box>
                <Hide below="md">
                  <Text>Abel Perez</Text>
                </Hide>
              </HStack>
            </Link>
            
            {/* Menú para pantallas medianas y grandes */}
            <Hide below="md">
              <HStack spacing={{ base: 2, md: 4, lg: 6 }}>
                <NavItem icon={<AiFillHome size={20} />} to="/">
                  Inicio
                </NavItem>
                <NavItem icon={<AiOutlineMail size={20} />} to="/contacto">
                  Contacto
                </NavItem>
                <NavItem icon={<AiFillFileText size={20} />} to="/noticias">
                  Noticias y Recursos
                </NavItem>
              </HStack>
            </Hide>
            
            {/* Botón de menú para móviles */}
            <Show below="md">
              <IconButton
                aria-label="Abrir menú"
                icon={<AiOutlineMenu size={24} />}
                onClick={onOpen}
                variant="ghost"
                colorScheme="whiteAlpha"
                _hover={{
                  bg: "whiteAlpha.200"
                }}
              />
            </Show>
          </Flex>
        </Container>
      </Box>
      
      {/* Drawer para móviles */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#057fc0" color="white">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <HStack>
              <Box 
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                bg="white" 
                color="#057fc0" 
                p={1} 
                borderRadius="md"
                mr={1}
              >
                <Text fontWeight="black">AP</Text>
              </Box>
              <Text>Menú</Text>
            </HStack>
          </DrawerHeader>
          
          <DrawerBody p={0}>
            <Flex direction="column" mt={4}>
              <NavItem icon={<AiFillHome size={20} />} to="/" isMobile onClick={onClose}>
                Inicio
              </NavItem>
              <NavItem icon={<AiOutlineMail size={20} />} to="/contacto" isMobile onClick={onClose}>
                Contacto
              </NavItem>
              <NavItem icon={<AiFillFileText size={20} />} to="/noticias" isMobile onClick={onClose}>
                Noticias y Referencias
              </NavItem>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Contenido de la página con margen superior */}
      <Box pt={{ base: "60px", md: "70px" }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;